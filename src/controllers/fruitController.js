const fruits = require('./../models/data.js')

const index = (id) => {
    if(id){
        if(fruits[id] == undefined){
            console.log('Data not found');
        }else{
            console.log(fruits[id])
        }
    }else{
        for (const fruit of fruits){
            console.log(fruit)
        }
    }
}

const store = (name) => {
    fruits.push(name)
    index()
}

const update = (id,name) => {
    let namaBuah = fruits[id]
    fruits[id] = name
    index()
}

const destroy = (id) => {
    let namaBuah = fruits[id]
    if(namaBuah == undefined){
        console.log('Data not found');
    }else{
        fruits.splice(id, 1)
        index()
    }
}

module.exports = { index, store, update, destroy}