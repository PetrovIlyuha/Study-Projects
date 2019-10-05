function anagrams(word, words) {
  const cleanedWord = cleanString(word);
  let result = [];
  words.forEach(word => {
    if (cleanString(word) === cleanedWord) {
      console.log(cleanString(word))
      result.push(word)
    }
  });
  return result;

  function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }
}


console.log(anagrams('abba', ['aabb', 'baba', 'abab', 'abfg']));
console.log(anagrams('abba', ['abfg', 'abfg', 'abfg', 'abfg']));
