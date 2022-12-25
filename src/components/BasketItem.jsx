function BasketItem(props) {

    const {
        mainId,
        price,
        displayName,
        quantity,
        deleteFromShoppingList = Function.prototype
    } = props;

    return (

        <li className="collection-item">

            {displayName} x{quantity} = {price.finalPrice * quantity} VC

            <span className="secondary-content">
                <i onClick={ () => deleteFromShoppingList({
                    mainId
                })}  className="material-icons close-icone">close</i>
            </span>
        </li>
    )
}

export {BasketItem}