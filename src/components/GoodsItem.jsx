import {Rarity} from './Rarity'

function GoodsItem (props) {
    const {
        mainId,
        displayName,
        rarity,
        price,
        displayAssets,
        addToShoppingList = Function.prototype,
    } = props;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">

                <Rarity rarity={rarity.id} />

            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToShoppingList({
                    mainId,
                    price,
                    displayName,
                })}>Buy now</button>
                <span className="rigth">{price.finalPrice} VC</span>
            </div>
        </div>
    )
}

export {GoodsItem}