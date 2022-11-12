import React from 'react';
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else{
            reset(initialValues)
        }
    }, [userSelected])

    const submit = (data) => {
        console.log(data)
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
            .then(() => {
                getUsers()
                deselectUser()
            })
        } else{
            axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
        }
    }

    return (
        <form 
        className='users-form'
        onSubmit={handleSubmit(submit)}
        >
            <h2>New User</h2>
            <div className="input-container">
                <i className="fa-solid fa-user"></i>
                <label htmlFor="first_name"></label>
                <input 
                {...register("first_name")}
                type="text" 
                id='first_name' 
                placeholder='First name'
                />

                <label htmlFor="last_name"></label>
                <input 
                {...register("last_name")}
                type="text" 
                id='last_name' 
                placeholder='Last name'
                />
            </div>

            <div className="input-container large">
                <i className="fa-solid fa-envelope"></i>
                <label htmlFor="email"></label>
                <input 
                {...register("email")}
                type="text" 
                id='email' 
                placeholder='Email'
                />
            </div>

            <div className="input-container large">
                <i className="fa-solid fa-lock"></i>
                <label htmlFor="password"></label>
                <input 
                {...register("password")}
                type="password" 
                id='password' 
                placeholder='Password'
                />
            </div>

            <div className="input-container large">
                <i className="fa-solid fa-cake-candles"></i>
                <label htmlFor="birthday"></label>
                <input 
                {...register("birthday")}
                type="date" 
                id='birthday' 
                placeholder='Birthday'
                />
            </div>

        <button className='submit'>Submit</button>
        </form>
    );
};

export default UsersForm;