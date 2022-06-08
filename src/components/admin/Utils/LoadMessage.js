import React from 'react';
import { Callout } from 'react-foundation';

const LoadMessage = (props) => {

    return (
        props.loaded ?
            <Callout color='success'>Actualizado correctamente</Callout> :
            props.isLoading ? <Callout color='warning' >Actualizando...</Callout> :
            null
    );

}


export default LoadMessage;