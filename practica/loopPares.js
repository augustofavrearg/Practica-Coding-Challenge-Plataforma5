function loopDePares(num){
    for (var numero = 0; numero < 100; numero++){
        
        let suma = numero + num;

        if (suma % 2 == 0){
            
            console.log(numero)
            console.log("El numero " + numero + " es par " + "La suma del loop y del numero introducido es " + suma);
            
        }
        else{
            console.log(numero)
            
        }
        
    }
}

loopDePares(10)