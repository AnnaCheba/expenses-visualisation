const db = require('./db');

module.exports = fileId => new Promise((resolve) => {
    console.log('fileId', fileId);

    db.all(`SELECT * from items WHERE file_id = '${fileId}'`, (err, rows) => {
        resolve(rows);
    });
});
