import {GoodsItem} from './GoodsItem';
import {NotFound} from './NotFound';

function GoodsList (props) {
    const {goods = [], addToShoppingList = Function.prototype} = props;

    if (!goods.length) {
        return (
            <NotFound />
        )
    }

    return (
        <div className='goods'>
            {goods.map((item) =>  <GoodsItem addToShoppingList={addToShoppingList} key={item.mainId} {...item} />)}
        </div>
    )
}  

export {GoodsList}