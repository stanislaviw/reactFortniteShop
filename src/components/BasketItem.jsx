function BasketItem(props) {

    const {
        mainId,
        price,
        displayName,
        quantity,
        deleteFromShoppingList = Function.prototype
    } = props;

    return (

        <li className="collection-item collection-item-style">
            <span className="collection-item-display-name">
                { displayName.length > 10 ? displayName.slice(0, 10) + "..." : displayName} 
            </span>
            
            <button className="collection-item-btn">-</button>
            <span>{quantity}</span>
            <button className="collection-item-btn">+</button>

            <span className="collection-item-display-name">
                = {price.finalPrice * quantity} VC
            </span>

            <span className="secondary-content">
                <i onClick={ () => deleteFromShoppingList({
                    mainId
                })}  className="material-icons close-icone">close</i>
            </span>
        </li>
    )
}

export {BasketItem}