import { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart';
import { BasketList } from '../components/BasketList';


function Shop () {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [basket, setBasket] = useState(false);

    const addToShoppingList = (item) =>  {
        const indexItem = order.findIndex(el => el.mainId === item.mainId)

        if(indexItem < 0) {
            const cloneItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, cloneItem])
        } else {
            const newOrder = order.map((orderItem, index) => {

                if(index === indexItem) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
                
            })
            setOrder(newOrder)
        }

    }   

    const basketShow = () => {
        setBasket(!basket)
    }

    const deleteFromShoppingList = (item) => {
        
        const deleteItem = order.findIndex(el => el.mainId === item.mainId);

        if(order[deleteItem].quantity > 1) {
            
            return setOrder([])
        }

        order.splice(deleteItem, 1);

        setOrder([...order]);

        console.log(order)

    }


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop.slice(0, 15));
                setLoading(false);
            })
    }, [])

    return (
        <main className="container content">

            <Cart quantity={order.length} basketShow={basketShow}/>

            {
                loading ? <Preloader /> : <GoodsList addToShoppingList={addToShoppingList} goods={goods} />
            }

            {
                basket && <BasketList basketShow={basketShow} deleteFromShoppingList={deleteFromShoppingList} order={order}/>
            }

        </main>
    )
}

export {Shop}