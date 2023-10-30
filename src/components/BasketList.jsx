import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order,
        handleBasketShop = Function.prototype,
        removeFromBasket = Function.prototype,
        increment = Function.prototype,
        decrement = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        increment={increment}
                        decrement={decrement}
                        removeFromBasket={removeFromBasket}
                        key={item.id}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Basket is empty</li>
            )}
            <li className="collection-item active">
                Total cost: {totalPrice} azn
            </li>
            <li className="collection-item">
                <button className="btn btn-small">Buy</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShop}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
