// async - it makes any function to become an asynchronous function and make it return a promise

async function getSomething(){
    let isRecieved = true;
    const promise = new Promise((resolve,reject
        )=>{
        if(isRecieved){
            resolve ("the item is received succesfully");
        }else{
            throw "something went wrong with an API"
        }
    })

    try{
        document.getElementById("myh1").innerHTML  = await promise;
        }
    catch(err){
         document.getElementById("myh1").innerHTML = err;
        }
}

getSomething();