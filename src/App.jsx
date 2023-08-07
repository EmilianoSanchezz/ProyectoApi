import { useState } from 'react'
import { ProductList } from './componentes/ProductList'
import { Header } from './componentes/Header';

function App() {
  const [count, setCount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <>
      <div className="App">
        
        <h1 className='title'>FakeStore</h1>
        <Header 
        allProducts = {allProducts} 
        setAllProducts = {setAllProducts} 
        total = {total} 
        setTotal= {setTotal} 
        countProducts={countProducts} 
        setCountProducts ={setCountProducts}
         />
        <ProductList 
        allProducts = {allProducts} 
        setAllProducts = {setAllProducts} 
        total = {total} 
        setTotal= {setTotal} 
        countProducts={countProducts} 
        setCountProducts ={setCountProducts}
         />


      </div>

    </>
  )
}

export default App
