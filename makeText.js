/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const markov = require('./markov');
const axios = require('axios');


function generateText(text){
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}

function makeFileText(path){
  fs.readFile(path, 'utf8', function(err, data){
    if(err){
      console.error(`Cannot read file: ${path} ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  })
}

async function makeURLText(url){
  let res;
  try {
    res = await axios.get(url);
  } catch (err) {
    console.error(`Cannot read file: ${url} ${err}`);
    process.exit(1);
  }
  generateText(res.data);  
} 


let method = process.argv[2];
let path = process.argv[3];

if (method === 'file'){
  makeFileText(path);
} else if (method === 'url'){
  makeURLText(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}