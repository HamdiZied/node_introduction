var fs = require('fs');
var pathToFile = process.argv[2];
var bufferString

function counter(callback) {
  fs.readFile(pathToFile, function (err, data) {
    bufferString = data.toString().split('\n');
    
    callback();
  });
}

function logMyNumber() {
  console.log(bufferString.length-1);
}

counter(logMyNumber);


// var fs = require('fs')
//var file = process.argv[2]

//fs.readFile(file, function (err, contents) {
  //if (err) {
    //return console.log(err)
  //}
  // fs.readFile(file, 'utf8', callback) can also be used
  //var lines = contents.toString().split('\n').length - 1
  //console.log(lines)
//})