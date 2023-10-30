function Cart(props) {
    const { quantity = 0, handleBasketShop = Function.prototype } = props;

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
