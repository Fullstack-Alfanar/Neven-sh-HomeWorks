// q(1)...............................................................................
// let sum=0;
// function avgfun(x){
// for(let i=0 ; i<x.length; i++){
// sum+=x[i];  
// }
// return (sum/x.length);
// }

// let arr=[5,3,10,2];
// let arr1=[4,6,8,9,12];
// let arr2=[7,9,20,30,15,40]
// console.log(avgfun(arr));
// console.log(avgfun(arr1));
// console.log(avgfun(arr2));

//.................................................................................
//q(2)

// function minfun(y){ 
//  let min=y[0];   
// for(let i=0 ; i<y.length ; i++){
//    if(min>y[i]){
//        min=y[i];
//    }
// }
// return(min);
// }

// let arr=[5,3,7,9,1];
// let arr1=[20,60,70,10,90];
// let arr2=[90,100,30,70,80,30];
// console.log(minfun(arr));
// console.log(minfun(arr1));
// console.log(minfun(arr2));

//................................................................................
//q(3)

// function longfun(names){
// let maximumLength=0;
//     for(i=0 ; i< names.length; i++){
//         if( names[i].length >maximumLength){
//             maximumLength= names[i].length;
            
//         }
//     }
//     return( maximumLength);
// }

// let arr=["neven", "Ali" , "Majd"]
// let arr1=["Mela" , "Soaad" , "Rana" , "Marwan"];
// let arr2= ["Alex","Daniel"]
// console.log(longfun(arr));
// console.log(longfun(arr1));
// console.log(longfun(arr2));

//..............................................................................
//q(4)

// function str123(a){
//     var max=0;
//     var str="";
//     for(var i of a){
//         if(max<i.length){
//             max=i.length;
//             str=i;
//         }
//     }
//     return str
// }


// let names=["ali","neven","meme"];
// let names1=["sondos","nisreen","bahaa"];
// let names2=["asmaa","rna","ali"];
// console.log(str123(names));
// console.log(str123(names1));
// console.log(str123(names2));


//..........................................................................................
//q(5)

// function maxEqual(number){
// let sum=0, avg,count=0;
        
//     for( let i=0 ; i<number.length; i++){
// sum+=number[i];
// avg=sum/number.length;
// if(number[i]>=avg ){
//     count++
   
// }
//     }
//      return(count);
// }

// let arr=[7,10,9,12,4,14];
// let arr1=[20,30,40,50,60];
// let arr2=[120,130,140,150,160,170,180];
// console.log(maxEqual(arr));
// console.log(maxEqual(arr1));
// console.log(maxEqual(arr2));

//...............................................................................................................
// q(6)

// function isprime(x) {
//     let count = 0;
//     for (let i = 1; i <= x; i++) {
//         if (x % i == 0) {
//             count++
//         }
//     }
//     if (x == 1) { return (true) };
//      if (count == 2) {
//         return (true);
//     }
    
//     else {
//         return (false);
//     }
// }
// console.log(isprime(11));
// console.log(isprime(1));
// console.log(isprime(20));

//.......................................................................................................
//q(7)

// function isprimeTotal(numbers){
// for(let i=0 ; i<numbers.length; i++){
//     if(isprime(numbers[i])){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// }

// let arkam=[10,2,15,17];
// let arkam1=[2,3,7,11]
// let arkam2=[10,18,20,35]
// console.log(isprimeTotal(arkam));
// console.log(isprimeTotal(arkam1));
// console.log(isprime(arkam2));



