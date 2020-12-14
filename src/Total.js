import React from 'react';
import STORE from './STORE';

export default function total(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {STORE.USCurrencyFormat.format(props.total)}
            </div>
        </div>
    )
}