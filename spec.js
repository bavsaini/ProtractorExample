describe('Istock Home page', function() {



	var signup = element(by.css('a[href*="/join"]'));

	beforeEach(function() {
		browser.get('http://www.istockphoto.com/');
	});

	 

it('should have a title', function() {
 	
 	expect(browser.getTitle()).toEqual('Stock photos, royalty-free images & video clips | iStock');
  });



it('signup', function(){

	signup.click();
	var email = element(by.model("register['email']")).sendKeys('bavneet_saini1@yahoo.co.in');
	var password = element(by.model("register['password']")).sendKeys('Protractor123');
	var confirmpassword = element(by.model("register['passwordConfirmation']")).sendKeys('Protractor123');
	var JoinButton = element(by.id('register-button')).click();

	expect(browser.getCurrentUrl()).toMatch('https://www.istockphoto.com/');

});



it('search',function(){

	var searchbox = element(by.id('search-phrase')).sendKeys('tree');
	var enter = browser.actions().sendKeys(protractor.Key.ENTER);
	enter.perform();

	expect(browser.getCurrentUrl()).toEqual('http://www.istockphoto.com/photos/tree?phrase=tree&excludenudity=true&sort=best');


});

});

