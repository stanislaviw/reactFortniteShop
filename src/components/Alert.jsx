import {useEffect} from 'react';

function Alert(props) {

    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {

        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId)
        }

    // eslint-disable-next-line    
    }, {name})

    return (
        <div className="alert-container">
            <div className="alert-item">{name} added to Basket</div>
        </div>
    )
}

export {Alert}