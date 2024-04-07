const http = require('http');
const url = require('url');
const mysql = require('mysql');















const dpPool = mysql.createPool({
  host: 'zoo-server.database.windows.net',
  user: 'OmarZooDB',
  password: 'OmarPWZooDatabase!',
  ssl: {
    mode: 'require',
  },
  database: 'ZooDatabase',
})


db_pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error acquiring database connection:", err);
    return;
  }

  console.log("Connected to database");
  connection.release();
});


const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/login") {
    if (req.method === "POST") {
      handleLogin(req, res, db_pool);
    } else if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Login Page\n");
    }
    
  } });
  
  
  

  const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});