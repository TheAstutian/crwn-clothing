import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import {selectCollections} from '../../redux/shop/shop.selector'; 

const ShopPage = ({itemsss}) => (
    <div className="shop-page">
                {
                    itemsss.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
);
   
const mapStateToProps = createStructuredSelector({
    itemsss: selectCollections
})

export default connect(mapStateToProps)(ShopPage);