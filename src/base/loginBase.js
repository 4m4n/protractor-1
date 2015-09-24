var loginBase=function(){
var loginPO=require('../pageObject/loginPO.js');
var utilityObj=require('../lib/utility.js')
var dataProvider=require('../lib/dataProvider.js');
var customLogger=require('../lib/customLogger.js');
var loggers=customLogger.logger("Loginbase");

/**
 * This method use to login into hotel system.
 * 
 * @author snarottam
 */
   this.login=function(){
	 var dataProviderObj=dataProvider.readDataProvider('../protractor-ui-automation/src/testData/login.json','qa2','login','CS');
	 utilityObj.getUrl('http://adactin.com/HotelApp/');
	 
	 loggers.info(dataProviderObj.userName);
	 loggers.info(dataProviderObj.password);
	 loginPO.enterUserName(dataProviderObj.userName);
	 loginPO.enterPassword(dataProviderObj.password);
	 loginPO.clickLoginButton(); 
	}
}
module.exports = new loginBase();
