const app = require('./app.js');

async function main(){
    await app.listen(4000);
    console.log('Server is running');
}


main();