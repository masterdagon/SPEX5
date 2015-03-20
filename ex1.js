/**
 * Created by Muggi on 19-03-2015.
 */
var utils = require("./ex1-module");
var a1 = [0,1,2,3,4];

utils.forEach(a1,function(item){console.log(item)});

console.log(utils.filter(a1,function(item){
    if(item >= 3){
        return true;
    }
}));

console.log(utils.map(a1,function(item){
    return item * 10;
}));