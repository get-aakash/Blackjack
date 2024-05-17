

function myFunction1(value){
    document.getElementById("demo").innerHTML=  value
}

   let myPromise = new Promise(function(resolve, reject){
    const success = false

    if(success){
        resolve("Promise success")
    }
    else{
        reject("Promise failed")
    }
   })



   myPromise.then(
    function(value){
        myFunction1(value)
    },
    function(error){
        myFunction1(error)
    }
    
)

setTimeout(function(){
    myFunction1("Hello")
},3000)