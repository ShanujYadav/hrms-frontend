import React, { useState } from 'react'
import { HiOutlineUsers } from "react-icons/hi"
import { GoHome } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa"
import { RiUserShared2Fill } from "react-icons/ri";




const EmpSidebar = (props) => {

    const navigate = useNavigate()
    // console.log('location-----',window.location.pathname)
    const [activeTab, setActiveTab] = useState('/adminDasboard')
    const onClickTab = (path) => {
        props.setCurrentTab(path)
        setActiveTab(path)
        navigate(path)
    }

    return (
        <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul class="flex flex-col py-4 space-y-1">
                    <li class="px-5 hidden md:block">
                    </li>
                    <li>
                        <a
                            onClick={() => onClickTab('/empDashboard')}
                            class={`${activeTab == '/adminDasboard' ? 'bg-blue-200' : ''}  relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <GoHome size={20} color='black' />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => onClickTab('leave')}
                            class={`${activeTab == 'employees' ? 'bg-blue-200' : ''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                < RiUserShared2Fill size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Leave</span>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => onClickTab('profile')}
                            class={`${activeTab == 'notifications' ? 'bg-blue-200' : ''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <FaRegUser size={20} />

                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => onClickTab('profile')}
                            class={`${activeTab == 'notifications' ? 'bg-blue-200' : ''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                {/* <FiLogOut size={20}/> */}
                                <AiOutlineLogout size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default EmpSidebar