import React from 'react'; 


import { CartItemStyle, ImageStyle, ItemDetails, Name, Price} from './cart-item.style';

const CartItem = ({ item: {imageUrl, price, name, quantity }})=> (
    <CartItemStyle>
        <ImageStyle src={imageUrl} alt="item" />
        <ItemDetails>
            <Name>{name}</Name>
            <Price>{quantity} x ${price}</Price>
        </ItemDetails>
    </CartItemStyle>
) 

export default CartItem; 