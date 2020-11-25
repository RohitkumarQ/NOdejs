function student() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const error = false;
            if (!error) {
                console.log("resolved")
                resolve();
            } else {
                console.log("rejected")
                reject('sorry not resolve');
            }
        }, 2000);
    })
}
student().then(function() {
    console.log("Rohit: thanks for resolving")
}).catch(function() {
    console.log("very bad ")
})