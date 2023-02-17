const fs = require('fs');

main('./old', './new', './selected')


let readFiles = (path) =>{
    let rlist = []
    fs.readdir(path, (err, files) =>{
        console.log('====================================');
        console.log("kecske");
        console.log(path);
        console.log(files);
        console.log('====================================');
        files.forEach(e => {
            rlist.push(e)
        })
        fs.close()
    })
    return rlist
}

let main = (oldPath, newPath, selectedPath) =>{
    console.log('====================================');
    console.log("alma");
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
