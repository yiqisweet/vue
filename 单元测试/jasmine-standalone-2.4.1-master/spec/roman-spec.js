describe('Roman Numeral Testing', function(){
    it('Should return "I" for 1', function(){
        expect(toRoman(1)).toBe('I');
    });
    it('Should return "III" for 3', function(){
        expect(toRoman(3)).toBe('III');
    });
    it('Should return "IV" for 4', function(){
        expect(toRoman(4)).toBe('IV');
    });
    it('Should return "IX" for 9', function(){
        expect(toRoman(9)).toBe('IX');
    });
    it('Should return "X" for 10', function(){
        expect(toRoman(10)).toBe('X');
    });
    it('Should return "XL" for 40', function(){
        expect(toRoman(40)).toBe('XL');
    });
    it('Should return "L" for 50', function(){
        expect(toRoman(50)).toBe('L');
    });
    it('Should return "XC" for 90', function(){
        expect(toRoman(90)).toBe('XC');
    });
    it('Should return "C" for 100', function(){
        expect(toRoman(100)).toBe('C');
    });
    it('Should return "CD" for 400', function(){
        expect(toRoman(400)).toBe('CD');
    });
    it('Should return "D" for 500', function(){
        expect(toRoman(500)).toBe('D');
    });
    it('Should return "CM" for 900', function(){
        expect(toRoman(900)).toBe('CM');
    });
    it('Should return "M" for 1000', function(){
        expect(toRoman(1000)).toBe('M');
    });
    it('Should return "XXXVIII" for 38', function(){
        expect(toRoman(38)).toBe('XXXVIII');
    });
    it('Should return "DC" for 600', function(){
        expect(toRoman(600)).toBe('DC');
    });
    it('Should return "DCCC" for 800', function(){
        expect(toRoman(800)).toBe('DCCC');
    });
});

describe("Roman to Arabic Testing", function(){
    it('Should return "800" for DCCC', function(){
        expect(toArabic('DCCC')).toBe(800);
    });
    it('Should return "900" for CM', function(){
        expect(toArabic('CM')).toBe(900);
    });
});

