import { createAsyncThunk } from "@reduxjs/toolkit"

export const getEmpProfileData = createAsyncThunk("getEmpProfileData", async (empData) => {
    sessionStorage.setItem('accessToken',empData.accessToken)
    sessionStorage.setItem('name',empData.user.name)
    sessionStorage.setItem('id',empData.user._id)
    return empData
})