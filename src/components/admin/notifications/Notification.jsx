import React, { useEffect, useState } from 'react'
import { ApiCaller } from '../../utils/ApiCaller';
import Modal from 'react-modal';

const Notification = () => {
  const [request, setRequest] = useState([])
  const [leaveReq, setLeaveReq] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [openRegModal, setOpenRegModal] = useState(false)

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

  let isMounted = true

  const LeaveNotification = async () => {
    let headers = {}
    let body = {}
    try {
      let response = await ApiCaller(body, headers, '/leave/reqleaveList')
      console.log('leaveList response----', response)
      if (response.statusCode === '000') {
        setLeaveReq(response.data)
      } else {
        setLeaveReq([])
      }
    } catch (e) {
      if (isMounted) {
      }
      console.log(e);
    }
  }




  const RegisterNotification = async () => {
    let headers = {};
    let body = {};
    try {
      let response = await ApiCaller(body, headers, '/emp/reqRegisterList');
      console.log('reqRegisterList----', response);
      if (isMounted && response.statusCode === '000') {
        setRequest(response.data)

      } else {
        setRequest([])
      }
    } catch (e) {
      if (isMounted) {
        setRequest([])
      }
      console.log(e);
    }
  }




  useEffect(() => {
    RegisterNotification()
    LeaveNotification()
    return () => {
      isMounted = false;
    }
  }, [])





  const onVerifyEmp = async (id) => {
    try {
      let headers = {
        "Content-Type": "Application/Json",
        "User-Agent": "AltaNeo",
      }
      let body = JSON.stringify({
        id: id
      })
      const response = await ApiCaller(body, headers, '/emp/approvedReq')
      console.log(response)
      if (response.statusCode == '000') {
        setOpenModal(true)
      }
    } catch (error) {
    }
  }




  const onApproveLeave = async () => {
    let id = leaveReq[0].applicantId
    let fromDate = leaveReq[0].fromDate
    let toDate = leaveReq[0].toDate
    let leaveType = leaveReq[0].leaveType
    let leaveDays = leaveReq[0].leaveDays

    let headers = {
      "Content-Type": "application/json",
    }

    let body = JSON.stringify({
      applicantId: id,
      fromDate: fromDate,
      toDate: toDate,
      leaveType: leaveType,
      leaveDays: leaveDays,
    })

    try {
      setOpenModal(false)
      let response = await ApiCaller(body, headers, '/leave/approvedLeave')
      console.log('approvedLeave response----', response)
      if (response.statusCode === '000') {
        setLeaveReq([])
      } else {
        setLeaveReq([]);
      }
    } catch (e) {
      if (isMounted) {
      }
      console.log(e)
    }
  }





  return (
    <>
      <div className="text-xl text-gray-800 font-bold mb-2 ml-4">Pending Requests</div>

      {!request || request.length == '0' ? (
        <>
        </>
      ) : request.map((req, index) => {
        return (
          <>
            <div key={index} class="relative h-50 mb-2 ml-5 mr-4 flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-blue-400 bg-clip-border   dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
              <div class="ml-[12px] h-[100px] w-full flex-row items-center overflow-auto">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th class="px-3 py-3 text-left leading-4 text-black-500 tracking-wider">Name</th>
                      <th class="px-3 py-3  text-left text-sm leading-4 text-black-500 tracking-wider">Email</th>
                      <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Phone</th>
                      <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Role</th>
                      <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr>
                      <td class="px-2 py-2 ">
                        <div class="flex items-center">
                          <div>
                            <div class="text-sm font-semibold leading-5 text-white">{req.name}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap ">
                        <div class="text-sm leading-5 font-semibold  text-white">{req.email}</div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap font-semibold  text-white  text-sm leading-5">{req.phone}
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap font-semibold text-white text-sm leading-5">{req.role}
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap text-blue-900 text-sm leading-5">
                        <button
                          onClick={() => setOpenModal(true)}
                          class="bg-white hover:bg-black text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                          Verify
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
      })}








      {!leaveReq || leaveReq.length == '0' ? (
        <>
        </>
      ) : leaveReq.map((req, index) => {
        return (
          <div key={index} class="relative h-50 mb-2 ml-5 mr-4 flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-blue-400 bg-clip-border   dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none ">
            <div class="ml-[12px] h-[100px] w-full flex-row items-center overflow-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="px-3 py-3 text-left leading-4 text-black-500 tracking-wider">Name</th>
                    <th class="px-3 py-3  text-left text-sm leading-4 text-black-500 tracking-wider">From Date</th>
                    <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">To Date</th>
                    <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Leave Type</th>
                    <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Leave Days</th>
                    <th class="px-3 py-3 text-left text-sm leading-4 text-black-500 tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr>
                    <td class="px-2 py-2 ">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm font-semibold leading-5 text-white">{req.applicantName}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-2 py-2 whitespace-no-wrap ">
                      <div class="text-sm leading-5 font-semibold  text-white">{req.fromDate}</div>
                    </td>
                    <td class="px-2 py-2 whitespace-no-wrap font-semibold  text-white  text-sm leading-5">{req.toDate}
                    </td>
                    <td class="px-2 py-2 whitespace-no-wrap font-semibold  text-white  text-sm leading-5">{req.leaveType}
                    </td>
                    <td class="px-2 py-2 whitespace-no-wrap font-semibold text-white text-sm leading-5">{req.leaveDays}
                    </td>
                    <td class="px-2 py-2 whitespace-no-wrap text-blue-900 text-sm leading-5">
                      <button
                        onClick={() => setOpenRegModal(true)}
                        class="bg-white hover:bg-black text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                        Approve
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      })}





      <div>
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
              <h1 class="text-xl font-bold text-gray-800 mb-4">Are you sure you want to Approve !</h1>
            </div>
            <button class="bg-white mx-2 text-red-500 border-2 border-gray-600 px-4 py-0.5 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => setOpenModal(false)}
            >
              Cancle
            </button>
            <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={onApproveLeave}
            >
              OK
            </button>
          </div>
        </Modal>



        <Modal
          isOpen={openRegModal}
          onRequestClose={setOpenRegModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div class="text-center p-6 bg-white rounded-lg ">
            <div class="flex items-center justify-center mb-4">
              <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-800 mb-4">Are you sure you want djnj</h1>
            </div>
            <button class="bg-white mx-2 text-red-500 border-2 border-gray-600 px-4 py-0.5 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => setOpenRegModal(false)}
            >
              Cancle
            </button>
            <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={onVerifyEmp}
            >
              OK
            </button>
          </div>
        </Modal>

      </div>
    </>
  )
}

export default Notification