 var fetch = require('node-fetch');
 async function rohit() {
     console.log("start point");
     const responce = fetch('https://reqres.in/api/users/2');
     const user = await responce.json;
     return user;

 }
 console.log('before exicution')
 let a = rohit();
 console.log('after execution')
 console.log(a);