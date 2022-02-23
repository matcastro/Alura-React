import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

const SubCategoria = () => {
    const { subcategoria } = useParams()
    const { path } = useRouteMatch()
    return(
        <>
            <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
        </>
    )
}

export default SubCategoria