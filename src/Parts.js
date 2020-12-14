import React from 'react';
import STORE from './STORE';
import slugify from 'slugify';

export default function parts(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={props.item.name === props.selected[props.feature].name}
                onChange={e => props.update.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({STORE.USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
    )
}