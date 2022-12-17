var txtResult = document.getElementById('txtResultado')

var calculo = ''


function inserir(num){
if (txtResult.innerHTML == '.'){clean()}
txtResult.innerHTML = txtResult.innerHTML + num

calculo += num
if (calculo.length > 21) {txtResult.innerHTML = '99999999999999999999...' }
txtResult
}

function somar(){
    console.log(calculo)
    var x = eval(calculo)
    if (x.length > 21){txtResult.innerHTML = '99999999999999999999...'} else{
    txtResult.innerHTML = x}
}

function clean (){
    txtResult.innerHTML = ''
    calculo = ''
}
