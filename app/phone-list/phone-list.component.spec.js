describe('phoneList', function() {
	beforeEach(module('phoneList'));
	
	describe('PhoneListController', function() {
		var $httpBackend, ctrl;

		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/phones.json')
						.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
			
			ctrl = $componentController('phoneList');
		}));

		it('should create a "phones" property with 2 phones fetched with "$http"', function() {
			expect(ctrl.phones).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
		});

		it('should set a default value for the "orderProp" property', function() {
			expect(ctrl.orderProp).toBe('age');
		});
	});
});
