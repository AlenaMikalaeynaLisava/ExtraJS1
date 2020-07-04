
function RandomNumberGenerator(min, max, length){
  if(length>(max-min)){
    return;
  }
const a=[];
function  randomInteger() {
  let i=0;
  let rand1 = min + Math.random() * (max + 1 - min);
  let rand =Math.floor(rand1);
  createArray();
  function createArray() {
  if(i==length){
    return;
  } else {
    if(rand!==a[i] && a[i]){
      i++;
      createArray();
    } else {
      a[i]=rand;
      randomInteger();
    }
  }
}
}
randomInteger();
return(a);
}

console.log(RandomNumberGenerator(1, 25, 15));