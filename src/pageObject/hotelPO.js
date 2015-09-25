var hotelPO = function() {
  var signUp = element(by.linkText('Sign up now'));
  var registrationPageText=element(by.xpath(".//*[@id='contact']/h2"));
  var company = element(by.id('company'));
  var street = element(by.name('street'));
  var city = element(by.id('city'));
  var state = element(by.id('state'));
  var zip = element(by.id('zip'));
  var country = element(by.id('country'));
  var url = element(by.id('URL'));
  var firstName = element(by.id('first_name'));
  var lastName = element(by.id('last_name'));
  var title = element(by.id('title'));
  var email = element(by.id('email'));
  var phone = element(by.id('phone'));
  var aboutus = element(by.id('00NE0000004GuNf'));
  var submit = element(by.name('submit'));

  
  this.get = function(url) {
    browser.get(url);
  };
  this.returnPageTitle=function(){
  return browser.getTitle();
  }
  this.clickSignUp = function() {
    signUp.click();
  };
   this.returnRegistraionPageText = function() {
    return registrationPageText.getText();
  };
  this.setName = function(companyName) {
    company.sendKeys(companyName);
  };

  this.setStreet = function(streetName) {
    street.sendKeys(streetName);
  };
  
   this.setCity = function(cityName) {
    city.sendKeys(cityName);
  };
  
   this.setState = function(stateName) {
    state.sendKeys(stateName);
  };
   this.setZip = function(zipCode) {
    zip.sendKeys(zipCode);
  };
   this.setCountry = function(countryName) {
    country.sendKeys(countryName);
  };
   this.setUrl = function(hUrl) {
    url.sendKeys(hUrl);
  };
  
   this.setFirstName = function(fName) {
    firstName.sendKeys(fName);
  };
   this.setLastName = function(lName) {
    lastName.sendKeys(lName);
  };
   this.setTitle = function(hTitle) {
    title.sendKeys(hTitle);
  };
   this.setEmail = function(hEmail) {
    email.sendKeys(hEmail);
  };
     this.setPhone = function(hEmail) {
    phone.sendKeys(hEmail);
  };
   this.selectAboutUs = function(hAboutus) {
    aboutus.sendKeys(hAboutus);
  };
  this.clcikSubmit = function() {
    submit.click();
  };
};
module.exports = new hotelPO();