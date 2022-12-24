function Cart (props) {
    const {quantity = 0, basketShow = Function.prototype} = props;

    return (
        <div className="cart #4a148c purple darken-4 white-text" onClick={basketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? (<span className="cart-quantity">{quantity}</span>) : null}
        </div>
    )
}

export {Cart}