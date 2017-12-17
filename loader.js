var temp = require('temp').track()
var fs = require('fs')

module.exports = function testLoader(source){
  var callback = this.async()
  var json = JSON.parse(source)
  var output = json.names.join('\n')

  temp.open('', (err, info) => {
    if (!err) {
      fs.write(info.fd, output)
      fs.close(info.fd, (err) => {
        var tempOutput = fs.readFileSync(info.path, "utf8")

        // Un-comment the line below to break docker temp file handling
        temp.cleanupSync()

        callback(null, `module.exports = ${JSON.stringify(tempOutput)}`)
      })
    }
  })
}
