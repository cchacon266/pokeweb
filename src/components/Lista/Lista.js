import { Fragment } from 'react';
import Formulario from '../Formulario';
import ListaPokemons from '../ListaPokemons';
import Header from '../Header';

const Lista = () => {
    return (
        <Fragment>
            <Header />
            <Formulario/>
            <ListaPokemons/>
        </Fragment>
    );
}

export default Lista;