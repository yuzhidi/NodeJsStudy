/**
 * Created by wangliang on 28/9/16.
 */
var logcat = require('adbkit-logcat');
var spawn = require('child_process').spawn;

// Retrieve a binary log stream
var proc = spawn('adb', ['logcat', '-B']);

// Connect logcat to the stream
reader = logcat.readStream(proc.stdout);
reader.on('entry', function(entry) {
    console.log(entry.message);
});

// Make sure we don't leave anything hanging
process.on('exit', function() {
    proc.kill();
});
