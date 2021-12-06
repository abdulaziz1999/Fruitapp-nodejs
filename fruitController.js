const fruits = require('./data.js')

const index = (id) => {
    if(id){
        if(fruits[id] == undefined){
            console.log('Method index => Menampilkan Buah Dengan id => '+id)
            console.log('Data not found');
        }else{
            console.log('Method index => Menampilkan Buah Dengan id => '+id)
            console.log(fruits[id])
        }
    }else{
        console.log('Method index => Menampilkan Buah :')
        for (const fruit of fruits){
            console.log(fruit)
        }
    }
}

const store = (name) => {
    console.log('Method store => Menambahkan Buah '+name)
    fruits.push(name)
    index()
}

const update = (id,name) => {
    let namaBuah = fruits[id]
    console.log('Method update => Update Buah '+'['+id+'] '+namaBuah+' Menjadi '+name)
    fruits[id] = name
    index()
}

const destroy = (id) => {
    let namaBuah = fruits[id]
    if(namaBuah == undefined){
        console.log('Method destroy => Delete Buah '+'['+id+']')
        console.log('Data not found');
    }else{
        console.log('Method destroy => Delete Buah '+'['+id+'] '+namaBuah)
        fruits.splice(id, 1)
        index()
    }
}

module.exports = { index, store, update, destroy}