//min and max
{
    let no1=Math.floor(Math.random()*999)+100;
    console.log(no1);
    let no2=Math.floor(Math.random()*999)+100;
    console.log(no2);
    let no3=Math.floor(Math.random()*999)+100;
    console.log(no3);
    if((no1>>no2)&&(no1>>no3)){
      console.log("max = "+no1);
    }
    else if((no2>>no1)&&(no2>>no3)){
      console.log("max = "+no2);
    }
    else{
      console.log("max = "+no3);
    }
}