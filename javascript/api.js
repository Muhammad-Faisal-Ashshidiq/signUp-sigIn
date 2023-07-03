  const form = document.querySelector('form');

  form.addEventListener('submit', (elemen) => {
    elemen.preventDefault();
    const formulir = new dataForm(form);
    DataInPost(formulir)
    Reset();
  })

  function DataInPost(formulir){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    
    var object = {};
    formulir.forEach(function(value, key){
        object;
        object[key] = value;
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(object),
      redirect: 'follow',
    };
  
    fetch("https://eoixeju2haq0aoe.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetRes(result))
    .catch(error => console.log('error', error));
  }

function GetRes(result){
  alert(result)
}

function Reset(result){
  document.getElementById('form').reset();
}

  //upload
  