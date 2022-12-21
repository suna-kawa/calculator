//get value
let valueNum = $("[name|='num']").val();


//calculator-display
$(document).ready(function() {
    $('.calculator-btn').on('click', function() {
    $('.calculator-display td').append(valueNum);
    console.log(valueNum);
});
});