
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const mango = 45;
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => { return mango * quantity}

  useEffect(() => {
    setTotalPrice(calculatePrice);
  }, [quantity])

  return (
    <>
      <h1>Compute Pricing</h1>
      <div className="card">
        <button onClick={() => setQuantity(quantity + 1)}>
          count is {quantity}
        </button>
        <p>
          <code>Total Price</code> {totalPrice}
        </p>
      </div>
      <p className="read-the-docs">
        Initial Price: {mango}
      </p>
    </>
  )
}

export default App
