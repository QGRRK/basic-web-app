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
  


  
  

  return "";
}
