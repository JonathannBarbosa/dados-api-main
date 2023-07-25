async function buscarEndereco(){
  var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
  var consultaCEPConvertida = await consultaCEP.json();

  console.log(consultaCEPConvertida);

}

buscarEndereco();