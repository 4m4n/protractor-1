
describe('New Hotel Registratione', function() {
var hotelPO=require('../pageObject/hotelPO.js');
var customLogger=require('../lib/customLogger.js');
var loggers=customLogger.logger("hotelRegistartionTest");
var dataProvider=require('../lib/dataProvider.js');
 beforeEach(function() {
	   browser.driver.ignoresynchronization=true;
    });
	
  it('Navigate Hotel Website', function() {
    var dataProviderObj=dataProvider.readDataProvider('../src/testData/registration.json','login');
	loggers.info('Navigate to Hotel Website');
	hotelPO.get(dataProviderObj.url);
	hotelPO.returnPageTitle().then(function(text){
	expect(hotelPO.returnPageTitle()).toEqual(dataProviderObj.PageTitle);
	if(text==dataProviderObj.PageTitle){
	   loggers.info('We have got to the Hotel page'); 
		} else { 
		loggers.info('We dont see the correct page'); 
		}; 
		}); 
	 });	
	it('Register New Hotel', function() {
	var dataProviderObj=dataProvider.readDataProvider('../src/testData/registration.json','registration');
	loggers.info("Register new Hotel Test Execution Started..");
    hotelPO.clickSignUp();
    hotelPO.setName(dataProviderObj.hname);
	hotelPO.setStreet(dataProviderObj.address);
	hotelPO.setCity(dataProviderObj.city);
	hotelPO.setState(dataProviderObj.state);
	hotelPO.setZip(dataProviderObj.zip);
	hotelPO.setCountry(dataProviderObj.country);
	hotelPO.setUrl(dataProviderObj.url);
	hotelPO.setFirstName(dataProviderObj.firstName);
	hotelPO.setLastName(dataProviderObj.lastName);
	hotelPO.setTitle(dataProviderObj.role);
	hotelPO.setEmail(dataProviderObj.email);
	hotelPO.setPhone(dataProviderObj.phone);
	hotelPO.selectAboutUs(dataProviderObj.aboutus);
	hotelPO.clcikSubmit();
	hotelPO.returnRegistraionPageText().then(function(text){
	//expect(text).toEqual(dataProviderObj.thanksMessage);
	loggers.info(text);
	loggers.info("Register new Hotel Test Execution done..");
	});
  });
});
