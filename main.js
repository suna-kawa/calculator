function clickBtn(numBtn) {
    //btn値を代入
    let btnValue = numBtn.innerHTML;
    //display部のidを代入
    let result = document.getElementById('value');
    //display部の一番右側にくる値を代入
    let last_value = result.innerHTML.slice(-1);


    if(btnValue == 'AC') {
        result.innerHTML = '0'
        return;
    }
    if(btnValue == '=') {
        result.innerHTML = eval(result.innerHTML)
        return;
    }
    if(result.innerHTML == '0' || result.innerHTML == '00') {
        result.innerHTML = btnValue
        return;
    }
    if((last_value == '/' || last_value == '+' || last_value == '-' || last_value == '*')&&
      (btnValue == '/' || btnValue == '+' || btnValue == '-' || btnValue == '*')) {
        result.innerHTML = result.innerHTML.slice(0, -1) + btnValue;
        return;
    }
    result.innerHTML += btnValue;
};