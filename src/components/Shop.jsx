import { useEffect, useContext } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { ShopContext } from "../context";

function Shop() {
    // const [goods, setGoods] = useState([]);
    // const [order, setOrder] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [isBasketShow, setBasketShow] = useState(false);
    // const [alertName, setAlertName] = useState("");
    const { loading, order, isBasketShow, alertName, setGoods } =
        useContext(ShopContext);

    // const removeFromBasket = (itemID) => {
    //     const newOrder = order.filter((element) => element.id !== itemID);
    //     setOrder(newOrder);
    // };

    // const handleBasketShop = () => {
    //     setBasketShow(!isBasketShow);
    // };

    // const incQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity + 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder);
    // };
    // const decQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.quantity - 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder);
    // };

    // const closeAlert = () => {
    //     setAlertName("");
    // };

    useEffect(function getGoods() {
        fetch("https://fortniteapi.io/v1/shop?lang=en", {
            headers: {
                Authorization: "0e02dc9b-695cdcd6-f9a730db-334954de",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
    }, []);
    return (
        <div className="container content">
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </div>
    );
}

export { Shop };
