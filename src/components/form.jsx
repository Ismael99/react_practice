import React, { Fragment, useState } from "react";

const Form = () =>{
    const [student, setStudent] = useState({
        name:'',
        last_name:'',
        age:0
    })

    const handleChangeStudent = (e) =>{
        const {value, name} = e.target;
        setStudent({
            //Operador de propagacion
            ...student,
            [name]: value
        })
    }
    const handleSubmitStudent = (e)=>{
        e.preventDefault();
        const {name, last_name, age} = student;
        if(name.length < 3){
            console.log('Name is requerid');
        }
        if(last_name.length < 3){
            console.log('Last name is requerid');
        }
        if(age.length<3){
            console.log('Age is requerid');
        }
    }
    return(
        <Fragment>
            <form  onSubmit={handleSubmitStudent} action="" method="get" className='form-group flex flex-col m-3 text-black border justify-center rounded-md'>
                    <input 
                        type="text" 
                        className='m-2 form-control px-1' 
                        placeholder='Ingresar nombre' 
                        name='name'
                        onChange={handleChangeStudent}
                    />
                    <input 
                        type="text" 
                        className='m-2 form-control px-1' 
                        placeholder='Ingresar apellido' 
                        name='last_name'
                        onChange={handleChangeStudent}
                    />
                    <input 
                        type="date" 
                        className='m-2 form-control px-1' 
                        placeholder='Fecha de nacimiento'
                        name='age'
                        onChange={handleChangeStudent}
                    /> 
                    <button type='submit' className='border rounded-md border-blue-800 w-2/4 mx-auto mb-1 text-white hover:text-blue-800 hover:bg-white transform hover:-translate-y-1 hover:translate-x-1' > Enviar </button>               
            </form>
        </Fragment>
    )
}

export default Form;
