
const a = 10 // const a: 10 -> Simboliza que a tiene valor de 10
let b = 10 // let b: number -> Nos dice q es del tipo numero

//? Es mejor no inferir el tipo
const age:number = 10
let name

name = 'Diego Figueroa'
name = 30
name = {}
name = []

let last_name:string
last_name = 'Figueroa'

function sayHello(msg:string){
    console.log(msg);
}

(() => {

    sayHello('Diego Figueroa')
    

})()