var loginPO = function() {
  var signUp = element(by.linkText('Sign up now'));
  var company = element(by.id('company'));
  var street = element(by.id('street'));

  this.get = function() {
    browser.get("https://www.hoteltonight.com/join-the-revolution-in-hotel-bookings/");
  };

  this.setName = function() {
    company.sendKeys('test');
  };

  this.setStreet = function() {
    street.sendKeys('testsst');
  };
};
module.exports = new loginPO();