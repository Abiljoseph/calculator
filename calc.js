function dis(x){
    result.value+=x;
}

function clr(){
    result.value='';
}
function solve(){
    result.value = eval(result.value);
}
function back(){
    result.value = result.value.slice(0,-1);
}