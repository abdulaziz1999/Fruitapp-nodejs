const { index, store, update, destroy} = require('./src/controllers/fruitController')
const StudentController = require('./src/controllers/StudentController')
const express = require('express')
const db = require('./src/configs/database')
const appRoute = require('./src/routes/routes');
const app = express()

const main = () => {
  // console.log("Method index - Menampilkan Seluruh Buah");
  // index();
  // console.log("\nMethod index(id) - Menampilkan Buah dengan id tertentu");
  // index(1)
  // console.log("\nMethod store - Menambahkan buah Pisang");
  // store("Pisang");
  // console.log("\nMethod update - Update data 0 menjadi Kelapa");
  // update(0, "Kelapa");
  // console.log("\nMethod destroy - Menghapus data 0");
  // destroy(0);

  //test database
  //   db.connect((err) => {
  //     if(err){
  //         console.log("error "+ err.stack)
  //         return
  //     }else{
  //         console.log("Connection to database")
  //         return
  //     }
  // })
};

// main();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res)=> {
  res.send('Hello World');
}) 

app.get('/students', StudentController.index)
app.get('/students/:id', StudentController.show)
app.post('/students', StudentController.store)
app.put('/students/:id', StudentController.update)
app.delete('/students/:id', StudentController.destroy)

app.listen(3000,()=>{
 console.log("starting... port : 3000");
});