function BasketItem(props) {

    const {
        mainId,
        price,
        displayName,
        quantity
    } = props;

    return (

        <li className="collection-item" id={mainId}>

            {displayName} x{quantity} = {price.finalPrice * quantity} VC

            <span className="secondary-content">
                <i  className="material-icons close-icone">close</i>
            </span>
        </li>
    )
}

export {BasketItem}