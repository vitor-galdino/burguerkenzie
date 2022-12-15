import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Button } from '../../styles/buttons';
import { DefaultInput } from '../../styles/inputs';
import { NavBar } from './styles';

interface IInputSearchProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const InputSearch = ({ onClick }: IInputSearchProps) => {
    const { setFilteredProducts } = useContext(CartContext);

    return (
        <NavBar>
            <li>
                <DefaultInput
                    type='text'
                    id='search'
                    placeholder='Digitar Pesquisa'
                    onChange={(e) => !e.target.value.length && setFilteredProducts([])}
                />
                <Button onClick={onClick} variant='mediumGreen'>Pesquisar</Button>
            </li>
        </NavBar>
    );
};