import React, {Fragment} from 'react'

const Saludo = () => {
    let saludo='variable de prueba...';
    return(
        <Fragment>
            <h1 className='text-sm text-gray-500'>Este es el componente de saludo</h1>
            <p className='text-xs text-blue-100' >{saludo}</p>
        </Fragment>
    )
}

export default Saludo;