import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const EmpHome = () => {
  const navigate = useNavigate()
  const id = sessionStorage.getItem('id')
  const name = sessionStorage.getItem('name')
  const accessToken = sessionStorage.getItem('accessToken')
  
  
  useEffect(() => {
    if (!name || !id || !accessToken) {
      navigate('/')
      toast.error('Please Login First')
    }
  }, [])

  return (
    <div>EmpHome</div>
  )
}

export default EmpHome