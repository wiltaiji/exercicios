function verificar(){

var data = new Date()
var ano = data.getFullYear()
var txt = window.document.getElementById('txt')
var res = window.document.getElementById('res')
var radsex = window.document.getElementsByName('radsex')

if (txt.value.length == 0 || txt.value > ano ) {

    window.alert(' ERRO verifique o dados')
  
    
}  else if(txt.value < ano ){
   var idade = ano - txt.value
   var genero=''
     if( radsex[0].checked){
        genero = 'homem'
   }     
      else if ( radsex[1].checked){
         genero = 'mulher'
         
      }
     res.innerHTML= `Sou ${genero}`
     

   }
}

