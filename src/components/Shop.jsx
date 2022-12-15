import { useEffect, useState } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';
import {GoodsList} from '../components/GoodsList';


function Shop () {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(function getGoods () {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })

    }, [])

    return (
        <main className="container content">
            {
                loading ? <Preloader /> : <GoodsList />
            }
        </main>
    )
}

export {Shop}