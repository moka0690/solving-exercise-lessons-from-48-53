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

// let index = 10;
// let jump = 2;


// for(; ; ){
//  // Write Your Code Here
//     console.log(index);
//     index=index-jump;
//     if(index===jump){
//      break;
//     }

// }

// Output
// 10
// 8
// 6
// 4

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama"];
let letter = "a";
let newFriends = [];



for( let i=friends.indexOf("Ahmed") ;i< friends.length;i++){

    if( !friends[i].toLowerCase().startsWith(letter)) {
       newFriends.push(friends[i])
    }
   
}
console.log(newFriends)

for( i=friends.indexOf("Ahmed");i<newFriends.length;i++){

    console.log(`${i+true}`+ "=>" + newFriends[i])
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


let start = 0;
let swappedName = "elZerO";
let newSwappedName ="";


// Output
"ELzERo"
for  (let i=start;i<swappedName.length;i++)
    if(swappedName[i]===swappedName[i].toUpperCase()){
        newSwappedName = newSwappedName+swappedName[i].toLowerCase()
   }else{
       newSwappedName = newSwappedName+swappedName[i].toUpperCase()
    }
console.log(newSwappedName)




