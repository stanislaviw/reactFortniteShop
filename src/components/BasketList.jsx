import { BasketItem } from './BasketItem'

function BasketList(props) {

    const {order = [],
        basketShow = Function.prototype,
        deleteFromShoppingList = Function.prototype,
        deleteOneBasketItem = Function.prototype,
        addOneBasketItem = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item #6a1b9a purple darken-3 active">Basket
                <span className="secondary-content">
                    <i className="material-icons close-icone white-text" onClick={basketShow}>close</i>
                </span>
            </li>
                {
                    order.length ? order.map(item => (
                <BasketItem addOneBasketItem={addOneBasketItem} deleteFromShoppingList={deleteFromShoppingList} deleteOneBasketItem={deleteOneBasketItem} key={item.mainId} {...item}/>))
                    : <li class="collection-item">Basket is Empty</li>
                }
            <li className="collection-item active #6a1b9a purple darken-3">Total Price = {totalPrice} VC <a href="#" className="secondary-content link-buy">Proceed to Buy</a></li>
        </ul>
    )
}

export {BasketList}