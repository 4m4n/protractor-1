var dataProvider = function() {
	
	/**
	 * This method use to read JSON file with filters.
	 * 
	 * @author snarottam
	 * @param filter
	 */ 
	this.readDataProvider = function(filePath, filter) {
		var fs = require('fs');
		var obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		result = obj[filter];
		return result;
	}
    
	/**
	 * This method use to write into JSON file with filters and key & value pairs.
	 * 
	 * @author snarottam
	 * @param filter
	 * @param key
	 * @param value
	 */ 
	this.writeDataProvider = function(filePath, filter1, key,
			value) {
		var fs = require('fs'), nconf = require('nconf');

		nconf.argv().env().file({
			file : filePath
		});

		nconf.set(filter1 + ":" + key, value);

		nconf.save(function(err) {
			fs.readFile(filePath, function(err, data) {
				console.dir(JSON.parse(data.toString()))
			});
		});
	}
}
module.exports = new dataProvider();