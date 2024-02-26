import React from 'react'
import AdminTableList from '../../lib/AdminTableList.json'

const SectionListVote:React.FC = () => {
  return (
    <div className='bg-grey h-713 flex  flex-col justify-center mx-auto lg:px-28 px-6'>
        <h1 className='text-bottomvote lg:text-5xl text-4xl font-black text-center'>LIST VOTER</h1>
        <table className='table-auto border-collapse mt-12 container lg:text-base text-xs mx-auto'>
            <thead>
                <tr>
                    <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>No</th>
                    <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Nama</th>
                    <th className='border lg:px-6 lg:py-3.5  border-gray-600 bg-table'>Alamat</th>
                    <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Jenis Kelamin</th>
                    <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Paslon</th>
                </tr>
            </thead>


            <tbody>
                    {AdminTableList && AdminTableList.map((admintable,index) => {
                        return (
                            <tr className='bg-white' key={index}>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{admintable.id}</td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{admintable.Nama}</td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{admintable.Alamat}</td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{admintable['Jenis Kelamin']}</td>
                                <td className='border lg:px-6 lg:py-3 text-blue-950 border-gray-600'>{admintable.Paslon}</td>
                            </tr>
                        )
                    })}
                  
            </tbody>
        </table>
        <p className='lg:text-xl text-lg font-bold mt-6 text-center'>TOTAL SUARA TERKUMPUL : 1000 Voters</p>
    </div>
  )
}

export default SectionListVote