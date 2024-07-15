const fspromise = require ('fs').promises;
const path = require('path');

const fileOps = async () =>  {
    try {
         //const data = await fsPromises.readFile(path.join(_dirname, 'files', 'first-file.txt'), 'utf8');
         const data = await fspromise.readFile(path.join(__dirname, 'files', 'lorem.txt'), data);
         console.log(data);
         await fspromise.writeFile(path.join(__dirname,'files', 'file-created-promise,txt'), data);
         await fspromise.appendFile(path.join(__dirname,'files', 'file-created-promise,txt'), '\nwe are learning MERN');
         await fspromise.rename(path.join(__dirname,'files', 'file-created-promise,txt'), path.join(__dirname));

    }
    {
        catch (err)
    console.log(err);
}
}