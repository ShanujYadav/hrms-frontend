import React, { useEffect, useState } from 'react';
import { ApiCaller } from '../../utils/ApiCaller';
import { LuPencil } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const EmployeeList = () => {
    const navigate=useNavigate()
    const email = sessionStorage.getItem('email')
    const user = sessionStorage.getItem('user')
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        if (!email || !user ) {
          navigate('/')
          toast.error('Please Login First')
        }
      }, [])


    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            setEmployee([])
            let headers = {};
            let body = {};
            try {
                let response = await ApiCaller(body, headers, '/emp/empList')
                console.log('empList response----', response)
                if (isMounted && response.statusCode === '000') {
                    setEmployee(response.data);
                } else {
                    setEmployee([]);
                }
            } catch (e) {
                if (isMounted) {
                    setEmployee([]);
                }
                console.log(e);
            }
        }
        fetchData()
        return () => {
            isMounted = false;
        }
    }, [])


    return (
        <>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name/Email</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phone</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Education</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        {employee.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-4 py-3 text-center text-sm">
                                    No employees found.
                                </td>
                            </tr>
                        ) : (
                            employee.map((emp, index) => (
                                <tr key={index} class="hover:bg-gray-200">
                                    <th class="flex gap-3 px-6 py-3 font-normal text-gray-900">
                                        <div class="relative h-10 w-10">
                                            <img
                                                class="h-full w-full rounded-full object-cover object-center"
                                                src={emp.img}
                                                alt=""
                                            />
                                            {/* <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                                        </div>
                                        <div class="text-sm">
                                            <div class="font-medium text-gray-700">{emp.name}</div>
                                            <div class="text-gray-400">
                                                <span
                                                    class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                                    {emp.email}
                                                </span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        {emp.phone}
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                            {emp.role}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4">
                                        {emp.education}
                                    </td>
                                    <td class="px-6">
                                        <div class="flex justify-end gap-6">
                                            <a>
                                                <MdDelete size={20} color='#F6685B' />
                                            </a>
                                            <a>
                                                <LuPencil size={20} color='#787FF1' />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeeList