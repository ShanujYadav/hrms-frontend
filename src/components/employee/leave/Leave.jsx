import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ApiCaller } from '../../utils/ApiCaller';

const Leave = () => {
  const id = sessionStorage.getItem('id')
  const name = sessionStorage.getItem('name')
  const accessToken = sessionStorage.getItem('accessToken')

  const [data, setData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    leaveDays: '',
  })

  const [leaveStatus, setLeaveStatus] = useState({
    status: '',
    fromDate: '',
    toDate: '',
    leaveDays: '',
    leaveType: '',
  })


  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  useState(() => {
    if (!name || !id || !accessToken) {
      toast.error('Please Login First')
    }
  }, [])


  const onClickSubmit = async () => {
    if (!data.leaveType || !data.fromDate || !data.toDate) {
      toast.error('Fill all Feilds !')
      return
    }
    if (!name || !id) {
      toast.error('Please Login First')
      return
    }
    const toDate = new Date(data.toDate);
    const fromDate = new Date(data.fromDate);
    let timeDiff = toDate - fromDate
    let diffDays = timeDiff / (1000 * 3600 * 24)
    if (diffDays < 0) {
      toast.error('Invalied Date !')
      return
    }
    else {
      let noOfDays = diffDays + 1
      let headers = {
        "Content-Type": "application/json",
        "accessToken": accessToken,
        "userAgent": "altaNeo"
      }

      let body = JSON.stringify({
        applicantName: name,
        applicantId: id,
        fromDate: data.fromDate,
        toDate: data.toDate,
        leaveType: data.leaveType,
        leaveDays: noOfDays,
      })
      let response = await ApiCaller(body, headers, '/leave/reqForLeave')
      console.log('response----', response)
      if (response.statusCode == '000') {
        toast.success(response.message)
      }
      else (
        toast.error(response.message)
      )
    }

  }



  const fetchApplicationStatus = async () => {
    let headers = {
      "Content-Type": "application/json",
      "accessToken": accessToken,
      "userAgent": "altaNeo"
    }
    let body = JSON.stringify({
      applicantId: id,
    })
    let response = await ApiCaller(body, headers, '/leave/leaveStatus')
    console.log('leaveStatus----', response)
    if (response.statusCode == '000') {
      setLeaveStatus({
        ...leaveStatus,
        status: response.data.applicationStatus,
        fromDate: response.data.fromDate,
        toDate: response.data.toDate,
        leaveType: response.data.leaveType,
        leaveDays: response.data.leaveDays,
      })
    }
  }

  useEffect(() => {
    fetchApplicationStatus()
  }, [])


  return (
    <div className="container mx-auto p-3">
      <div className="p-4 mb-5 rounded-xl bg-white">
        <div className='my-3'>
          <h3 className='block text-gray-700 text-sm font-bold '>Apply For Leave</h3>
        </div>
        <hr />
        <form >
          <div className="grid sm:grid-cols-3 gap-y-7 gap-x-12">
            <div>
              <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">From Date</label>
              <input
                name="fromDate"
                type="date"
                className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                placeholder="Enter name"
                value={data.fromDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">To Date</label>
              <input
                name="toDate"
                type="date"
                className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                placeholder="Enter name"
                value={data.toDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm mb-2 block mt-4 font-semibold">Leave Type</label>
              <select
                name="leaveType"
                type="text"
                className="bg-white w-full border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                value={data.leaveType}
                onChange={handleChange}>
                <option value="" className='text-muted'>Select Type</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Paid Leave">Paid Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Extra Ordinary Leave">Extra Ordinary Leave</option>
              </select>
              <div className="mt-10 text-end">
                <button
                  type="button"
                  onClick={onClickSubmit}
                  className="min-w-[100px] py-2 px-2 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                >Apply
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>


      {leaveStatus.status != '' && (
        <div className='mt-5 rounded-xl bg-white pb-2'>
          <h3 className='block text-gray-700 text-sm font-bold p-3'>Leave Application</h3>
          <hr />
          <div >
            <div class="relative h-50 my-4 ml-5 mr-4 flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200  bg-blue-200   dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none ">
              <div class="ml-[12px] h-[100px] w-full flex-row items-center overflow-hidden">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th class="text-sm mb-2 text-left mt-4 font-medium text-black-500 py-3 px-2">From Date</th>
                      <th class="text-sm mb-2 text-left mt-4 font-medium text-black-500 px-2">From Date</th>
                      <th class="text-sm mb-2 text-left mt-4 font-medium text-black-500 px-2">Leave Type</th>
                      <th class="text-sm mb-2 text-left mt-4 font-medium text-black-500 px-2">Days</th>
                      <th class="text-sm mb-2 text-left mt-4 font-medium text-black-500 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr>
                      <td class="px-2 py-2">
                        <div class="flex items-center">
                          <div>
                            <div class="text-sm leading-5 font-medium text-gray-600">{leaveStatus.fromDate}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap ">
                        <div class="text-sm leading-5 font-medium text-gray-600">{leaveStatus.toDate}</div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap font-medium text-gray-600  text-sm leading-5">{leaveStatus.leaveType}
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap font-medium text-gray-600 text-sm leading-5">{leaveStatus.leaveDays}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        {leaveStatus.status == 'Success' ? (
                          <div class="inline-flex items-center px-2 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                            <h2 class="text-sm font-medium">Success</h2>
                          </div>
                        ) : (
                          <div class="inline-flex items-center px-2 py-1 text-blue-500 rounded-full gap-x-2 bg-blue-100/60 dark:bg-gray-800">
                            <h2 class="text-sm font-medium">Pending</h2>
                          </div>
                        )
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
      }


      <div>
        {/* <Modal
            isOpen={openModal}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal">
            <div class="text-center p-6 bg-white rounded-lg ">
                <div class="flex items-center justify-center mb-4">
                    <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-gray-800 mb-4">Request Sent Successfully !</h1>
                </div>
                <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={onCloseModal}
                >
                    OK
                </button>
            </div>
        </Modal> */}
      </div>

    </div>
  )
}

export default Leave