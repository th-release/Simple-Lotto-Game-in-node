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
    let array1 = [random(), random(), random(), random(), random(), random()];
    array1.sort( function(a, b) { return a - b; });
    for (let i = 0; i < array1.length; i++) if (array1[i] < 10 ) array1[i] = "0" + array1[i]; 
    console.log(`${i+1}번 게임\n` + array1);
  }
  rl.close();
}).on("close", function() {
  process.exit();
});
