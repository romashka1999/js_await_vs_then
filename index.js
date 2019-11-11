//difference between async/await and promise/then

function getSetTimeOut(timeout) {
    return new Promise( (reslove, reject) => {
        setTimeout(() => {
          reslove('OK' + timeout);  
        }, timeout*1000);
    }) 
}

async function asyncAwait() {
    for(let i=4;i>=2;i--) {
        const x = await getSetTimeOut(i);
        console.log(x);
    }
}


function promiseThen() {
    for(let i=4;i>=2;i--) {
        getSetTimeOut(i)
            .then( (x)=> {
                console.log(x);
            })
    }
}

asyncAwait();