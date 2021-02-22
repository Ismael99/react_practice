import React ,{ Fragment, useState } from "react";

const Contador = ()=>{
    const [cont, SetCont] = useState(0);
    const click = ()=> SetCont(cont+1);
    return(
        <Fragment>

            <span className='flex' >
                <p className='mr-1'>Numero: </p> 
                <p className='text-red-300'>{cont}</p>
            </span>
            <button className='rounded border p-1 hover:border-gray-400 hover:text-red-200' onClick={click}>Aumentar</button>

        </Fragment>
    )
}

export default Contador;