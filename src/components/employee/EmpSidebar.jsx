import React, { useState } from 'react'
import { HiOutlineUsers } from "react-icons/hi"
import { GoHome } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa"
import { RiUserShared2Fill } from "react-icons/ri";
import Modal from 'react-modal';



const EmpSidebar = (props) => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

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
                            onClick={() => setOpenModal(true)}
                            class={`${activeTab == 'notifications' ? 'bg-blue-200' : ''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
                            <span class="inline-flex justify-center items-center ml-4">
                                <AiOutlineLogout size={20} />
                            </span>
                            <span class="ml-2 text-sm font-semibold tracking-wide truncate">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

            <Modal
                isOpen={openModal}
                onRequestClose={setOpenModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div class="text-center p-6 bg-white rounded-lg ">
                    <div class="flex items-center justify-center mb-4">
                        <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-gray-800 mb-4">Are You Sure want to Logout !</h1>
                    </div>
                    <button class="bg-white mx-2 text-red-500 border-2 border-gray-600 px-4 py-0.5 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => setOpenModal(false)}
                    >
                        Cancle
                    </button>
                    <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={()=>navigate('/')}
                    >
                        OK
                    </button>
                </div>
            </Modal>

        </div >
    )
}

export default EmpSidebar