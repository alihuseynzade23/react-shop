import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromBasket = (itemID) => {
        const newOrder = order.filter((element) => element.id !== itemID);
        setOrder(newOrder);
    };

    const handleBasketShop = () => {
        setBasketShow(!isBasketShow);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    useEffect(function getGoods() {
        fetch("https://fortniteapi.io/v1/shop?lang=en", {
            headers: {
                Authorization: "0e02dc9b-695cdcd6-f9a730db-334954de",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container content">
            <Cart handleBasketShop={handleBasketShop} quantity={order.length} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList addToBasket={addToBasket} goods={goods} />
            )}
            {isBasketShow && (
                <BasketList
                    increment={incQuantity}
                    decrement={decQuantity}
                    removeFromBasket={removeFromBasket}
                    handleBasketShop={handleBasketShop}
                    order={order}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </div>
    );
}

export { Shop };
