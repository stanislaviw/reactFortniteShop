function GoodsItem (props) {
    const {
        mainId,
        displayName,
        rarity,
        price,
        displayAssets,
    } = props;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">
                <p> Rarity: {rarity.id}</p>
            </div>
            <div className="card-action">
                <button className="btn">Buy now</button>
                <span className="rigth">{price.finalPrice} XP</span>
            </div>
        </div>
    )
}

export {GoodsItem}