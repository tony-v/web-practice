var express = require('express')
var fs = require('fs')
var buf = require('buffer')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var index_file = fs.readFileSync('index.html')
var out_string = buf.toString(index_file)

app.get('/', function(request, response) {
    response.send(out_string)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
