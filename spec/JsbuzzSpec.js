
describe('JavaBuzz', function() {
    var javabuzz;
    beforeEach(function(){
      javabuzz = new JavaBuzz();
    });
    describe('knows when a number is', function(){
        it ('divisible by a divisor', function(){
            expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
        });
    });
    describe('knows when a number is NOT', function(){
      it('divisible by a divisor', function() {
        expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
      });
    });
} );
