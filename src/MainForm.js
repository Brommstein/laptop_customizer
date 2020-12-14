import React from 'react';
import Parts from './Parts';
import Specs from './Specs';
import Store from './STORE';
import slugify from 'slugify';

export default function mainForm(props) {
    const features = Object.keys(Store.FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = Store.FEATURES[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Parts key={itemHash} itemHash={itemHash} feature={feature} item={item} selected={props.selected} update={this} updateFeature={props.updateFeature} />
          );
        });
  
        return (
          <Specs key={featureHash} featureHash={featureHash} feature={feature} options={options} />
        );
      });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}