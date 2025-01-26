import { useEffect, useState } from 'react';

function CalculateItemPrice() {
    const mango = 45;
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculatePrice = () => { return mango * quantity }

    useEffect(() => {
        setTotalPrice(calculatePrice());
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
    );
}

export default CalculateItemPrice;

{/* do it like this in adding to other component: 
    initial after function of compoent : const mangoPrice = 45;
    then inside return
    <CalculateItemProps initialPrice= {mangoPrice} /> */}