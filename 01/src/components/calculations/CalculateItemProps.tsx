import { useEffect, useState } from "react";
import CalculateItemPrice from './calculations/CalculateItemPrice';

interface CalculateItemPrice {
    initialPrice: number;
}

const CalculateItemProps: React.FC<CalculateItemPrice>  = ({ initialPrice }) => {

    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

const calculateProduct = () =>  quantity * initialPrice;

useEffect(() => {
    setTotalPrice(calculateProduct);
},[quantity, initialPrice])


    return (
<>
            <h1>Props Computing</h1>
            <div className="card">
                <button onClick={() => setQuantity(quantity + 1)}>
                    count is {quantity}
                </button>
                <p>
                    <code>Total Price</code> {totalPrice}
                </p>
            </div>
            <p className="read-the-docs">
                Initial Price: {initialPrice}
            </p>
        </>
    )

}

export  default CalculateItemProps;