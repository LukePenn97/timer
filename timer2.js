const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('keypress', (key, data) => {
  
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (data.name === 'b') {
    process.stdout.write('\x07');
  } else if (Number(data.name) < 10) {
    console.log("setting timer for " + data.name + " seconds...");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});
console.log('press a key');