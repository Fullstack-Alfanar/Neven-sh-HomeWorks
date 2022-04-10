

function EmailValidation (Email)
{
    const template= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(template.test(Email))
{
    console.log(" valid Email " +" "+ true);
}
else
{
    console.log("Invalid Email" + " "+false);
}

}
let x=prompt("please enter an Email");
EmailValidation(x);



 


