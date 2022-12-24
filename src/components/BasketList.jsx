import { BasketItem } from './BasketItem'

function BasketList(props) {

    const {order = [], basketShow = Function.prototype} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0)

    return (
        <ul className="collection basket-list ">
            <li className="collection-item #4a148c purple darken-4 active">Basket
                <span className="secondary-content">
                    <i className="material-icons close-icone white-text" onClick={basketShow}>close</i>
                </span>
            </li>
                {
                    order.length ? order.map(item => (
                    <BasketItem  key={item.mainId} {...item}/>))
                    : <li class="collection-item">Basket is empty</li>
                }
            <li className="collection-item active #4a148c purple darken-4">Total Price = {totalPrice} VC</li>
        </ul>
    )
}

export {BasketList}