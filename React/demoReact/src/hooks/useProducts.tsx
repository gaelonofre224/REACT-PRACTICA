import {useState} from 'react'
import { type ProductReference } from '../types/productTypes'
import { type Product } from '../components/ProductCard'

export const useProducts = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0.0)
    const [products, setProducts] = useState<ProductReference[]>([])

const handleCreateProduct = () => {

    const newProduct: Product = {
      id: Date.now().toString(),
      titulo: title,
      categoria: category,
      descripcion: description,
      precio: price,
    }

    setProducts([...products, newProduct])

    setTitle('');
    setCategory('');
    setDescription('');
    setPrice(0.0);

}

    return {
        products,
        title,
        setTitle,
        setCategory,
        setDescription,
        setPrice,
        category,
        price,
        description,
        handleCreateProduct
    }
}