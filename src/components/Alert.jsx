import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
function Alert() {
    const { closeAlert = Function.prototype, alertName: name = "" } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast">{name} added to basket</div>
        </div>
    );
}

export { Alert };
