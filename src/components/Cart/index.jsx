import React from 'react';

import { CartProduct } from '../CartProduct';
import { CartBox, CartContent, CartHeader } from './styles';

export const Cart = ({ currentSale }) => {
    return (
        <CartBox>
            <CartHeader>Carrinho de compras</CartHeader>
            {!currentSale.length
                ? <CartContent heightSize='158px'>
                    <h4>Sua sacola está vazia</h4>
                    <span>Adicione itens</span>
                </CartContent>
                : <CartContent heightSize='305px'>
                    <ul>
                        {currentSale.map((product) => {
                            return (
                                <CartProduct
                                    data={product}
                                    key={product.id}
                                />
                            );
                        })}
                    </ul>
                </CartContent>
            }
        </CartBox>
    );
};
