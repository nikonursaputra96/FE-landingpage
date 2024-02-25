import React from 'react'
import ListPartai from '../../lib/ListPartai.json'


const ListTablePartai: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-bottomvote text-5xl font-black text-center mt-24'>LIST PARTAI</h1>
                <table className='table-auto border-collapse mt-12 text-sm'>
                    <thead>
                        <tr>
                            <th className='border px-6 py-3.5 border-gray-600 bg-table'>No.Urut</th>
                            <th className='border px-6 py-3.5 border-gray-600 bg-table'>Logo</th>
                            <th className='border px-6 py-3.5  border-gray-600 bg-table'>Ketua Umum</th>
                            <th className='border px-6 py-3.5 border-gray-600 bg-table'>Visi & Misi</th>
                            <th className='border px-6 py-3.5 border-gray-600 bg-table'>Alamat</th>
                        </tr>
                    </thead>

                    {ListPartai && ListPartai.map((listpartai, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td className='border px-6 py-3 text-center border-gray-600'>{listpartai.nomor}</td>
                                    <td className='border px-6 py-3  border-gray-600' >
                                        <img src={listpartai.image} className='w-78 h-94' alt="" />
                                    </td>
                                    <td className='border px-6 py-3  border-gray-600'>{listpartai.name}</td>
                                    <td className='border px-6 py-3  border-gray-600'>
                                        <ul className='list-disc'>
                                            <li>{listpartai.vismis[0]}</li>
                                            <li>{listpartai.vismis[1]}</li>
                                            <li>{listpartai.vismis[2]}</li>
                                        </ul>
                                    </td>
                                    <td className='border px-6 py-3  border-gray-600'>{listpartai.alamat}</td>
                                </tr>
                            </tbody>
                        )
                    })}


                </table>
            </div>
        </div>
    )
}

export default ListTablePartai