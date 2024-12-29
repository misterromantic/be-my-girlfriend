// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(A: number[], K: number) {
  process.stderr.write(A.toString() + K.toString());
  const B = [...A];
  const maxSpace = B.sort((a,b) => b - a)[0].toString().length;

  const line = Math.ceil(A.length / K) > 0 ? Math.ceil(A.length / K) : 1;

  let box = '+';
  const maxLineSize = line > 1 ? K : A.length;
  for (let i = 0; i < maxLineSize; i++) {
      box += '-'.repeat(maxSpace);
      box += '+';
  }

  for (let i = 0; i < line; i++) {
      process.stdout.write(box + '\n');
      let lineNumber = '|';
      for (let j = i*K; j < K*i + K && j < A.length ; j++) {
          lineNumber +=  ' '.repeat(maxSpace - A[j].toString().length);
          lineNumber += A[j].toString();
          lineNumber += '|';
      }
      process.stdout.write(lineNumber);
      process.stdout.write('\n');
      
      if (i+1 === line) {
          let bottomLine = '+'
          const bottomLineSize = A.length <= K ? maxLineSize : A.length - K*i;
          
          for (let z = 0; z < bottomLineSize; z++) {
              bottomLine += '-'.repeat(maxSpace);
              bottomLine += '+';
          }
          process.stdout.write(bottomLine+'\n');
      }
  }
}