import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

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
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </div>
    );
}

export { Shop };
