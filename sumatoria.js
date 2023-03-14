function summation(num){
    let sumatoria = [];
    for (numero = num ; numero > 0; numero--){
        
        sumatoria.unshift(numero);
        console.log(sumatoria)
    }
    sumaFinal = 0;
    sumatoria.forEach(function(sumatoria){
        sumaFinal += sumatoria;
    })
    console.log(sumaFinal)
}

summation(8)