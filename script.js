function myFunction(some) {
    document.getElementById("demo").innerHTML = some
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0


    if (x == 0) {
        myResolve("OK")
    }
    else {
        myReject("Error")
    }
})
myPromise.then(
    function (value) {
        myFunction(value)

    },
    function (error) {
        myFunction(error)
    })

setTimeout(function () {
    myFunction("This is setTime Out")
}, 3000)