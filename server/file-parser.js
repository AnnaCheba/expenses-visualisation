const parse = require('csv-parse');
const fs = require('fs');
const db = require('./db');
const uuidv4 = require('uuid/v4');

const processFileData = arr => arr.map((item) => {
    let title = item[2];

    if (item[2].indexOf('Card xx') !== -1) {
        title = item[2].substr(0, item[2].indexOf('Card xx')).trim();
    }

    return {
        date: item[0],
        spent: item[1],
        title,
        total: item[3],
    };
});

const insertInDb = (data) => {
    const fileId = uuidv4();

    data.forEach((item) => {
        db.run(`INSERT INTO items 
            (file_id, date, spent, title, total) 
            VALUES 
            ($file_id, $date, $spent, $title, $total)
        `, {
            $file_id: fileId,
            $date: item.date,
            $spent: item.spent,
            $title: item.title,
            $total: item.total,
        });
    });

    return fileId;
};

module.exports = fileUrl => new Promise((resolve) => {
    fs.readFile(fileUrl, 'utf8', (err, input) => {
        if (err) {
            return console.log(err);
        }

        parse(input, { comment: '#' }, (parseError, output) => {
            if (parseError) {
                console.log(parseError);
            }

            const result = processFileData(output);
            const fileId = insertInDb(result);

            resolve(fileId);
        });


        return true;
    });
});
