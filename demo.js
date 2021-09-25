var a = require('fs'); //importing file system module



a.rename('abc.txt', 'pqr.txt', function(err) {
    if (err) throw err;
    console.log("successfully renamed....");
})



console.log("LAST LINE");