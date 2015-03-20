/**
 * Created by Muggi on 20-03-2015.
 */
var request = require("request");

var optionsGetAll = {
    url: "http://ca-dennisheegaard.rhcloud.com/ca2/api/person",
    method: 'GET',
    json: true
};

request(optionsGetAll, function (error, response, body) {
    if(!error && response.statusCode === 200){
        return console.log("Get all persons: " + JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});

var newPerson = {
    firstname: "Muggi",
    lastname: "Muggison",
    email: "muggi@gmail.com",
    street: "Langbortistanvej",
    additionalinfo : "26",
    zipcode: "2800",
    phone: "288",
    phoneinfo: "Mobile"
};

var optionsCreatePerson = {
    url: "http://ca-dennisheegaard.rhcloud.com/ca2/api/person/create",
    method: 'POST',
    body: newPerson,  //No need to convert into JSON
    json: true
};

var optionsdeletePhone = {
    url: "http://ca-dennisheegaard.rhcloud.com/ca2/api/person/phone",
    method: 'DELETE',
    body: [288],  //No need to convert into JSON
    json: true
};

var newPhone = {
    id : "1",
    number: "123456",
    description : "test phone"
};

var optionsNewPhone = {
    url: "http://ca-dennisheegaard.rhcloud.com/ca2/api/person/phone",
    method: 'POST',
    body: newPhone,  //No need to convert into JSON
    json: true
};

request(optionsCreatePerson, function (error, response, body) {
    if(!error && response.statusCode === 204){
        request(optionsdeletePhone, function (error, response, body) {
            if(!error && response.statusCode === 204){
                request(optionsNewPhone, function (error, response, body) {
                    if(!error && response.statusCode === 204){
                        return console.log("Phone Assigned to Person with id 1!");
                    }
                    console.log(error+ " : " +JSON.stringify(body));
                });
                return console.log("Phone deleted!");
            }
            console.log(error+ " : " +JSON.stringify(body));
        });
        return console.log("Person created!");
    }
    console.log(error+ " : " +JSON.stringify(body));
});







