import React from 'react';

import { CartProduct } from '../CartProduct';
import { CartTotal } from '../CartTotal';
import { CartBox, CartContent, CartHeader } from './styles';

export const Cart = ({ currentSale, setCurrentSale }) => {

    const removeProduct = (e) => {
        const newList = currentSale.filter((elem) => parseInt(e.target.id) !== elem.id);
        setCurrentSale([...newList]);
    };

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
                                    onClick={removeProduct}
                                    key={product.id}
                                />
                            );
                        })}
                    </ul>
                </CartContent>
            }
            {!!currentSale.length && <CartTotal
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
            />}
        </CartBox>
    );
};
