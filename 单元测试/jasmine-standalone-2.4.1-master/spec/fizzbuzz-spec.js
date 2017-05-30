describe('FizzBuzz Testing', function(){
    it("Should be a string for 1", function(){
        expect(fizzBuzz(1)).toBe(1);
    });
    it("Should be a string for 2", function(){
        expect(fizzBuzz(2)).toBe(2);
    });
    it("Should be a string 'Fizz' for 3", function(){
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it("Should be a string 'Buzz' for 5", function(){
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it("Should be a string 'Fizz' for 6", function(){
        expect(fizzBuzz(6)).toBe('Fizz');
    });
    it("Should be a string 'Buzz' for 10", function(){
        expect(fizzBuzz(10)).toBe('Buzz');
    });
    it("Should be a string 'FizzBuzz' for 15", function(){
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    var random = Math.floor(Math.random() * 10) * 15;

    it("Should be a string"+ random, function(){
        expect(fizzBuzz(random)).toBe('FizzBuzz');
    });

});

