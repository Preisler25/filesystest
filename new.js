const fs = require('fs');

const main = async(path) =>{
    const dir = await fs.promises.opendir(path);

    let list = []

    let file = await dir.read()

    while (file != null) {
        list.push(file.name)
        file = await dir.read()
    }
    console.log('====================================');
    console.log(list);
    console.log('====================================');

}
main('./')