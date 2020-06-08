
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
    describe('when play, game', function(){
      it('returns "Java" if number divisible by 3', function(){
        expect(javabuzz.game(6)).toEqual("Java");
      });
    });
    describe('when play, game', function(){
      it('returns "Buzz" if number is divisible by 5', function(){
        expect(javabuzz.game(10)).toEqual("Buzz");
      });
    });
    describe('when play, game', function(){
      it('returns "JavaBuzz" if number is divisible by 3 and 5', function(){
        expect(javabuzz.game(30)).toEqual("JavaBuzz")
      });
    });
    describe('when play, game', function(){
      it('returns the number when this is not divisible by 3 or 5', function(){
        expect(javabuzz.game(8)).toEqual(8)
      });
    });
} );
