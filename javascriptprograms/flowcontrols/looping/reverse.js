var number=123;
var num;
  while(number>0)
  {
      var digit=number%10;
      console.log(digit);
      number=Math.floor(number/10);
  }