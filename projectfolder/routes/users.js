
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
      var city=req.body.city;
      var items = JSON.parse(data);
      var newArr=[];
for (let index = 0; index < items.length; index++) {
 
  
  var newCity =items[index];

 
  if(newCity.city==city){
        newArr.push(newCity);
          }
 
}

res.send(newArr);



 
    });
  });
};
  
  module.exports = userRoutes;