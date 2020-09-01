
function mostrar(id){
    document.getElementById(id).className='p1'
}

function ocultar (id){
    setTimeout(() =>{var pg = document.getElementById(id); pg.hidden='true'; alert('tempo esgotado'); pg.className='hideen'}, 10000);
}


function verificar(){
    var resposta = document.getElementById("c");
    if(resposta.checked){
      alert("Resposta correta");
    }
    else{
      alert("Resposta incorreta");
    }
  }

  function verificarp2(){
    var resposta = document.getElementById("a");
    if(resposta.checked){
      alert("Resposta correta");
    }
    else{
      alert("Resposta incorreta");
    }
  }

  function verificarp3(){
    var resposta = document.getElementById("b");
    if(resposta.checked){
      alert("Resposta correta");
    }   
    else{
      alert("Resposta incorreta");
    }
  }