import {useState} from 'react'
import {ProductCard, type Product } from '../components/ProductCard.tsx'



const AddProduct = () => {
    const [products, setProducts] = useState<Product[]>([])
    const handleAddProduct = () => 
    { 
        const newProduct: Product = 
        {
            id: Date.now().toString(),
            titulo: 'Xbox Series X',
            categoria: 'Computo',
            precio: 24999,
            descripcion: 'La mejor consola :).'
        }
        setProducts([...products, newProduct])
    }
  return (
    <div>
        <button onClick={handleAddProduct}>Agregar Producto</button>
        {
            products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default AddProduct