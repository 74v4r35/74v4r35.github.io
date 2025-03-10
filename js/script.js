function soma(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  console.log(v1) ;
  console.log(v2);

  let soma=v1+v2;
  console.log(soma);
  document.getElementById('total').value = soma;
}
function menos(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  console.log(v1) ;
  console.log(v2);

  let menos=v1-v2;
  console.log(menos);
  document.getElementById('total').value=menos;
}
function mult(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  console.log(v1) ;
  console.log(v2);

  let mult=v1*v2;
  console.log(mult);
  document.getElementById('total').value=mult;
}
function div(){
  const v1 = parseInt(document.getElementById("num1").value);
  const v2 = parseInt(document.getElementById("num2").value);
  console.log(v1) ;
  console.log(v2);
  if(v2==0){
    var div="Error";
  }
  else{
    div=v1/v2;
  }
  console.log(mult);
  document.getElementById('total').value=div;
}

