import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss'
import {CheckoutItemS, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton} from './checkout-item.style';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;

    return (<CheckoutItemS>
            <ImageContainer>
                <Image src={imageUrl} alt='item' />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={()=>removeItem(cartItem)}> &#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={()=>addItem(cartItem)}> &#10095;</Arrow>
            </Quantity>
            <Price> {price}</Price>
            <RemoveButton onClick={()=>clearItem(cartItem)}> &#10005;</RemoveButton>
        
    </CheckoutItemS>)
}

const mapDispatchToProps = dispatch => ({
    clearItem: item=>dispatch(clearItemFromCart(item)),
    addItem: item=> dispatch (addItem(item)),
    removeItem: item=> dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem); 