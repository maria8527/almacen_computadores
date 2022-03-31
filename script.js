


function captura() {
    let cantidad = document.getElementById ('cantidadcompu').value;
    const pc = 820000; 
    let multiplicacion = cantidad * pc
      valorC.value =  `${multiplicacion}`;
  compra()
}

function compra() {
    let compra= document.getElementById ('valorC').value; 
      if (compra < 1640000 || compra > 9840000 ){
            valorD.value = 0
         } else if (compra  >= 1640000 && compra < 3280000){
            valorD.value = 15
         } else if (compra  >= 3280000 && compra <  6560000){
            valorD.value = 25 
         } else if (compra >= 6560000 && compra <= 9840000){
            valorD.value = 35
        } let descuento= document.getElementById ('valorD').value; 
         descuento /= 100
         descuento *= compra 
         compra -= descuento  

         valortotal.value = `${compra}`
 }

 


   
     
 




