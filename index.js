import readline from 'readline'
import uniqueRandom from 'unique-random'

const random = uniqueRandom(1, 45);
console.log ("몇개의 로또를 출력하시겠습니까? : ")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  for (let i = 0; i < parseInt(line); i++) {
    console.log(`${i+1}번 게임\n` + random() + ", " + random() + ", " + random() + ", " + random() + ", " +  random() + ", " +  random());
  }
  rl.close();
}).on("close", function() {
  process.exit();
});
