function  calculateTemp(){
    numberTemp=document.querySelector("#temp").value;
    var a=document.getElementById('temp_diff');
     var b=temp_diff.options[a.selectedIndex].value;
      function celToFah(cel){
        let f=Math.round((cel*9/5)+32);
        return f;
      }
      function fehTocel(fah){
        let f=Math.round((fah-32)*5/9);
        return f;
      }
     var result;
     if(b=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}Fahrenheit`;
     }
     else{
        result=fehTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}Celsius`;
     }
    
    }