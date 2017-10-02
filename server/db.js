const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('db/expenses');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)');

    db.run('DROP TABLE IF EXISTS items');
    db.run(`CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        file_id TEXT,
        date TEXT,
        spent REAL,
        title TEXT,
        total REAL
    )`);

    const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    for (let i = 0; i < 10; i += 1) {
        stmt.run(`Ipsum ${i}`);
    }
    stmt.finalize();

    db.each('SELECT * FROM items', (err, row) => {
        console.log(row);
    });
});

module.exports = db;
