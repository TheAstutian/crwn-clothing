import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import {CollectionItemS, Image, CollectionFooter, Name, Price, CustomButtonS} from './collection-item.style';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item; 
    return (
    <CollectionItemS>
            <Image className='image' imageUrl={imageUrl}/>
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </CollectionFooter>
            <CustomButtonS onClick={()=>addItem(item)} inverted>Add to cart</CustomButtonS>
    </CollectionItemS>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem); 