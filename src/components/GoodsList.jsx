import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing found</h3>;
    }
    return (
        <div className="goods">
            {goods.map((element) => (
                <GoodsItem key={element.id} {...element} />
            ))}
        </div>
    );
}

export { GoodsList };
