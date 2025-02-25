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

    // Simple primality check helper
    function isPrime(num: number): boolean {
      // 0, 1, and negative numbers are not prime
      if (num <= 1) return false;
      // 2 is prime
      if (num === 2) return true;
      // Even numbers greater than 2 are not prime
      if (num % 2 === 0) return false;

      const upperLimit = Math.sqrt(num);
      for (let i = 3; i <= upperLimit; i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }

    // Filter out all primes
    const primes = numbers.filter(isPrime);

    return primes.length > 0
      ? primes.join(", ")
      : "";
  }

  

  return "";
}
