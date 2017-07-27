var app = window.app || {}
/**
 * @author Claudinei Felix
 */
app.request = (function($){
'use strict';
var me = {
    getData: getData,
    saveData: saveData
}



function getData(callback){
    if($.isFunction(callback)){
        $.getJSON('url link', function(data){
            callback(data);
        })
    }else{
        return "Callback deve ser uma função";
    }
}


function saveData(){
    
}



return me;
}(jQuery));


/*
    function getBorrowers(callback) {
        var model = null;
        if ($.isFunction(callback)) {
            model = localStorage["model"];
            if (model) {
                callback(JSON.parse(model));
            } else {
                $.getJSON('link return Json', function (data) {
                    localStorage["model"] = JSON.stringify(data.model);
                    callback(data.model);
                });
            }
        }
    }
*/