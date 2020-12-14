import React from 'react';

export default function mainForm(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.features}
        </form>
    )
}