// // blocking function

// function user(){
//     alert("fetch user Data");
//     return"waiting completed";
// }
// console.log("printing the Data");
// console.log(user());
// console.log("this message blocked untill time out");

// Non - blocking function

function getUserData(callback){
    setTimeout(()=>{
        const user ={id: 1, name : "seekeye"}
        callback(user);
    }, 2000);

}
console.log("stating to fetch user data");
getUserData(function(user){
    console.log("user data",user)
});

console.log("this message is not blocked untill user data is fetched");