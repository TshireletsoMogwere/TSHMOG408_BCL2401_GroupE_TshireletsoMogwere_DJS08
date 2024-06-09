import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host";



}

export default Login