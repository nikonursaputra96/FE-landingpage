import React from 'react'
import AdminTableList from '../../lib/AdminTableList.json'

const SectionListVote:React.FC = () => {
  return (
    <div className='bg-grey h-713 flex  flex-col justify-center mx-auto px-28'>
        <h1 className='text-bottomvote text-5xl font-black text-center'>LIST VOTER</h1>
        <table className='table-auto border-collapse mt-12'>
            <thead>
                <tr>
                    <th className='border px-6 py-3.5 border-gray-600 bg-table'>No</th>
                    <th className='border px-6 py-3.5 border-gray-600 bg-table'>Nama</th>
                    <th className='border px-6 py-3.5  border-gray-600 bg-table'>Alamat</th>
                    <th className='border px-6 py-3.5 border-gray-600 bg-table'>Jenis Kelamin</th>
                    <th className='border px-6 py-3.5 border-gray-600 bg-table'>Paslon</th>
                </tr>
            </thead>


            <tbody>
                    {AdminTableList && AdminTableList.map((admintable,index) => {
                        return (
                            <tr className='bg-white' key={index}>
                                <td className='border px-6 py-3  border-gray-600'>{admintable.id}</td>
                                <td className='border px-6 py-3  border-gray-600'>{admintable.Nama}</td>
                                <td className='border px-6 py-3  border-gray-600'>{admintable.Alamat}</td>
                                <td className='border px-6 py-3  border-gray-600'>{admintable['Jenis Kelamin']}</td>
                                <td className='border px-6 py-3 text-blue-950 border-gray-600'>{admintable.Paslon}</td>
                            </tr>
                        )
                    })}
                  
            </tbody>
        </table>
        <p className='text-xl font-bold mt-6'>TOTAL SUARA TERKUMPUL : 1000 Voters</p>
    </div>
  )
}

export default SectionListVote