import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute(props) {
    const { loginStatus } = props;

    console.log(loginStatus)

    return loginStatus.loggedin ? <Outlet/> : <Navigate to = "/login"/>
}
