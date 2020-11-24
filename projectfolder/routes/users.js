
const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/users.json';
  
    // READ
    app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  
  app.post('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      console.log(req.body.city);
      

      if (err) {
        throw err;
      }
     res.send(JSON.parse(data));
    });
  });
};
  
  module.exports = userRoutes;