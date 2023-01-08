let sothuNha;
let sothuHai;
let ketqua;
let toantu;
let display = function (n){
    let result = document.getElementById("result");
    if( n === '-'|| n === '+'||n === 'x'|| n === '/'  ){
        result.value = '';
    }
    result.value += n;
}
let setOperrator = function (n){
    let result = document.getElementById("result");
    sothuNha = result.value;
    toantu=n;
    result.value = '';
    
    

}
let clears = function(){
    let result = document.getElementById("result");
    result.value = '';

}
    let solve = function(){
    let result = document.getElementById("result");
    sothuHai = result.value;
    // sothuNha = parseInt(sothuNha);
    // sothuHai = parseInt(sothuHai);
    sothuNha = parseFloat(sothuNha);
    sothuHai = parseFloat(sothuHai);
    if(toantu =="+"){
        ketqua = sothuNha+sothuHai;
    } else if(toantu == "-"){
        ketqua = sothuNha-sothuHai;
    } else if(toantu=="x"){
        ketqua = sothuNha*sothuHai;
    }else if(toantu=="/"){
        ketqua = sothuNha/sothuHai;
    }
    result.value = ketqua;
}

