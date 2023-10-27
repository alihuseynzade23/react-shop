import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [] } = props;

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
