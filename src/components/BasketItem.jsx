import { useContext } from "react";
import { ShopContext } from "../context";
function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);
    return (
        <li className="collection-item">
            {name}{" "}
            <i
                className="material-icons btn basket-button"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            x{quantity}
            <i
                className="material-icons btn basket-button"
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            = {price * quantity} azn
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}

export { BasketItem };
