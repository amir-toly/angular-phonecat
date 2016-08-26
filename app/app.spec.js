describe('PhoneListController', function() {
	beforeEach(module('phonecatApp'));

	it('should create a "phones" model with 3 phones and a "name" model saying "world"', inject(function($controller) {
		var scope = {};
		var ctrl = $controller('PhoneListController', {$scope: scope});

		expect(scope.phones.length).toBe(3);
		expect(scope.name).toBe('world');
	}));
});
