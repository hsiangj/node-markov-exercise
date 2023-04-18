/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let result = {};
    let strArr = this.words.split(' ');

    for (let word = 0; word< strArr.length; word++){
      if (!result[strArr[word]]){
        result[strArr[word]] = [];
        if (strArr[word+1] === undefined){
          result[strArr[word]].push(null)
        }else {
          result[strArr[word]].push(strArr[word+1]);
        } 
      } else {
        if (strArr[word+1] === undefined){
          result[strArr[word]].push(null)
        }else {
          result[strArr[word]].push(strArr[word+1]);
        }
      }
    }
    return result;
    
  }

  


  /** return random text from chains */

  makeText(numWords = 10) {
    // TODO
    let output = [];
    let keys = Object.keys(this.result)
    
    let key = this.getRandomChoice(keys);
    let obj = this.result;

    while (output.length < numWords && key !== null){
      output.push(key);
      key = this.getRandomChoice(obj[key])
    }
    return output.join(' ');
  }
 
  


  getRandomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

 

}


