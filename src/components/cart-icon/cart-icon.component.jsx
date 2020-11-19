import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'; 

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';



import {CartIconStyle, ShoppingIconStyle, ItemCount} from './cart-icon.style';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconStyle onClick={toggleCartHidden}>
         <ShoppingIconStyle />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconStyle>

);

const mapDispatchToProps = dispatch=> ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);