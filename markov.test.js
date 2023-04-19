const {MarkovMachine} = require('./markov');

describe('Markov Machine tests', function(){
  test('make chains', function(){
    const machine = new MarkovMachine('a b c d e e');

    expect(machine.result).toEqual(
      {"a": ["b"], "b": ["c"], "c": ["d"], "d": ["e"], "e": ["e", null]})
  })

  test('get random item from an array', function(){
    expect(MarkovMachine.getRandomChoice(['a'])).toEqual('a');
    expect(['a','b','c']).toContain(MarkovMachine.getRandomChoice(['a','b','c']));
  })

  test('make text', function(){
    const machine = new MarkovMachine('the snitch at the quidditch game');

    const text = machine.makeText()
    expect(text).toContain('quidditch');
  })
})


