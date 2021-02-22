import React ,{ Fragment, useState } from "react";

const Listado = () =>{

    const students = [
        {name:'Ismael', age:31},
        {name :'Miguel', age:63},
        {name:'juan', age: 63},
        {name:'Pedro',age:53}
    ];

    return(
       
        <Fragment>
             <table className='border-collapse border border-green-800 p-3'>
                <thead >
                    <tr>
                        <th className='border border-green-800 px-2'>Nombre</th>
                        <th className='border border-green-800 px-2'>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, key) =>(
                            <tr className='text-center' key={key}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
               
        </Fragment>
    )
}

export default Listado;