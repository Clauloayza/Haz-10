function calcular(){
    var numeroa = document.getElementById("numbera");
    var numerob = document.getElementById("numberb");
    var salida = document.getElementById("salida");
    
    var numa=numeroa.value;
    var numb=numerob.value;
    var suma = parseFloat(numa) + parseFloat(numb);
        
    if( numa ==10 || numb == 10 ){
        salida.innerHTML = "SI";
    }else{
        if (suma == 10){
           salida.innerHTML = "SI"; 
        }else{
            salida.innerHTML  = "NO";
        }
    }
}
