describe('New Hotel Registration', function() {
var customLogger=require('../lib/customLogger.js');
var loggers=customLogger.logger("hotelRegistartionTest");
var dataProvider=require('../lib/dataProvider.js');
var utilityObj=require('../lib/utility.js');


    beforeEach(function() {
	   browser.driver.ignoresynchronization=true;
    });
  it('Navigate Hotel Website', function() {
    var dataProviderObj=dataProvider.readDataProvider('../src/testData/registration.json','login');
	loggers.info('Navigate to Hotel Website'); 
    loggers.info(dataProviderObj);
    browser.driver.get(dataProviderObj.url);
	browser.driver.manage().window().maximize();
		browser.driver.getTitle().then(function(pageTitle) { 
		loggers.info(pageTitle);
		expect(pageTitle).toEqual(dataProviderObj.PageTitle);
		if (pageTitle === dataProviderObj.PageTitle) { 
		loggers.info('We have got to the Hotel page'); 
		} else { 
		loggers.info('We dont see the correct page'); 
		}; 
		});
	});
	
	it('Register New Hotel', function() {
	loggers.log("Register new Hotel Test Execution Started..");
	 var dataProviderObj=dataProvider.readDataProvider('../src/testData/registration.json','registration');
	 loggers.info(dataProviderObj);
		browser.driver.getTitle().then(function(pageTitle) { 
		//browser.sleep(3000);
		
		//var signUp = driver.wait(until.elementLocated(By.id('foo'), 10000);
		//var signUp=browser.driver.findElement(by.linkText("Sign up now"));
		//utilityObj.browserWait(signUp,"signUp");
		//signUp.click();
		
		browser.driver.findElement(by.linkText("Sign up now")).click();
		browser.driver.findElement(by.xpath(".//*[@id='contact']/h2")).getText().then(function(text){
		loggers.info(text);
		});	
		browser.driver.findElement(by.xpath(".//*[@id='contact']/h2")).getText().then(function(text){
			browser.driver.findElement(by.id("company")).sendKeys(dataProviderObj.hname);
			browser.driver.findElement(by.name("street")).sendKeys(dataProviderObj.address);
			browser.driver.findElement(by.id("city")).sendKeys(dataProviderObj.city);
			browser.driver.findElement(by.id("state")).sendKeys(dataProviderObj.state);
			browser.driver.findElement(by.id("zip")).sendKeys(dataProviderObj.zip);
			browser.driver.findElement(by.id("country")).sendKeys(dataProviderObj.country);
			browser.driver.findElement(by.id("URL")).sendKeys(dataProviderObj.website);
			browser.driver.findElement(by.id("first_name")).sendKeys(dataProviderObj.firstName);
			browser.driver.findElement(by.id("last_name")).sendKeys(dataProviderObj.lastName);
			browser.driver.findElement(by.id("title")).sendKeys(dataProviderObj.role);
			browser.driver.findElement(by.id("email")).sendKeys(dataProviderObj.email);
			browser.driver.findElement(by.id("phone")).sendKeys(dataProviderObj.phone);
			browser.driver.findElement(by.id("00NE0000004GuNf")).sendKeys(dataProviderObj.aboutus);
			browser.driver.findElement(by.name("submit")).click();
			browser.sleep(20000);
			browser.driver.findElement(by.xpath(".//*[@id='contact']/h2")).getText().then(function(text){
			loggers.info(text);
			logger.info(dataProviderObj.thanksMessage);
			//expect(text).toEqual(dataProviderObj.thanksMessage);
			loggers.log("Register new Hotel Test Execution done..");
			});	
		});
		browser.sleep(2000);
		});
	    
  });
});
