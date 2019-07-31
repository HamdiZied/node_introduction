var fs=require('fs');
var filePath=process.argv[2];

var zz= fs.readFileSync(filePath);
var v=zz.toString();
var e=v.split('\n');
var buf=e.length-1;
console.log(buf);

