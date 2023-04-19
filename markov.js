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
    
    for (let i = 0; i< this.words.length; i++){
      let word = this.words[i];
      
      if (!result[word]){
        result[word] = [];
        if (this.words[i+1] === undefined){
          result[word].push(null)
        }else {
          result[word].push(this.words[i+1]);
        } 
      } else {
        if (this.words[i+1] === undefined){
          result[word].push(null)
        }else {
          result[word].push(this.words[i+1]);
        }
      }
    }
    return this.result = result;
    
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let output = [];
    let keys = Object.keys(this.result)
    let key = MarkovMachine.getRandomChoice(keys);
    let obj = this.result;

    while (output.length < numWords && key !== null){
      output.push(key);
      key = MarkovMachine.getRandomChoice(obj[key])
    }
    return output.join(' ');
  }
 


  static getRandomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

}

module.exports = {
  MarkovMachine,
};