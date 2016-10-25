/*
function getData () {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  this.start = () => {
    process.stdin.on('data', function (text) {
      console.log('received data:', util.inspect(text));
      if (text === 'quit\n') {
        done();
      }
    })
  }
}
let cin = new getData()
cin.start()
*/
  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }


function Prompt () {

  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  const util = require('util')

  this.answer = []
  this.done = done
  this.input = () => {

      process.stdin.on('data', (text) => {
      console.log('received data:', util.inspect(text))
      this.answer.push(ret)
      if (text === 'quit\n') {
        done();
      }
    })
  }
}

let p = new Prompt()
p.input()
//p.done()
console.log(p.answer)
