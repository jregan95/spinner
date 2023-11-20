let animationArray = ['\r| ', '\r/ ', '\r- ', '\r\\ ','\r| ', '\r/ ', '\r- ', '\r\\ ','\r| ']
let n = 100;

const timing = function(n) {
  while(n < (200 * animationArray.length)) {
    n + 200;
    return n;
  }
}

for (let index of animationArray) {
  setTimeout(() => {
    process.stdout.write(index);
  }, timing())
}


