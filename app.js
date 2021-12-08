const { index, store, update, destroy} = require('./src/controllers/fruitController')

const main = () => {
  console.log("Method index - Menampilkan Seluruh Buah");
  index();
  console.log("\nMethod index(id) - Menampilkan Buah dengan id tertentu");
  index(1)
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(0, "Kelapa");
  console.log("\nMethod destroy - Menghapus data 0");
  destroy(0);
};

main();