$(function(){
    $elBtnCal = $("#btnCal");
    $elBtnClear = $('#btnClear');
    $elResult=$('#result');
    $elForm = $('#form');
    
    function fnCal(){
        if($('#num1').val() == '')   alert("First Number is blank.");
            else {
                    $num1=$('#num1').val();
                    $num1=parseFloat($num1);    
                 }
        if($('#num2').val()== '')   alert("Second Number is blank");
            else {  $num2=$('#num2').val();
                    $num2=parseFloat($num2);
                 }

        $sign=$('#sign').val();
        $result=0;
        
        switch($sign){
            case '*': $result = $num1* $num2; break;
            case '/':  if($num2 == 0 ) { $result=0; alert("Zero Division Error"); break;}
                        else {  $result = $num1 / $num2;  break; }   
            case '+': $result = $num1 + $num2; break;
            case '-': $result = $num1 - $num2; break;
        }

       
        $resultStr=$result.toString();
        $elResult.val($resultStr);
    
       
    }
    function fnClear(){  $elForm.reset();   }
        
    $elBtnCal.click(fnCal);
    $elBtnClear.click(fnClear);


});