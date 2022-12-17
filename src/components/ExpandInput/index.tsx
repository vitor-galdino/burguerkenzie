import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form/dist/useForm';
import { CartContext } from '../../contexts/CartContext';
import { InputContainer, TextField } from './styles';

export const ExpandInput = () => {
    const { isExpanded, setIsExpanded } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onSubmit',
    });

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.id !== 'outlined-full-width'
                && target.id !== 'search-icon'
                && target.id !== 'search-box'
                && target.tagName !== 'path') {
                setIsExpanded(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <InputContainer isExpanded={isExpanded}>
            <div>
                <TextField
                    id='outlined-full-width'
                    isExpanded={isExpanded}
                    placeholder='Buscar'
                    fullWidth
                    variant='outlined'
                />
                <InputAdornment position='start' >
                    <IconButton id='search-box' onClick={() => setIsExpanded(!isExpanded)}>
                        <SearchIcon id='search-icon' />
                    </IconButton>
                </InputAdornment>
            </div>
        </InputContainer>
    );
};
