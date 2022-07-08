


let num1 =Number(prompt("Enter the first number"));
let num2=Number(prompt("Enter the second number"));
let SignOperator;


while(SignOperator  != "exit"){
  SignOperator = prompt("menu -> +Addition, -=>Substraction,  *=> Multiplication, /=> division, %=> mod, **=> power, exit => quit the programe ")

    if(SignOperator=="+"){

        console.log("Addition:", num1+num2);
    }

    else if(SignOperator=="-"){


        console.log("Substraction:", num1 - num2);
    }

    else if(SignOperator=="*"){


        console.log("Multiplication:", num1 * num2);
    }


    else if(SignOperator=="/"){


        console.log("division:", num1 / num2);
    }

    else if(SignOperator=="%"){


        console.log("mod:", num1 % num2);
    }

    else if(SignOperator=="**"){


        console.log("power:", num1 ** num2);
        
    }


    else if(SignOperator = "exit"){


        console.log("quit the programe");
        break;
        
    }
    else{
        console.log("Invaild operator:");
      }

}



