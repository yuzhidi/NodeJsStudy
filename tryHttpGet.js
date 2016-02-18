var http = require('http')
    var opts = {
              host: 'sfnsdkfjdsnk.com',
                    port: 80,
                          path: '/'
    }
    try {
              http.get(opts, function(res) {
                          console.log('Will this get called?')
                        })
    }
catch (e) {
          console.log('Will we catch an error?')
                  }

