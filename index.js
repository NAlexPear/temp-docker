var temp = require('temp').track()
var fs = require('fs')
var util = require('util')
var exec = require('child_process').exec

var fakeData = 'foo\nbar\nbaz\nluhrman'

temp.open('prefix', function (err, info){
  if (!err) {
    fs.write(info.fd, myData);
    fs.close(info.fd, function (err){
      exec("grep foo '" + info.path + "' | wc -l", function (err, stdout) {
        util.puts(stdout.trim())
      })
    })
  }
})
