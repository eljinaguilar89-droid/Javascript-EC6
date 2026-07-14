function countToTen() {
    function multiply(n){
        return n* 2;
    }
    for(let i=1; i<=10; i++){
        console.log(multiply(i));
    }
    console.log(multiply(10));
}

countToTen();