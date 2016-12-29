describe('checkmark', function() {

  beforeEach(module('core'));

  it('should convert boolean value to uncicode checkmark or cross',
    inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    })
  );
});
