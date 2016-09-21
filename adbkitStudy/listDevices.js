var Promise = require('bluebird')
var adb = require('adbkit')
var client = adb.createClient()

client.listDevices()
    .then(function(devices) {
        return Promise.map(devices, function(device) {
            return client.shell(device.id, 'echo $RANDOM')
                // Use the readAll() utility to read all the content without
                // having to deal with the events. `output` will be a Buffer
                // containing all the output.
                .then(adb.util.readAll)
                .then(function(output) {
                    console.log('[%s] %s', device.id, output.toString().trim())
                })
        })
    })
    .then(function() {
        console.log('Done.')
    })
    .catch(function(err) {
        console.error('Something went wrong:', err.stack)
    })


console.log(":");
 client.stat("052f922cc86debe0", "/data/local/tmp/minicap1.so")
     .then(function(status){
         console.log("29", status);
         console.log("size", status.size);
         //return client.stat("052f922cc86debe0", "/data/local/tmp/minicap.so")
     //        .then(function(status) {
     //            console.log("30", status);
     //        }
     //            .catch(function(err) {
     //                console.log("err2");
     //            })
     //    )
     })
             //.then(function(status) {
             //    console.log("30", status);
             //}
             //    .catch(function(err) {
             //        console.log("err2");
             //    })
         //)
     .catch(function(err) {
         console.log("err", err);
         client.stat("052f922cc86debe0", "/data/local/tmp/minicap.so")
             .then(function(status){
                 console.log("30", status)
             })
             .catch(function(err){
                 console.log("err 30", status)
             })
     })

//console.log("size:"+status);
