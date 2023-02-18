const fs = require('fs');

const main = async(path) =>{

    const dir = await fs.promises.opendir(path);

    let list = []
    let file = await dir.read()


    while (file.name != null) {

        console.log(file.name);
        list.push(file.name)
        file = await dir.read()

    }
}

main('./')