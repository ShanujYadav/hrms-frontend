import React, { useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { FaArrowDown } from "react-icons/fa6";
import { IoIosPrint } from "react-icons/io";
import logo from '../../../assets/img/logo.png'


const SalerySlip = () => {
    const printRef = React.useRef()

    const [selectedYear, setSelectedYear] = useState()
    const [selectedMonth, setSelectedMonth] = useState()
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data)
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Salary Slip.pdf")
    }

    
    const handlePrint = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.autoPrint();
        window.open(pdf.output("bloburl"), "_blank");
    }





    return (

        <div className="container mx-auto p-3 items-center">
            <div className="p-2 mb-5 rounded-xl bg-white">
                <div className='my-1'>
                    <h3 className='block text-gray-700 text-md font-bold '>Salary Slip</h3>
                </div>
                <hr />
                <form >
                    <div className="grid sm:grid-cols-3 gap-y-7 gap-x-12">
                        <div>
                            <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">Select Year</label>
                            <select
                                name="leaveType"
                                type="text"
                                className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                            // value={data.leaveType}
                            // onChange={handleChange}
                            >
                                <option value="" className='text-muted'>Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm mb-2 block mt-4 font-medium text-gray-600">Select Month</label>
                            <select
                                name="leaveType"
                                type="text"
                                className="bg-white w-3/4 border-2 border-gray-400	 text-muted px-4 py-2 rounded-md outline-blue-500"
                            // value={data.leaveType}
                            // onChange={handleChange}
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
                    </div>
                </form>
            </div>


            <div className="p-2 mb-2 rounded-xl bg-white">
                <div className="my-1 flex justify-between items-center">
                    <h3 className="text-gray-700 text-md font-bold"></h3>

                    <div className="flex space-x-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                            onClick={handleDownloadPdf}
                        >
                            <FaArrowDown />
                        </button>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                            onClick={handlePrint}
                        >
                            <IoIosPrint />
                        </button>
                    </div>

                </div>
                <hr />


                <div className="w-full ">
                    <div className="p-4" ref={printRef}>
                        <div className="max-w-screen-md mx-auto p-4 bg-white">
                            <div className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <img src={logo} alt="Company Logo" className="h-10 w-30" />
                                    <p className="text-sm text-muted"></p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold"></h2>
                                    {/* <p className="text-sm text-gray-500 text-muted">934, Block-3, Spaze I tech park sector 49<br /> Sohna Road, Gurugram</p> */}
                                </div>
                            </div>
                            <div className='text-center my-2'>
                            <h2 className="text-lg font-bold">Salary Details for July-2024</h2>
                            </div>

                            <div className="mt-8">
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium">Employee Name:</p>
                                    <p className="text-sm">Shanuj Yadav</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-sm font-medium">Designation:</p>
                                    <p className="text-sm">Software Engineer</p>
                                </div>
                            </div>

                            <table className="min-w-full table-auto mt-6">
                                <thead className="bg-gray-200 w-full">
                                    <tr>
                                        <th className="text-left p-2 text-sm font-medium text-gray-600">PARTICULARS</th>
                                        <th className="p-2 text-center text-sm font-medium text-gray-600">AMOUNT</th>
                                        <th className=" p-2 text-sm text-right font-medium text-gray-600">NET AMOUNT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-2 text-sm text-gray-800">Basic Salary</td>
                                        <td className="p-2 text-sm text-center text-gray-800">2464,00</td>
                                        <td className="p-2 text-sm text-right text-green-500">1527,68</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-sm text-gray-800">HRA</td>
                                        <td className="p-2 text-sm text-center text-gray-800">80,00</td>
                                        <td className="p-2 text-sm text-right text-green-500">49,60</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-2 text-sm text-gray-800">Other Allowances</td>
                                        <td className="p-2 text-sm text-center text-gray-800">80,00</td>
                                        <td className="p-2 text-sm text-right text-green-500">49,60</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mt-6">
                                <div className="flex justify-between  pt-4">
                                    <h3 className="text-md font-semibold">Net Salary</h3>
                                    <p className="text-md font-bold">₹ 64,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >




        // <div className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden p-6">
        //     <div className="flex justify-between items-center mb-6">
        //         <div>
        //             <img src={logo} alt="Company Logo" className="h-8 w-30 mb-2" />
        //             <p className="text-sm text-gray-500">Altaneo Finance Pvt Ltd.<br />934, Block-3, Spaze I tech park <br />sector 49, Gurugram<br />122018</p>
        //             <p className="text-sm text-gray-500 mt-2">+91 9817741345<br />info@altaneofin.in</p>
        //         </div>
        //         <div className="text-right text-sm text-gray-500">
        //             <p>KvK: 33344555</p>
        //             <p>BTW: NL000099998B57</p>
        //             <p>Bank: NL 01 BANK 0043 5678 22</p>
        //         </div>
        //     </div>

        //     <div className="mb-6">
        //         <h2 className="text-2xl font-bold text-gray-800">Salary Slip <span className="text-blue-500">August 2024</span></h2>
        //         <p className="text-lg font-semibold text-gray-700 mt-2">Employee</p>
        //         <p className="text-md text-gray-800">J. Doe<br />Front-end developer</p>
        //     </div>

        //     <div className="overflow-x-auto">
        //         <table className="min-w-full table-auto">
        //             <thead className="bg-gray-200 w-full">
        //                 <tr>
        //                     <th className="text-left p-2 text-sm font-medium text-gray-600">PARTICULARS</th>
        //                     <th className="text-left p-2 text-sm font-medium text-gray-600">AMOUNT</th>
        //                     <th className="text-left p-2 text-sm font-medium text-gray-600">NET AMOUNT</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr className="border-b">
        //                     <td className="p-2 text-sm text-gray-800">Basic Salary</td>
        //                     <td className="p-2 text-sm text-gray-800">2464,00</td>
        //                     <td className="p-2 text-sm text-green-500">1527,68</td>
        //                 </tr>
        //                 <tr className="border-b">
        //                     <td className="p-2 text-sm text-gray-800">HRA</td>
        //                     <td className="p-2 text-sm text-gray-800">80,00</td>
        //                     <td className="p-2 text-sm text-green-500">49,60</td>
        //                 </tr>

        //                 <tr className="border-b">
        //                     <td className="p-2 text-sm text-gray-800 flex items-center justify-between">
        //                         <span>Other Allowances</span>
        //                         <button onClick={toggleDetails} className="text-gray-800 hover:text-gray-600">
        //                             {/* <svg
        //                         id="arrow-icon"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className={h-4 w-4 transform transition-transform duration-200 ${isDetailsVisible ? 'rotate-180' : ''}}
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor"
        //                     </button>
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        //                     </svg> */}
        //                         </button>
        //                     </td>
        //                     <td className="p-2 text-sm text-gray-800">187,00</td>
        //                     <td className="p-2 text-sm text-green-500">187,00</td>
        //                 </tr>

        //                 {isDetailsVisible && (
        //                     <tr id="allowances-details" className="border-b">
        //                         <td colSpan="3" className="p-2 text-sm text-gray-800">
        //                             <div className="pl-4">
        //                                 <p><strong>Allowance 1:</strong> 50,00</p>
        //                                 <p><strong>Allowance 2:</strong> 70,00</p>
        //                                 <p><strong>Allowance 3:</strong> 67,00</p>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 )}

        //                 <tr className="font-bold">
        //                     <td className="p-2 text-sm text-gray-800">Total</td>
        //                     <td className="p-2 text-sm text-gray-800">966,72</td>
        //                     <td className="p-2 text-sm text-green-500">1710,28</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}
export default SalerySlip;