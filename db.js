const sql = require('mssql');

const config = {
  user: 'Talha',
  password: 'Cream1122@@',
  server: 'localhost',
  database: 'StudentDB',
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });

module.exports = {
  sql,
  poolPromise
};
