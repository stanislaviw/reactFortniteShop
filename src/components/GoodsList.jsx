import {GoodsItem} from './GoodsItem';
import {NotFound} from './NotFound';

function GoodsList (props) {
    const {goods = []} = props;

    if (!goods.length) {
        return (
            <NotFound />
        )
    }

    return (
        <div className='goods'>
            {goods.map((item) =>  <GoodsItem key={item.mainId} {...item} />)}
        </div>
    )
}  

export {GoodsList}