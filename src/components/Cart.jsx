function Cart (props) {
    const {quantity = 0, basketShow = Function.prototype} = props;

    return (
        <div className="cart #6a1b9a purple darken-3 white-text" onClick={basketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
        </div>
    )
}

export {Cart}