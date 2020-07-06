const a=[];

function RandomNumberGenerator(min, max, length){
  let rand1;
  let rand =min+1;
  if(a.length == length){
    return;
  }else{
while(a.includes(rand)){
  rand1 = min + Math.random() * (max + 1 - min);
  rand =Math.floor(rand1);
}
a.push(rand);
 RandomNumberGenerator(1, 10, 8);
  }
  return(a);
}
console.log(RandomNumberGenerator(1, 10, 8));
