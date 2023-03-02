// promises : let asynchronous method behave as synchronous method

// let myPromise  = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let errorOccured = false;
//         if(errorOccured){
//             resolve("everything went smoothly");
//             }
//         else{
//             reject("something went wrong!");
//         }
//     },2000)
// });

// myPromise.then(show()).catch(error =>console.log(error));

function show(xyz){
    console.log(xyz);
}

// const github_api = "http://api.github.com/users/Heetraval123"

// const userPromise = fetch(github_api);

// userPromise
// .then((Response)=>{
//     if(Response.ok){
//         return Response.json()
//     }else
//         throw new err("user doesn't error!")
// })
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err+" something went wrong!"))



// const userPromise = fetch(github_api);

// userPromise
// .then((data)=>{console.log(data.body+" first function after the promise"); return 12})
// .then((data)=>console.log(data+" data sent from first function after promise"))



// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data)=>{console.log(data[5].name)})
// });

// console.log("Started request…");

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });



