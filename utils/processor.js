class DataProcessor {
  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  processData(inputArray) {
    const result = {
      is_success: true,
      user_id: this.userInfo.user_id,
      email: this.userInfo.email,
      roll_number: this.userInfo.roll_number,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    };

    let numericSum = 0;
    let alphabetChars = [];

    inputArray.forEach(item => {
      const str = String(item);
      
      // Check if it's a number
      if (this.isNumeric(str)) {
        const num = parseInt(str);
        numericSum += num;
        
        if (num % 2 === 0) {
          result.even_numbers.push(str);
        } else {
          result.odd_numbers.push(str);
        }
      }
      // Check if it's alphabetic
      else if (this.isAlphabetic(str)) {
        // Convert to uppercase and add to alphabets array
        result.alphabets.push(str.toUpperCase());
        
        // Collect individual characters for concatenation
        for (let char of str) {
          if (this.isAlphabetic(char)) {
            alphabetChars.push(char.toLowerCase());
          }
        }
      }
      // Otherwise it's a special character
      else {
        result.special_characters.push(str);
      }
    });

    result.sum = numericSum.toString();
    result.concat_string = this.createConcatenatedString(alphabetChars);

    return result;
  }

  isNumeric(str) {
    return /^\d+$/.test(str) && !isNaN(parseInt(str));
  }

  isAlphabetic(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

  createConcatenatedString(alphabetChars) {
    // Reverse the array
    const reversed = alphabetChars.reverse();
    
    // Apply alternating caps (starting with lowercase)
    let result = "";
    for (let i = 0; i < reversed.length; i++) {
      if (i % 2 === 0) {
        result += reversed[i].toLowerCase();
      } else {
        result += reversed[i].toUpperCase();
      }
    }
    
    return result;
  }
}

module.exports = DataProcessor;