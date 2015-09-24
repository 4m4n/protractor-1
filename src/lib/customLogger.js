var customLogger=function(){
	var log4js = require('log4js');
this.logger=function(jsFileName){	
	log4js.configure({
	  appenders: [
	    { 
	    	"type": "console"
	    },
	    { 
	        "type": "dateFile",
	        "filename": "../logs/"+"log_file.log",
	        "maxLogSize": 10240,
	        "backups": 3,
	        "pattern":"-yyyy-mm-dd",
	        "alwaysIncludePatterm":true
        }
	  ],
	  "replaceConsole": true 
	});
	var loggers = log4js.getLogger(jsFileName);
	loggers.setLevel('ALL');
	return loggers;	
}	
}

module.exports = new customLogger();