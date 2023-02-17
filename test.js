const fs = require('fs');

fs.readdir('./', (err, files)=>{
    
    console.log(typeof(files));
    console.log('====================================');
    console.log(files);
    console.log('====================================');
    files.forEach(e => {
        console.log(e);
        console.log(typeof(e))
    });
})