// q(1)
//   var names=[]; 
// for( var i=0;i<5;i++){
//    names[i]=prompt("please enter a name ");
// }  
// console.log(names[0] + " " + names[4]);
// console.log("the first name is :"+" " + names[0]);
// console.log("the Last name is : "+ " " +names[4]);
// names=names.reverse();
// console.log(names);



//.............................................................
// q(2)

// var fruits=["apple","banana","peach","apricot"];
// console.log(fruits[0], "\n", fruits[1], "\n",fruits[2],"\n",fruits[3],"\n",fruits[4]);
// for(i=0;i<4;i++){
//     console.log(fruits[i]);
// }

//.......................................................................
//q(3)

// var grades = [];
// for ( var i = 0; i < 10; i++) {
//     grades[i] = +prompt("please enter your grade");
//     if (grades[i] < 0) {
//         alert("grade not valid , the grde is : " + grades[i]);
//     }
//     if (grades[i] > 100) {
//         alert("grade not valid , the grde is : " + grades[i]);
//     }
// }

//..............................................................................
// q(4)
//  var sum=0;avg=0;max=0;min=2;
// var numbers=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
// for( var i=numbers.length-1;i>=0;i--){
//     console.log(numbers[i]);
//      sum+=numbers[i];
//      avg=sum/numbers.length;
//      if(numbers[i]>max){
//          max=numbers[i];
//      }
//      if(numbers[i]<min){
//          min=numbers[0];
//      }
//   }
//   console.log("the sum of the numbers is : " +sum);
//     console.log("the avg of the numbers is " +avg);
// console.log("tha maximum number is : "+max);
// console.log("the small number is : " +min);



 
//.................................................................................
// q(20)

// let n=[]; 
// n=+prompt("please enter a number");
// for(var i=1; i<=n; i++){
// for(var j=1;j<=i;j++){
//      document.write(j+ " ");
//  }
// document.write("<br/>");
//  }
 
//.......................................................................................
//q(21)

// let n=[];
// n=+prompt("please enter a number");
// for(var i=1; i<=n; i++){
// for(j=1;j<=n;j++){
//     document.write(j+" ")
// }
// document.write("<br/>");
//  }
   
//......................................................................................
//q(22)

// let num=[];
// do{
// num=+prompt("please enter a number");
// for(i=num;i>=1;i--){
// console.log(i);
// }
// console.log("<br/>");
// }
// while(num>0);

//..........................................................................................
//q(1)אתגר

// var num=[];
//  num=+prompt("please enter a number");
// for(i=1;i<=num;i++){
//    for(j=1;j<=num;j++){
//        document.write("*");
//    }
//    document.write("<br/>");
// }
 
//.......................................................................................
//q(2)אתגר

// let hieght=[], width=[];
// hieght=+prompt("please enter a height");
// width=+prompt("please enter a width");
// for(i=1;i<=hieght;i++){
//     document.write("*".repeat(width));
//     document.write("<br/>");
//     }

//.......................................................................................
// q(3) אתגר 

// let n=[];
// n=+prompt("please enter a number");
// for(var i=n; i>=1; i--){
// for(var j=i;j>=1;j--){
//      document.write (" *");
//  }
// document.write("<br/>");
//  }