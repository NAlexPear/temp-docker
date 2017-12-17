var temp = require('temp').track()
var fs = require('fs')
var util = require('util')
var exec = require('child_process').exec

var fakeData = 'foo\nbar\nbaz\nluhrman'

temp.open('prefix', function (err, info){
  if (!err) {
    fs.write(info.fd, fakeData);
    fs.close(info.fd, function (err){
      exec(`cat ${info.path}`, function (err, stdout){
        console.log(stdout.trim())
      })
    })
  }
})
