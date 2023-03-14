function split(word){
    let array = Array.from(word);
    let numLetras = array.length;
    let print = numLetras / 2;

    console.log(numLetras)
    console.log(print)
    if (array.length % 2 == 0){
        
        printSegundo = (array.length / 2) - 1
        console.log(array[printSegundo] + array[print])    
    }
    else{
        print = print - 0.5;
        console.log(print)

        printImpar = array[print];
        console.log(printImpar);
    }
    
}

split("cosas")