import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Table from 'react-bootstrap/Table';

export const Colaboradores = () => {
    const [colaboradores, setColaboradores] = useState([]);
    const [mostrarTabla, setTabla] = useState(false)

    useEffect(() =>{
        getColaboradores();
    }, [])

    const getColaboradores = () => {
        axios.get('http://localhost:4000/colaboradores').then((response) => {
            setColaboradores(response.data)
            console.log(response.data);
        }).catch((error) => {
            alert(error.message);
        })
    }

    const toggleTabla = () => {
        setTabla(!mostrarTabla)
    }

  return (
    <div>
        <h2>Colaboradores</h2>
        <button onClick={toggleTabla}>
                {mostrarTabla ? 'Ocultar Tabla' : 'Mostrar Tabla'}
        </button>
        {
            mostrarTabla && (
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>direccion</th>
                        <th>edad</th>
                        <th>profesion</th>
                        <th>estado civil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colaboradores.map((colaborador) =>(
                            <tr key={colaborador.IdColaborador}>
                                <td>{colaborador.IdColaborador}</td>
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.apellido}</td>
                                <td>{colaborador.direccion}</td>
                                <td>{colaborador.edad}</td>
                                <td>{colaborador.direccion}</td>
                                <td>{colaborador.estadocivil}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }

    </div>
    
  )
}
