import React from 'react'
import { useForm } from 'react-hook-form'
import CreateUser from './CreateUser'

const Users = () => {
  
  

  return (
    <div className='w-full'>
      <h1>Formulário de criação de usuário</h1>
      <CreateUser/>
    </div>
  )
}

export default Users