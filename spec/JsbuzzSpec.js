
describe('Jsbuzz', function() {
    var jsbuzz;
    describe('knows when a number is', function(){
        it ('divisible by 3', function(){
            jsbuzz = new Jsbuzz();
            expect(jsbuzz.isDivisibleByThree(3)).toBe(true);
        });
    });
} );
 


