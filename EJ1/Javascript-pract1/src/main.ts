//import sumar from './basic_operations'
//console.log(sumar(100,17))

//ctrl + espacio para ver funciones disponibles
//import {dividir,multiplicacion,restar,sumar} from './basic_operations'
//console.log(sumar(2,3))
//console.log(restar(4,7))
//console.log(multiplicacion(12,2))
//console.log(dividir(1,2))

//import { getStudent } from "./promises";

//getStudent(true)
  //  .then(response =>
   // {
     //   console.log(response)
    //}
    //)
    //.catch(error =>
    //{
      //  console.log(error)
   // }
    //)

    //console.log('Hola')
const product = await getProduct()
console.log(product)

import {getProduct,addProduct,updateProduct} from './fetch'

const products = { title: 'New Product', price: 29.99 };
console.log(await addProduct(products))

const productUpdate = { title: 'Updated Product', price: 39.99 };
console.log(await updateProduct(1,productUpdate))
