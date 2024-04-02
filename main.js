// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i=start; i<end+start ;i=i+start){
//     if(i===exclude){
//         continue
//     }
//     console.log (i)
// }





// let start1 = 10;
// let end1 = 0;
// let stop1 = 3;

// for(let i=start1 ; i>end1 ; i--){
//     if(i===stop1-true  ) 
//         break
    
//             if(i< start1){
//         console.log("0"+i)
        
//     }else{
//         console.log(i)
//     }
// }


// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03








// let start3 = 1;
// let end3 = 6;
// let breaker = 2;

// for(let i=start3; i <= end3; i++){
//          console.log(i)

// for(j=breaker;j<end3;j=j+breaker){
//     console.log("--"+j)
// }
// }
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

let index = 10;
let jump = 2;
let i=index

for(; i>jump; ){
 // Write Your Code Here
    console.log(i);
    i=i-jump;
    if(i===jump){
     break;
    }
  
}






// Output
10
8
6
4