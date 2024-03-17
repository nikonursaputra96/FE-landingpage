import React, { useEffect } from 'react'
import { useState } from 'react'


const ListTablePartai: React.FC = () => {

    const [partai, setPartai] = useState<any[]> ([])

    useEffect(() => {
        const getDataPartai = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/partais')
                const data = await response.json()

                setPartai(data)
            } catch (error) {
                throw error
            }
        }
        getDataPartai()
    },[])

    

    return (
        <div className='container   overflow-x-auto'>
            <div className=''>
                <h1 className='text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24'>LIST PARTAI</h1>
                <div className='flex justify-center items-center  overflow-x-auto '>
                <table className='table-auto border-collapse mt-12 lg:text-base text-xs'>
                    <thead>
                        <tr>
                            <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>No.Urut</th>
                            <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Logo</th>
                            <th className='border lg:px-6 lg:py-3.5  border-gray-600 bg-table'>Ketua Umum</th>
                            <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Visi & Misi</th>
                            <th className='border lg:px-6 lg:py-3.5 border-gray-600 bg-table'>Alamat</th>
                        </tr>
                    </thead>

                    {partai && partai.map((data, id) => {
                        return (
                            <tbody key={id}>
                                <tr>
                                    <td className='border lg:px-6 lg:py-3 text-center border-gray-600'>{data.number}</td>
                                    <td className='border lg:px-6 lg:py-3  border-gray-600' >
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
                                    <td className='border lg:px-6 lg:py-3  border-gray-600'>{data.address}</td>
                                </tr>
                            </tbody>
                        )
                    })}


                </table>
                </div>
               
            </div>
        </div>
    )
}

export default ListTablePartai