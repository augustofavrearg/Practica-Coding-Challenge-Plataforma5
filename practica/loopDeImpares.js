function loopDePares(num, word){
    for (var numero = 0; numero < 100; numero++){
        
        let suma = numero + num;

        if (suma % 2 != 0){
            
            console.log(numero)
            console.log("El numero " + numero + " es impar " + "La palabra es " + word);
            
        }
        else{
            console.log(numero)
            
        }
        
    }
}

loopDePares(10, "Mostachol")