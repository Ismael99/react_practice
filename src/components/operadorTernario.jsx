import React ,{ Fragment, useState } from "react";

const Temperatura = () =>{
    const [temperatura, setTemperatura] = useState(17);
    const aumenta = () => setTemperatura(temperatura+1);
    const disminuye = () => setTemperatura(temperatura-1);
    return(
        <Fragment>
            <p>La temperatura es: {temperatura}</p>
            <p className={temperatura < 17 ? 'bg-blue-800 px-2 py-1 text-center' : 'bg-red-800 px-2 py-1 text-center'}>
                {
                    temperatura < 17 ? 'Frio' : 'Calor'
                }
            </p>
            
            <button className='border rounded-md px-2 py-1 border-red-600 mt-1 mr-1 hover:bg-red-500' 
            onClick={aumenta} >Subir</button>
            <button className='border rounded-md px-2 py-1 border-blue-600 mt-1 mr-1 hover:bg-blue-500' 
            onClick={disminuye} >Disminuye</button>
        </Fragment>
    )
}

export default Temperatura;