describe('phoneList', function() {
	beforeEach(module('phonecatApp'));
	
	describe('PhoneListController', function() {

		it('should create a "phones" model with 3 phones and a "name" model saying "world"', inject(function($componentController) {
			var ctrl = $componentController('phoneList');

			expect(ctrl.phones.length).toBe(3);
			expect(ctrl.name).toBe('world');
		}));
	});
});
