import React from 'react';
import TOTAL from './Total';

export default function mainSummary(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {props.summary}
            <TOTAL total={props.total} />
        </section>
    )
}