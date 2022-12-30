import { Product } from './components/product';
import { useProducts } from './hooks/products';

function App() {
  const { loading, error, products } = useProducts();

  return (
    <div className="container mx-auto max-w-2-xl pt-5">
      { loading && <p className="text-center">Loading...</p> }
      { error && <p className="text-center text-red-600">{ error }</p> }
      { products.map(product => <Product product={product} key={product.id}/>) }
    </div>
  )
}

export default App;
