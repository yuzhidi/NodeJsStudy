/**
 * Created by wangliang on 20/10/16.
 */
var Promise = require('bluebird')
var adb = require('adbkit')
var client = adb.createClient()

client.shell("052f922cc86debe0", "am broadcast -a ADB_INPUT_TEXT --es msg 'a\\nb'")


