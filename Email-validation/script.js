
let testarEmail = EmailValid(prompt(" please enter your Email"));
alert(testarEmail);

function EmailValid(Email) 
{
    let LocShrodeel=0, dot = 0,  c = 0;
    for (let i = 0; i < Email.length; i++){
        if (Email[i] == "@") {
            LocShrodeel = i;
            c++;
        }
        if (Email[i] == " ") {
            return "false";
        }
    }
   
       if (Email[0] == "@") {
        return "false";
    }
   
     if (c != 1){
          return "false";
    }

    for (let i = 0; i < Email.length || Email[i]=="@"; i++){
        if(Email[i]=="?")
        return "false"
    }
    
    i = 0;
    for (i = LocShrodeel; i < Email.length; i++) {
        if (Email[i] == "=") {
            return "false";
        }
        if (Email[i] ==".") {
            dot++;
        }
    }
    if (dot == 0) {
        return "false";
    }
    for (let i = 0; i < Email.length; i++) {
        if (Email[i] == "@") {
            if (i >= 64) {
                return "false";
            }
        }
    }
    
    return "true";
}




 


