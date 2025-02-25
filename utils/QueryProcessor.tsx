export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return "qijing";
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "qijing";
  }

  if (query.toLowerCase().includes("largest")) {
    // Extract all digits from the query
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found in the query.";
    }

    // Convert the extracted strings into numbers
    const numbers = matches.map((numStr) => parseInt(numStr, 10));

    // You can either sort and return the last item...
    // numbers.sort((a, b) => a - b);
    // return numbers[numbers.length - 1].toString();

    // ...or simply use Math.max:
    const largest = Math.max(...numbers);
    return largest.toString();
  }
  

  if (query.toLowerCase().includes("plus")) {
    // Extract all digits from the query
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found to add.";
    }

    // Convert the extracted strings into numbers
    const numbers = matches.map((numStr) => parseInt(numStr, 10));

    // Sum them up
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
  }

  

  if (query.toLowerCase().includes("multiplied")) {
    // Extract all digits from the query
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found to multiply.";
    }

    // Convert the extracted strings into numbers
    const numbers = matches.map((numStr) => parseInt(numStr, 10));

    // Sum them up
    const sum = numbers.reduce((acc, curr) => acc * curr, 1);
    return sum.toString();
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found in the query.";
    }

    const numbers = matches.map((numStr) => parseInt(numStr, 10));
    const results: number[] = [];

    // A number is a perfect square if sqrt(n)^2 = n,
    // and a perfect cube if cbrt(n)^3 = n.
    for (const num of numbers) {
      const sqrtN = Math.round(Math.sqrt(num));
      const cbrtN = Math.round(Math.cbrt(num));

      // Check if both conditions hold
      if (sqrtN * sqrtN === num && cbrtN * cbrtN * cbrtN === num) {
        results.push(num);
      }
    }
    // Return all matching numbers or a message if none
    return results.length > 0 
      ? results.join(", ")
      : "";
  }
  if (query.toLowerCase().includes("prime")) {
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found in the query.";
    }
  
    const numbers = matches.map((numStr) => parseInt(numStr, 10));
    const primes: number[] = [];
  
    // Inline check for each number
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      // 0, 1, or negative are not prime
      if (num <= 1) {
        continue;
      }
  
      // 2 is prime
      if (num === 2) {
        primes.push(num);
        continue;
      }
  
      // Even numbers greater than 2 are not prime
      if (num % 2 === 0) {
        continue;
      }
  
      // Check divisibility from 3 to sqrt(num)
      let isPrime = true;
      const upperLimit = Math.sqrt(num);
      for (let j = 3; j <= upperLimit; j += 2) {
        if (num % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(num);
      }
    }
  
    return primes.length > 0 ? primes.join(", ") : "";
  }

  if (query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found to subtract.";
    }
  
    // Convert matches to an array of numbers
    const numbers = matches.map(numStr => parseInt(numStr, 10));
  
    // Subtract them in sequence: first - second - third - ...
    // (If there's only one number, just return that number)
    let difference = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      difference -= numbers[i];
    }
  
    return difference.toString();
  }
  if (query.toLowerCase().includes("power")) {
    // Attempt to match all digit sequences in the query
    const matches = query.match(/\d+/g);
    if (!matches || matches.length < 2) {
      return "No valid base or exponent found in the query.";
    }
  
    // The first number is our base, the second is our exponent
    const base = parseInt(matches[0], 10);
    const exponent = parseInt(matches[1], 10);
  
    // Calculate base^exponent
    const result = base ** exponent; // or Math.pow(base, exponent)
  
    return result.toString();
  }
  

  

  return "";
}
