function Rarity (props) {

    const {rarity} = props;
    
    if(rarity === 'Epic') {
        return <p className="rarity rarity-epic">EPIC</p>
    }
    if(rarity === 'Legendary') {
        return <p className="rarity rarity-legendary">LEGENDARY</p>
    }
    if(rarity === 'Uncommon') {
        return <p className="rarity rarity-uncommon">UNCOMMON</p>
    }
    if(rarity === 'Rare') {
        return <p className="rarity rarity-rare">RARE</p>
    }
   
    return <p className="rarity rarity-common">COMMON</p>
}

export {Rarity}