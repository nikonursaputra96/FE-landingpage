import React from 'react'
import ListPaslon from '../../lib/ListPaslon.json'

const ListTablePaslon: React.FC = () => {
    return (
        <div className='flex flex-col items-center  overflow-x-auto '>
            <h1 className='text-bottomvote text-5xl font-black text-center mt-24'>LIST PASLON</h1>
            <table className='table-auto border-collapse mt-12 lg:text-base text-xs '>
                <thead>
                    <tr>
                        <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>No</th>
                        <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Image</th>
                        <th className='border lg:px-6 lg:py-3.5  border-gray-600 bg-table'>Nama</th>
                        <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Visi & Misi</th>
                        <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Koalisi</th>
                    </tr>
                </thead>

                {ListPaslon && ListPaslon.map((listpaslon, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>1</td>
                                <td className='border px-6 py-3  border-gray-600' >
                                    <img src={listpaslon.image} className='w-78 h-94' alt="" />
                                </td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{listpaslon.name}</td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>
                                    <ul className='list-disc'>
                                        <li>{listpaslon.vismis[0]}</li>
                                        <li>{listpaslon.vismis[1]}</li>
                                        <li>{listpaslon.vismis[2]}</li>
                                    </ul>
                                </td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>
                                    <ul className='list-disc'>
                                        <li>{listpaslon.Koalisi[0]}</li>
                                        <li>{listpaslon.Koalisi[1]}</li>
                                        <li>{listpaslon.Koalisi[2]}</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}

export default ListTablePaslon