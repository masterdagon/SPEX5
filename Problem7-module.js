/**
 * Created by Muggi on 20-03-2015.
 */
var http = require("http");
var url = "http://www.nationalbanken.dk/_vti_bin/DN/DataService.svc/CurrencyRatesXML?lang=da";
var parseString = require("xml2js").parseString;

function getConverter(callback) {

    http.get(url, function (response) {

        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer += data;


        });
        response.on("end", function () {
            //console.log(buffer);
            parseString(buffer, function (err, result) {
                var list = [];
                for (var i = 0; i < result.exchangerates.dailyrates[0].currency.length; i++) {

                    //console.log(result.exchangerates.dailyrates[0].currency[0].$);
                    list.push({
                        code: result.exchangerates.dailyrates[0].currency[i].$.code,
                        rate: result.exchangerates.dailyrates[0].currency[0].$.rate,
                        desc: result.exchangerates.dailyrates[0].currency[0].$.desc
                    });
                }
                console.log(list);
                var err = null;
                callback(err,list);
            });
        })

    });

}
module.exports(getConverter);