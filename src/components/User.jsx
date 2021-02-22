import React ,{ Fragment, useState } from "react";

const User = (props) =>{

    const [student, setStudent] = useState({
        _id: '',
        name:'',
        last_name:''
    });

    const handleChangeStudent = (e) =>{
        const {value, name} = e.target;
        setStudent({
            ...student,
            [name]:value,
        })
    }

    const [students, setStudents] = useState([]);


    const handleDelete = () =>{
        console.log('Delete');
    }

    const handleSubmitStudent = (e)=>{
        e.preventDefault();
        const {name, last_name} = student;
        if(name.length < 3){
            console.log('Name is requerid')
        }
        if(last_name.length < 3){
            console.log('Last Name is requerid')
        }
        else{
            console.log(student);
            setStudents([...students, student]);
        }
    }

    return (
        <Fragment>
            <div className='flex'>
                <div className='bg-green-300 w-1/2 px-3 text-center'>
                    <p className='text-3xl font-mono text-center'>Listado de Usuarios</p>
                    <table className='border-collapse border border-blue-300 mx-auto'>
                        <thead>
                            <tr>
                                <th className='border borde-blue-300 px-3'>Name</th>
                                <th className='border borde-blue-300 px-3'>Last Name</th>
                                <th className='border borde-blue-300 px-3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((item, key) =>(
                                    <tr key={key}>
                                        <td>{item.name}</td>
                                        <td>{item.last_name}</td>
                                        <td>
                                            <button onClick={() =>{console.log('Algo')}} className='border rounded-md border-red-300 font-bold text-sm 
                                                text-red-300 bg-white hover:bg-red-300 hover:text-white px-2'>
                                                {props.test}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-red-300 w-1/2 px-3'>
                    <p className='text-3xl font-mono text-center'>Formulario agregar usuario</p>
                    <form onSubmit={handleSubmitStudent} className='flex flex-wrap justify-center'>
                        <div className='w-full flex justify-center'>
                            <input 
                                className='mx-auto rounded-md text-black px-3' 
                                type="text" 
                                placeholder='Name...' 
                                name='name'
                                onChange={handleChangeStudent}
                            />
                            <input 
                                className='mx-auto rounded-md text-black px-3' 
                                type="text" 
                                placeholder='Last Name...' 
                                name='last_name'
                                onChange={handleChangeStudent}
                            />
                        </div>
                        <input type="submit" value='Enviar' className='border rounded-md border-green-300 
                            px-2 py-1 mx-auto my-3 w-1/2 hover:border-blue-400 hover:text-blue-800 hover:bg-purple-300'/>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default User;

//por que se ejecuta el handleDelete cuando presiono el boton de enviar