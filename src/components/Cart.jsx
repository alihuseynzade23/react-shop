import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    const { handleBasketShop = Function.prototype, order } =
        useContext(ShopContext);

    const quantity = order.length;
    return (
        <div
            className="cart blue darket-4 white-text"
            onClick={handleBasketShop}
        >
            <i className="material-icons">shopping_cart</i>

            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
