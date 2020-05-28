import React, { useContext} from 'react'
import {Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../provider/AuthContext'

export const AuthRoute = ({children, ...rest}) => {
    const { currentUser } =useContext(AuthContext);
    return (
        <Route
        {...rest}
        render = {({location}) =>{
            return !currentUser ? children: <Redirect to="/tweet" />
        }}
        />
    )
}

export const ProtectedRoute = ({children, ...rest}) => {
    const { currentUser } =useContext(AuthContext);
    return (
        <Route
        {...rest}
        render = {({location}) =>{
            return currentUser ? children: <Redirect to="/login" />
        }}
        />
    )
}

