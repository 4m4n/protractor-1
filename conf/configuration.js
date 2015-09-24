// An example configuration file.
var HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');
exports.config = {
 seleniumServerJar: '../node_modules/selenium/selenium-server-standalone-2.45.0.jar',
  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: null,
  // Chromedriver location is used to help the selenium standalone server
  // find chromedriver. This will be passed to the selenium jar as
  // the system property webdriver.chrome.driver. If null, selenium will
  // attempt to find chromedriver using PATH.
  chromeDriver: '../node_modules/selenium/chromedriver',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../src/test/hotel_registrationTest.js'],
  

  onPrepare: function() {
    jasmine.getEnv().addReporter(
  new HtmlReporter({
  savePath: '../testresults/',
  screenshotsFolder: '/screenshots/images'
  })
  );
	 browser.driver.manage().window().maximize();
	 browser.driver.manage().timeouts().implicitlyWait(60000);
	 browser.manage().timeouts().pageLoadTimeout(40000);
	 browser.ignoreSynchronization = true;
	 //return browser.driver.get('https://www.hoteltonight.com/join-the-revolution-in-hotel-bookings/');
  },
framework: 'jasmine2',
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 170000
  }
};
