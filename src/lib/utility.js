var utility=function(){
	
	/**
	 * This method use to get Url.
	 * 
	 * @author snarottam
	 * @param url
	 */

	this.getUrl=function(url){
		var protact=protractor.getInstance();
		browser.manage().deleteAllCookies();
		protact.manage().window().maximize();
		protact.get(url);
		}
	
	/**
	 * This method use to wait for second.
	 * 
	 * @author snarottam
	 * @param second
	 */
	this.browserWaitforSecond=function(second){
		browser.sleep(second*1000);
	};
	
	/**
	 * This method use to wait for second on error.
	 * 
	 * @author snarottam
	 */
	var _retryOnError=function(err){
		browser.sleep(1000);
		return false ;
	};
	
	/**
	 * This method use to wait for element implicitly.
	 * 
	 * @author snarottam
	 * @param elementFinder
	 * @param elementDesc
	 * @param timeOut
	 */
	this.browserWait=function(elementFinder,elementDesc,timeOut){
		if(!timeOut){
			timeOut=60;
		}
		browser.driver.wait(function(){
			return elementFinder.isElementPresent().then(function(present){
			if(present==true){
				return elementFinder.isDisplayed().then(function(state2){
					return state2==true;
				});
			}else{
				return _retryOnError();
			}
		},_retryOnError);
	},timeOut*1000,elementDesc+'Error waiting for Element present')
	   .then(function(waitRecValue){
		   return waitRecValue;
	   },function(err){
		   throw err;
	   });	
	};

	
	/**
	 * This method use to return current date any date format.
	 * 
	 * @author snarottam
	 * @param format
	 */
	
	this.getCurrentDateWithFormat=function(format){
		var moment=require('moment');
		return moment().format(format);
	};
	
	/**
	 * This method use to return next date in any date format.
	 * 
	 * @author snarottam
	 * @param format
	 */
	this.getNextDayDateWithFormat=function(format){
		var moment=require('moment');
		var nextDaydate=moment().add('day',1);
		return nextDaydate.format(format);
	};
	
	/**
	 * This method use to upload file.
	 * 
	 * @author snarottam
	 * @param browseButton
	 * @param fileToUpload
	 * @param uploadButton
	 */
	this.uploadFile=function(browseButton,fileToUpload,uploadButton){
		var path=require('path');
		var absolutePath=path.resolve(_dirname,fileToUpload);
		browseButton.sendKeys(absolutePath);
		if(uploadButton){
			uploadButton.click();
		}
	};
	
	/**
	 * This method use to switch to frame.
	 * 
	 * @author snarottam
	 * @param element
	 */
	this.switchToFrame=function(element){
		browser.switchTo().frame(element);
	}
	
	/**
	 * This method use to switch to new window.
	 * 
	 * @author snarottam
	 * @param element
	 */
	var parentHandle={};
	var popUpHandle={};
	
	this.switchToNewWindow=function(){
		parentHandle=browser.getWindowHandle();
		browser.getAllWindowHandels().then(function(handles){
			popUpHandle=handles[1];
			browser.switchTo().window(popUpHandle);
		});
	};
	
	/**
	 * This method use to switch to paraent window.
	 * 
	 * @author snarottam
	 */
	this.switchToMainWindow=function(){
		browser.close();
		browser.getAllWindowHandels().then(function(handles){
			parentHandle=handles[0];
			browser.switchTo().window(parentHandle);	
		});
	};
			
}
module.exports = new utility();
