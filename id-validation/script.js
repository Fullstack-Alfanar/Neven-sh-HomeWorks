

function valiate_id()
{
var id=[] , Tmulti=[], meshkal=[1,2,1,2,1,2,1,2] ,sum=0 ,Bekoret,bekoretNum;

    for(let i=0 ; i<8 ;i++)
    {
 id[i]=+prompt("אנא היכנסו ספרות תעודת זהות אחד אחר השני");
Tmulti=(id[i]*meshkal[i]);
if(Tmulti>9)
{
    Tmulti =parseInt(Tmulti/10)+Tmulti %10; 
}
sum+=Tmulti;

}
bekoretNum=+prompt("אנא היכנסו מספר ביקורת");
Bekoret=10-(sum%10);

if(bekoretNum==Bekoret)
{
  alert(true);  
}
else{
    alert(false);
}
  
}
valiate_id()



