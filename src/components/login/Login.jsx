import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import altlogo from '../../assets/img/altlogo.png'
import { useNavigate } from 'react-router-dom'
import { ApiCaller } from '../utils/ApiCaller'
import { toast } from 'react-toastify';


const Login = () => {
    const adminEmail = 'admin@gmail.com'
    const adminPass = 'admin'
    const navigate = useNavigate()


    const [error, setError] = useState({
        email: false,
        password: false,
    })

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const onChangeEmailHandelar = (enterdMail) => {
        setData({ ...data, email: enterdMail })
    }
    const onChangePassHandelar = (enterdPass) => {
        setData({ ...data, password: enterdPass })

    }


    const onClickSubmit = async () => {
        if (data.email == adminEmail && data.password == adminPass) {
            navigate('/adminDashboard')
            return
        }
        else {
            let headers = {
                "Content-Type": "application/json"
            }
            let body = JSON.stringify({
                email: data.email,
                password: data.password
            })
            let response = await ApiCaller(body, headers, '/emp/login')
            console.log('response----', response)

            if (response.statusCode == '000') {
                toast.success(response.message)


                // Profle Data
                localStorage.setItem("address", response.data.user.address)
                localStorage.setItem("dateOfBirth", response.data.user.dateOfBirth)
                localStorage.setItem("education", response.data.user.education)
                localStorage.setItem("email", response.data.user.email)
                localStorage.setItem("img", response.data.user.img)
                localStorage.setItem("name", response.data.user.name)
                localStorage.setItem("phone", response.data.user.phone)
                localStorage.setItem("role", response.data.user.role)
                localStorage.setItem("joiningDate", response.data.user.joiningDate)


                sessionStorage.setItem("accessToken", response.data.accessToken)
                sessionStorage.setItem("id", response.data.user._id)
                sessionStorage.setItem("name", response.data.user.name)
                navigate('/empDashboard')
            }
            else (
                toast.error(response.message)
            )
        }
    }

    
    return (
        <div class="flex h-screen">
            <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div class="">
                    <img src={altlogo} alt="altaneologo" />
                </div>
            </div>
            <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div class="max-w-md w-full p-6">
                    <img class="w-full items-center mb-6" src={logo} alt='companylogo' />
                    <h1 class="text-3xl font-bold mb-6 text-black text-center">LOGIN</h1>
                    <div class="space-y-4">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                onChange={(e) => onChangeEmailHandelar(e.target.value)}
                                value={data.email}
                                type="text"
                                placeholder='Email'
                                id="email"
                                name="email"
                                class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder='Password'
                                id="password"
                                name="password"
                                onChange={(e) => onChangePassHandelar(e.target.value)}
                                class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={onClickSubmit}
                                class="w-full bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 mt-6">Login</button>
                        </div>
                        <div class="text-center">
                            <span>Don't have an account? <a href='/register' class='text-blue-800'>Register</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login