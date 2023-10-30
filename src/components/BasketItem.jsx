function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        increment = Function.prototype,
        decrement = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {name}{" "}
            <i
                className="material-icons btn basket-button"
                onClick={() => decrement(id)}
            >
                remove
            </i>
            x{quantity}
            <i
                className="material-icons btn basket-button"
                onClick={() => increment(id)}
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

// window.addEventListener("click", (event) => {
//     if (event.target === popup) {
//         closePopup();
//     }
// });
