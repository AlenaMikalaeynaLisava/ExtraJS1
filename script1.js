function RandomNumberGenerator(min, max, length){
  if(length>(max-min)){
    return;
  }
const a=[];
function  randomInteger() {
  let rand1 = min + Math.random() * (max + 1 - min);
  let rand =Math.floor(rand1);
  if(a.length==length){
    return;
  } else {
    if(!a.includes(rand)){
      a.push(rand);
    }
    randomInteger();
}
}
randomInteger();
return(a);
}

console.log(RandomNumberGenerator(1, 25, 23));
