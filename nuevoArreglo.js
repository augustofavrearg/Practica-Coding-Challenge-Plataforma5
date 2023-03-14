function nuevoArreglo(num){
    let numero = num;
    let array = [];
    while (numero>0){
        array.push(numero);
        numero--;
    }
    
    return array;
}

console.log(nuevoArreglo(15));
