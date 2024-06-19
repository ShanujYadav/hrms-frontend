import React, { useState } from 'react'

const EmpProfile = () => {
    const address = localStorage.getItem('address')
    const dateOfBirth = localStorage.getItem('dateOfBirth')
    const education = localStorage.getItem('education')
    const email = localStorage.getItem('email')
    const imgUrl = localStorage.getItem('img')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')
    const role = localStorage.getItem('role')
    const joiningDate = localStorage.getItem('joiningDate')


    // const profileDetails = useSelector((state) => state.profile.userInfo)
    // const userId = profileDetails.uuid
    // const name = profileDetails.name

    const userId = 12345

    const [profileData, setprofileData] = useState({
        phone: '',
        name: '',
        panCard: '',
        gender: '',
        DOB: '',
        pinCode: '',
        email: '',
        gstRegistered: '',
        gstNumber: '',
        businessType: '',
        businessAge: '',
        businessPinCode: '',
        yearlySales: '',
    })


    // useEffect(() => {
    //   dispatch(getProfileData(userId))
    //   var gstStatus = profileData.gstRegistered ? 'Yes' : 'No'
    //   setprofileData({
    //     ...profileData,
    //     phone: profileDetails.phone,
    //     name: profileDetails.name,
    //     panCard: profileDetails.panCard,
    //     gender: profileDetails.gender,
    //     DOB: profileDetails.DOB,
    //     pinCode: profileDetails.pinCode,
    //     email: profileDetails.email,
    //     gstRegistered: gstStatus,
    //     gstNumber: profileDetails.gstNumber,
    //     businessType: profileDetails.businessType,
    //     businessAge: profileDetails.businessAge,
    //     businessPinCode: profileDetails.businessPinCode,
    //     yearlySales: profileDetails.yearlySales,
    //   })
    // }, [])

    return (
        <div class="flex flex-col h-screen ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div class="bg-white p-4 rounded-md">
                    <h2 class="block text-sm text-muted leading-6 text-black pb-2"><b className='text-blue-500'>PERSONAL </b> Details</h2>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="max-w-2xl">
                        <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-2">
                            <div>
                                <img
                                    // src="https://www.w3schools.com/howto/img_avatar.png"
                                    src={imgUrl}
                                    alt="Avatar"
                                    className="rounded-circle  h-20 w-20"
                                />
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Name</label>
                                <h6 className='text-gray-600 text-sm'>{name}</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Phone</label>
                                <h6 className='text-gray-600 text-sm'>{phone}</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Email</label>
                                <h6 className='text-gray-600 text-sm'>{email}</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gender</label>
                                <h6 className='text-gray-600 text-sm'>{profileData.gender}</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">DOB</label>
                                <h6 className='text-gray-600 text-sm'>{dateOfBirth}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-md ">
                    <h2 class="block text-sm leading-6 text-muted pb-2"><b className='text-blue-500'>OTHER </b> Details</h2>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="max-w-2xl">
                        <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-2">
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Education</label>
                                <h6 className='text-gray-600 text-sm'>{education}</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Role</label>
                                <h6 className='text-gray-600 text-sm'>{role}</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Date Of Joining</label>
                                <h6 className='text-gray-600 text-sm'>{joiningDate}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="leading-normal">
                            <th class="bg-grey-lightest text-sm text-grey-light border-b border-grey-light text-center">
                                profileDetails.genderjdnnjn dn
                            </th>
                            <th class="px-3 bg-grey-lightest text-sm text-grey-light border-b border-grey-light">
                                Phone
                            </th>
                            <th class="py-1 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                                <img src="https://www.w3schools.com/howto/img_avatar.png"
                                    alt="Avatar"
                                    className="rounded-circle  h-20 w-20"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        m jmjj
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Shanuj Yadav</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                            </td>
                            <td class="py-2 px-4 border-b border-grey-light">María Gómez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                            </td>
                            <td class="py-2 px-4 border-b border-grey-light">Carlos López</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                            </td>
                            <td class="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                            </td>
                            <td class="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">
                                <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                            </td>
                            <td class="py-2 px-4 border-b border-grey-light">Luis Martínez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                    </tbody>
                </table> */}


            {/* 
        <div className="row">
            <div className="col-md-6 col-12">
                <h6 className="lh-base fw-normal">
                    <b>Personal</b> Details
                </h6>
                <div className="card p-4" style={{ maxHeight: "60vh", overflow: "scroll" }}>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">Name</small>
                                <br />
                                profileDetails.name
                            </h6>
                            <div className="d-flex  align-items-center mb-2" style={{ justifyContent: "flex-start" }}>
                                <h6 className="font-size-12">
                                    <small className="text-muted">DOB</small>
                                    <br />
                                    profileDetails.dob
                                </h6>
                                <h6 className="font-size-12 mx-4">
                                    <small className="text-muted">Gender</small>
                                    <br />
                                    profileDetails.gender
                                </h6>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="text-center">
                                <img
                                    src="https://www.w3schools.com/howto/img_avatar.png"
                                    alt="Avatar"
                                    className="rounded-circle avatar-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="d-flex  align-items-center my-3 py-3"
                        style={{
                            borderTop: "1px dashed #7c7b7b",
                            borderBottom: "1px dashed #7c7b7b",
                        }}
                    >
                        <i className="fa-solid fa-phone font-size-12 me-4"></i>
                        <h6 className="font-size-12">+91 profileDetails.mobileNo</h6>
                    </div>

                    <div className="row mb-3 pb-3" >
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">Address</small>
                            <br />
                            profileDetails.agentAdd
                        </h6>
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">District</small>
                                <br />
                                profileDetails.agentDist
                            </h6>

                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">State</small>
                                <br />
                                profileDetails.agentState
                            </h6>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">Pincode</small>
                                <br />
                                profileDetails.agentPinCode
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-12">
                <h6 className="lh-base fw-normal">
                    <b>Business</b> Details
                </h6>
                <div className="card p-4" style={{ maxHeight: "60vh", overflow: "scroll" }}>
                    <h6 className="font-size-12 mb-2">
                        <small className="text-muted">Business Name</small>
                        <br />
                        profileDetails.businessName

                    </h6>
                    <h6 className="font-size-12 mb-2">
                        <small className="text-muted">Agent ID</small>
                        <br />
                        profileDetails.agentId
                    </h6>
                    <h6 className="font-size-12 mb-2">
                        <small className="text-muted">Terminal ID</small>
                        <br />
                        profileDetails.terminal
                    </h6>
                    <h6 className="font-size-12 mb-2">
                        <small className="text-muted">PAN Number</small>
                        <br />
                        profileDetails.panNo
                    </h6>
                    <div className="pt-3  mt-3" style={{
                        borderTop: "1px dashed #7c7b7b",
                    }}>
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">Address</small>
                            <br />
                            profileDetails.businessAdd
                        </h6>
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">District</small>
                                <br />
                                profileDetails.businessDist
                            </h6>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">State</small>
                                <br />
                                profileDetails.businessState
                            </h6>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">Pincode</small>
                                <br />
                                profileDetails.businessPinCode
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div >
    )
}

export default EmpProfile