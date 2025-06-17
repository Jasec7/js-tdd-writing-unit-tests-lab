// Your tests here
import {isPalindrome} from "../utils";

describe("isPalindrome", () => {
    it("returns true if the word reads the same forwards and backwards", () => {
    const word = 'racecar'

    const result = isPalindrome(word)
     expect(result).toBe(true);   
    })

     it("returns true if the word is a combination of uppercase and lowercase ", () => {
    const word = 'Racecar'

    const result = isPalindrome(word)
     expect(result).toBe(true);   
    });

     it("throws an error if the word is an empty string", () => {
    const word = ''
     expect(() => isPalindrome(word)).toThrow();   
    });

    it("throws an error if the word has non alphabetical", () => {
    const word = 'race car'

     expect(() => isPalindrome(word)).toThrow();   
    });

    it("throws an error if the word is not a string", () => {
    const word = 45
    
     expect(() => isPalindrome(word)).toThrow();   
    });
})