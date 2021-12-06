const { index, store, update, destroy} = require('./fruitController')

//Menampilkan All Buah
index()

//Menampilkan Buah dengan id tertentu
index(1)

//Menambahkan Buah baru
store('jambu')

//Mengupdate Buah dengan id tertentu
update(0,"rambutan")

//Menghapus Buah dengan id tertentu
destroy(2)