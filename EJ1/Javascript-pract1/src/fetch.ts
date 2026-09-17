interface Product
{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
}

interface productUpdateDto
{
    title: string,
    price: number
}

export async function getProduct()
{
    const response = await fetch('https://fakestoreapi.com/products')

    if(!response.ok)
    {
        console.error('MAL')
    }
    const products: Product[] = await response.json()
    return  products
}

interface ProductDto 
{
    title: string,
    price: number
}

export async function addProduct(product:ProductDto)
{
  const response= await fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})

if(!response.ok)
{
    console.error('MAL')
}

const productResponse = await response.json()
return productResponse
}

export async function updateProduct(productId:number,productUpdate:productUpdateDto)
{
    
const response = await fetch(`https://fakestoreapi.com/products/${productID}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(productUpdate)

})

if(!response.ok)
{
    console.error('MAL')
}

const updateResponse  = await response.json()   
return updateResponse
}