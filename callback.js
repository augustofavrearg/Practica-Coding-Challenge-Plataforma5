
function funcionCall(num){
    return num;
}

function callback(num, funcionCall){
    return num + funcionCall;
}

console.log(callback(10,funcionCall(5)));