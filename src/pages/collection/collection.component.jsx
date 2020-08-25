import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.style.scss'; 

import {selectCollection} from '../../redux/shop/shop.selector';


const CollectionPage = ({collection}) =>{
    console.log(collection)
    return (
    <div className='category'>
        <h2>CATEGORY PAGE</h2>

    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage); 