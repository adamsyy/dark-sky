//promise
//reject
//resolve
//pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('promise resolved')
                resolve();
            } else {
                console.log('promise rejected')
                reject('sorry');
            }

        }, 2000);

    })
}

func1().then(function (params) {
   console.log('thanks for solving') 
}).catch(function(error){
    console.log(error)
})