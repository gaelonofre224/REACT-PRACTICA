
import './design-system.css'
// import {MainComponent} from './MainComponent'
import { ProductCard } from  './components/ProductCard'
import { StudentCard } from  './components/StudentCard'
import { products } from './Data/products'
import { students } from './Data/students'
import { Contador } from "./components/Contador"
import AddProduct from './components/AddProduct'
import {ProductForm} from './components/ProductForm'
import {StudentForm} from './components/StudentForm'

export const App = () => {

  return (
    <main className="page">
      <div className="container stack">
        {/* <MainComponent cualMuestro={1}/> */}
        {/* <StudentCard/> */}
        {/* <ProductCard/> */}
        {/* {products.map(product => (
          <ProductCard product={product} />
        ))}
        <br></br>
        {students.map(student => (
          <StudentCard student={student} />
        ))}  */}
        {/* <Contador/> */}
         <AddProduct/> 
        <StudentForm/>
      </div>
    </main>
 )
}
