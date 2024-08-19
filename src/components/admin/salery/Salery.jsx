import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ApiCaller } from '../../utils/ApiCaller';
import Modal from 'react-modal';
import { RxCross2 } from "react-icons/rx";

const Salery = () => {
    const [openModal, setOpenModal] = useState(false)
    const [empList, setEmpList] = useState([])
    const [selectedEmp, setSelectEmp] = useState([])

    const initialState = {
        id: '',
        year: '',
        month: '',
        baseSalery: '',
        hra: '',
        otherAllowances: '',
    }
    const [data, setData] = useState(initialState)

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    const onClickSave = async () => {
        console.log(data)
        return

        // if (!data.leaveType || !data.fromDate || !data.toDate) {
        //     toast.error('Fill all Feilds !')
        //     return
        // }

        // else {
        // let headers = {
        //     "Content-Type": "application/json",
        //     "accessToken": accessToken,
        //     "userAgent": "altaNeo"
        // }

        // let body = JSON.stringify({
        //     applicantName: name,
        //     applicantId: id,
        //     fromDate: data.fromDate,
        //     toDate: data.toDate,
        //     leaveType: data.leaveType,
        //     leaveDays: noOfDays,
        // })
        // let response = await ApiCaller(body, headers, '/leave/reqForLeave')
        // if (response.statusCode == '000') {
        //     toast.success(response.message)
        //     fetchApplicationStatus()
        //     setData(initialState)
        // }
        // else (
        //     toast.error(response.message)
        //    )
        // }
    }


    const takeOnlyNumbers = (e) => {
        const name = e.target.name
        const value = e.target.value
        const enteredValue = value.replace(/\D/g, '').slice(0, 10)
        setData({ ...data, [name]: enteredValue })
    }


    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            setEmpList([])
            let headers = {};
            let body = {};
            try {
                let response = await ApiCaller(body, headers, '/emp/empList')
                console.log('empList ----', response)
                if (isMounted && response.statusCode === '000') {
                    setEmpList(response.data);
                } else {
                    setEmpList([]);
                }
            } catch (e) {
                if (isMounted) {
                    setEmpList([]);
                }
                console.log(e);
            }
        }
        fetchData()
        return () => {
            isMounted = false;
        }
    }, [])




    const onClickMakeSlip = (emp) => {
        setOpenModal(true)
        setSelectEmp(emp)
        setData({ ...data, id: emp._id })
        // console.log(emp)
    }



    return (
        <>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name/Email</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phone</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {empList.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-4 py-3 text-center text-sm">
                                    No employees found
                                </td>
                            </tr>
                        ) : (
                            empList.map((emp, index) => (
                                <tr key={index} class="">
                                    <th class="flex gap-3 px-6 py-3 font-normal text-gray-900">
                                        <div class="relative h-10 w-10">
                                            <img
                                                class="h-full w-full rounded-full object-cover object-center"
                                                src={emp.img}
                                                alt=""
                                            />
                                        </div>
                                        <div class="text-sm">
                                            <div class="font-medium pt-2 text-gray-700">{emp.name}</div>
                                            <div class="text-gray-400">
                                            </div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        {emp.phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        <span
                                            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                            {emp.role}
                                        </span>
                                    </td>
                                    <td class="">
                                        <button
                                            type="button"
                                            onClick={() => onClickMakeSlip(emp)}
                                            className="min-w-[100px] py-2 px-2 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                                        >Make Slip
                                        </button>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>



            <Modal
                isOpen={openModal}
                onRequestClose={onCloseModal}
                contentLabel="Example Modal"
                className='overflow:hidden'
            >
                <div class="flex justify-center h-screen items-center ">
                    <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">

                        <div className="flex items-center justify-between px-6 py-3 font-normal text-gray-900 bg-white">
                            <div className="flex gap-3">
                                <div className="relative h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src={selectedEmp.img}
                                        alt={selectedEmp.name}
                                    />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium pt-2 text-gray-700">{selectedEmp.name}</div>
                                    <div className="text-gray-400"></div>
                                </div>
                            </div>
                            <RxCross2
                                size={20}
                                className="cursor-pointer"
                                onClick={onCloseModal}
                            />
                        </div>



                        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12 p-10 bg-gray-50">
                            <div className=''>
                                <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">Year</label>
                                <select
                                    name="year"
                                    type="text"
                                    className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                                    value={data.year}
                                    onChange={handleChange}
                                >
                                    <option value="" className='text-muted'>Select Year</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm mb-2 block mt-4 font-semibold">Month</label>
                                <select
                                    name="month"
                                    type="text"
                                    className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                                    value={data.month}
                                    onChange={handleChange}
                                >
                                    <option value="" className='text-muted'>Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm mb-2 block mt-4 font-semibold">Base Salery</label>
                                <input
                                    onChange={takeOnlyNumbers}
                                    value={data.baseSalery}
                                    type="text"
                                    placeholder='Enter Base Salery'
                                    name="baseSalery"
                                    className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                                />
                            </div>
                            <div className=''>
                                <label className="text-sm mb-2 block mt-4 font-semibold">HRA</label>
                                <input
                                    onChange={takeOnlyNumbers}
                                    value={data.hra}
                                    type="text"
                                    placeholder='Enter HRA'
                                    name="hra"
                                    className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm mb-2 block mt-4 font-semibold">Other Allowances</label>
                                <input
                                    onChange={takeOnlyNumbers}
                                    value={data.otherAllowances}
                                    type="text"
                                    placeholder='Enter Other Allowances'
                                    name="otherAllowances"
                                    className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                                />
                            </div>
                        </div>

                        <div
                            class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                            <button
                                class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded"
                                onClick={onCloseModal}>
                                Cancle
                            </button>
                            <button
                                type="button"
                                onClick={onClickSave}
                                className="min-w-[100px] py-2 px-2 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                            >Save
                            </button>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )


    // return (
    //     <div className="p-4 mb-5 rounded-xl bg-white">
    //         <div className='my-3'>
    //             <h3 className='block text-gray-700 text-sm font-bold '>Apply For Leave</h3>
    //         </div>
    //         <hr />
    //         <form >
    // <div className="grid sm:grid-cols-3 gap-y-7 gap-x-12">
    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">Employee Name</label>
    //         <select
    //             name="empName"
    //             type="text"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //             value={data.empName}
    //             onChange={(e) => onChngeEmpName(e.target.value)}
    //         >
    //             <option value="" className='text-muted'>Select Employee</option>
    //             {empList.map((data, index) => (
    //                 <option
    //                     key={index}
    //                     value={`${data.name}-${data.phone}`}
    //                 >
    //                     <div className='bg-slate-300 flex-1'>
    //                         <span>
    //                         {data.name}
    //                         </span>
    //                         <br />
    //                         {data.phone}
    //                     </div>
    //                 </option>
    //             ))}
    //         </select>
    //     </div>
    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-semibold">Phone</label>
    //         <input
    //             onChange={takeOnlyNumbers}
    //             value={data.phone}
    //             type="text"
    //             placeholder='Enter phone'
    //             name="phone"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //         />
    //     </div>
    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">Year</label>
    //         <select
    //             name="year"
    //             type="text"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //             value={data.year}
    //             onChange={handleChange}
    //         >
    //             <option value="" className='text-muted'>Select Year</option>
    //             <option value="2024">2024</option>
    //             <option value="2025">2025</option>
    //         </select>
    //     </div>

    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-semibold">Month</label>
    //         <select
    //             name="month"
    //             type="text"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //             value={data.month}
    //             onChange={handleChange}
    //         >
    //             <option value="" className='text-muted'>Select Month</option>
    //             <option value="January">January</option>
    //             <option value="February">February</option>
    //             <option value="March">March</option>
    //             <option value="April">April</option>
    //             <option value="May">May</option>
    //             <option value="June">June</option>
    //             <option value="July">July</option>
    //             <option value="August">August</option>
    //             <option value="September">September</option>
    //             <option value="October">October</option>
    //             <option value="November">November</option>
    //             <option value="December">December</option>
    //         </select>
    //     </div>

    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-semibold">Base Salery</label>
    //         <input
    //             onChange={takeOnlyNumbers}
    //             value={data.baseSalery}
    //             type="text"
    //             placeholder='Enter Base Salery'
    //             name="baseSalery"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //         />
    //     </div>
    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-semibold">HRA</label>
    //         <input
    //             onChange={takeOnlyNumbers}
    //             value={data.hra}
    //             type="text"
    //             placeholder='Enter HRA'
    //             name="hra"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //         />
    //     </div>

    //     <div>
    //         <label className="text-sm mb-2 block mt-4 font-semibold">Other Allowances</label>
    //         <input
    //             onChange={takeOnlyNumbers}
    //             value={data.otherAllowances}
    //             type="text"
    //             placeholder='Enter Other Allowances'
    //             name="otherAllowances"
    //             className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
    //         />
    //     </div>
    //     <div>

    //     </div>
    //     <div>

    //         <div className="mt-10 text-end mr-24">
    //             <button
    //                 type="button"
    //                 onClick={onClickSubmit}
    //                 className="min-w-[100px] py-2 px-2 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
    //             >Submit
    //             </button>
    //         </div>
    //     </div>
    // </div>
    //         </form>
    //     </div>)


}

export default Salery