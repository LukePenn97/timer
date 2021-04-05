const args = process.argv.slice(2);
for (const arg of args) {
  let seconds = Number(arg);
  if (seconds > 0) {
    console.log("good!");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}


