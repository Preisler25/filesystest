const fs = require('fs');

fs.readdir('/', (err, files)=>{
    console.log("alma");
    console.log('====================================');
    console.log(files);
    console.log('====================================');
})

let readFiles = (path) =>{
    fs.readdir(path, (err, files) =>{
        files.forEach(e => {
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        });
        return files;
    })
}

let main = (oldPath, newPath, selectedPath) =>{
    console.log('====================================');
    fs.readdir('./', (err, files)=>{
        files.forEach(e => {
            console.log(e);
        });
    })
    console.log('====================================');
    let filenames = findCh(readFiles(selectedPath))
    let rawfiles = selectRaws(readFiles(oldPath), filenames)
    moveFiles(oldPath, newPath, rawfiles)
}

let moveFiles = (oldPath, newPath, files) =>{
    
    files.forEach(e => {
        fOldPath = oldPath + e;
        fNewPath = newPath + e;

        fs.rename(fOldPath, fNewPath, function (err) {
            if (err) throw err
            console.log('Successfully renamed - AKA moved!')
        })
    });
}

let selectRaws = (list, ch_list) =>{

    let raws_list = []

    list.forEach(e => {
        if (ch_list.includes(e.split('.')[0])) {
            raws_list.push(e)
        }
    });

    return raws_list;
}


let findCh = (list) =>{
    let ch_list = [];
    console.log('====================================');
    console.log(list);
    console.log('====================================');
    list.forEach(e => {
        if(e.split('.')[1] == 'jpg'){
            ch_list.push(e.split('.')[0]);
        }
    });  
    
    return ch_list;
}

main('../old/', '../new/', '../selected/')