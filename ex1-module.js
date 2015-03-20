/**
 * Created by Muggi on 19-03-2015.
 */

var utils ={
    forEach : _forEach,
    filter : _filter,
    map : _map
};
module.exports = utils;

function _forEach(arr,callback){
    for(var i =0;i<arr.length;i++){
        callback(arr[i]);
    }
}

function _filter(arr,callback){
    var array=[];
    for(var i = 0; i < arr.length;i++){
        if(callback(arr[i]) == true){
            array.push(arr[i]);
        }
    }
    return array;
};

function _map(arr,callback){
    var array = [];
    for(var i = 0; i < arr.length;i++){
        array.push(callback(arr[i]));
    }
    return array;
};