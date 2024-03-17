import React, { useEffect, useState } from 'react'

const ListTablePaslon: React.FC = () => {

    const [paslon, setPaslon] = useState<any[]> ([])

    useEffect(() => {
        const getDataPaslon = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/v1/paslons")
                const data = await response.json()

                setPaslon(data)
            } catch (error) {
                throw error
            }
        }
        getDataPaslon()
    },[])
        


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

                {paslon && paslon.map((data, id) => {
                    return (
                        <tbody key={id}>
                            <tr>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{data.number}</td>
                                <td className='border px-6 py-3  border-gray-600' >
                                    <img src={data.image} className='w-78 h-94' alt="" />
                                </td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>{data.name}</td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>
                                    <ul className='list-disc'>
                                        <li>{data.vismis[0]}</li>
                                        <li>{data.vismis[1]}</li>
                                        <li>{data.vismis[2]}</li>
                                    </ul>
                                </td>
                                <td className='border lg:px-6 lg:py-3  border-gray-600'>
                                    <ul className='list-disc'>
                                        <li>{data.coalition[0]}</li>
                                        <li>{data.coalition[1]}</li>
                                        <li>{data.coalition[2]}</li>
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