const fs = require('fs');

const [fromPath, toPath] = process.argv.slice(2);

fs.createReadStream(fromPath).pipe(fs.createWriteStream(toPath));
