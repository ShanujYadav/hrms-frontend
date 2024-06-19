import React, { useState } from 'react'
import { HiOutlineUsers } from "react-icons/hi"
import { GoHome } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



const AdminSidebar = (props) => {
  const navigate = useNavigate()
  // console.log('location-----',window.location.pathname)
  const [activeTab, setActiveTab] = useState('/adminDashboard')
  const onClickTab = (path) => {
    props.setCurrentTab(path)
    setActiveTab(path)
    navigate(path)
  }

  
  return (
    <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-stone-800 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5 hidden md:block">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-bold tracking-wide text-white uppercase">Main</div>
            </div>
          </li>
          <li>
            <a
              onClick={() => onClickTab('/adminDashboard')}
              class={`${activeTab=='/adminDasboard' ? 'bg-blue-800':''}  relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
              <span class="inline-flex justify-center items-center ml-4">
                <GoHome size={20} />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => onClickTab('employees')}
              class={`${activeTab=='employees' ? 'bg-blue-800':''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
              <span class="inline-flex justify-center items-center ml-4">
                <HiOutlineUsers size={20} />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Employees</span>
            </a>
          </li>
          <li>
            <a 
              onClick={() => onClickTab('notifications')}
              class={`${activeTab=='notifications' ? 'bg-blue-800':''} relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6`}>
              <span class="inline-flex justify-center items-center ml-4">
                <IoMdNotifications size={20} />
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Notifications</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar