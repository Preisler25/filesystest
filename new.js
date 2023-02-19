const fs = require('fs');

const main = async (path, path2, path3) => {

    const dir = await fs.promises.opendir(path);
    const dir2 = await fs.promises.opendir(path2);
    const dir3 = await fs.promises.opendir(path3);

    let list = []
    let list2 = []
    let list3 = []

    let list4 = []

    let file = await dir.read()
    let file2 = await dir2.read()
    let file3 = await dir3.read()

    while (file != null) {

        console.log(file.name);
        list.push(file.name)
        file = await dir.read()

    }

    while (file2 != null) {
            
        console.log(file2.name);    
        list2.push(file2.name)
        file2 = await dir2.read()
    
    }

    while (file3 != null) {

        console.log(file3.name);
        list3.push(file3.name)
        file3 = await dir3.read()
    }

    list2.forEach(e => {list4.push(e.split('.')[0])});

    let list5 = list.filter(e => list4.includes(e.split('.')[0]))

    list5.forEach(e => {
        fs.copyFile(`./old/${e}`, `./new/${e}`, (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        });
    }
    )
}

main('./old', './selected', './new')