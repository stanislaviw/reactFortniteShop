import { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart'


function Shop () {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])

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


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    }, [])

    return (
        <main className="container content">
            {
                loading ? <Preloader /> : <GoodsList addToShoppingList={addToShoppingList} goods={goods} />
            }
            <Cart quantity={order.length}/>
        </main>
    )
}

export {Shop}