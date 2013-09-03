/**
 * Created with JetBrains WebStorm.
 * User: navni.bhojwani
 * Date: 04/09/13
 * Time: 12:13 AM
 * To change this template use File | Settings | File Templates.
 */

var request = require('request');

var getImageUrls = function(pageUrl,callback) {
    request(pageUrl,function(error,response,body) {
        if(error) {
            callback(error);
        }
        var regex1 = /(http:\/\/[0-9a-zA-Z.]+.flixcart.com[0-9a-zA-Z\/\-_]+.png)/;
        var regex2 = /(http:\/\/[0-9a-zA-Z.]+.flixcart.com[0-9a-zA-Z\/\-_]+.jpeg)/;
        var regex3 = /(http:\/\/[0-9a-zA-Z.]+.flixcart.com[0-9a-zA-Z\/\-_]+.jpg)/;
        var result1 = body.match(regex1);
        var result2 = body.match(regex2);
        var result3 = body.match(regex3);
        var result = [];
        result = result.concat(result1,result2,result3);
        result.forEach(function(url) {
            console.log(url);
        });
        console.log(result.length);
    })
};

getImageUrls('http://www.flipkart.com/samsung-galaxy-s-duos-s7562/p/itmdddbup6fn8mmy?pid=MOBDDDBRHVWQZHYY&ref=7af88f21-69d5-4023-97a4-dbbdc48097ed');

