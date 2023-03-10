import { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart';
import {BasketList} from '../components/BasketList';
import {Alert} from '../components/Alert';



function Shop () {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [basket, setBasket] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToShoppingList = (item) =>  {
        const indexItem = order.findIndex(el => el.mainId === item.mainId)
        setAlertName(item.displayName);

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

    const closeAlert = () => {
        setAlertName('')
    }

    const basketShow = () => {
        setBasket(!basket)
    }

    const deleteFromShoppingList = (item) => {
        
        const deleteItem = order.findIndex(el => el.mainId === item.mainId);

        order.splice(deleteItem, 1);

        return setOrder([...order]);

    }

    const deleteOneBasketItem  = (item) => {
        const findId = order.find(el => el.mainId === item.mainId)

        if (findId.quantity > 1) {
            findId.quantity -= 1;

            return setOrder([...order])
        }

        return null
    }

    const addOneBasketItem  = (item) => {
        const findId = order.find(el => el.mainId === item.mainId)

        if (findId.quantity >= 1) {
            findId.quantity += 1;

            return setOrder([...order])
        }

        return null
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
                basket && <BasketList deleteOneBasketItem={deleteOneBasketItem} addOneBasketItem={addOneBasketItem} basketShow={basketShow} deleteFromShoppingList={deleteFromShoppingList} order={order}/>
            }
            {
                alertName && <Alert closeAlert={closeAlert} name={alertName} />
            }
        </main>
    )
}

export {Shop}