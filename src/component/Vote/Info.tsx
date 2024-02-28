
import Votes from '../../interfaces/Vote'

const Info = (info:Votes) => {
    return (
        <div className=' bg-grey '>
            <div>
                <h1 className='lg:text-5xl text-4xl font-bold text-yellowdark text-center pt-12 mt-28 mb-16'>INFO PASLON</h1>
            </div>
            <div className='flex justify-center items-center mb-20 px-6'>
                <button className=' lg:ml-24 lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-white lg:text-3xl text-center gap-0 text-gray-400'>&lt;</button>

        
                        <div className='bg-white lg:w-947 lg:h-494 w-[450px] lg:flex mx-auto rounded-xl shadow-lg shadow-gray-500 '>
                            <img src={info.image} alt="" className='w-246 h-328 mt-10 mx-auto mb-10' />
                            <div className=' ml-3.5'>
                                    <div className='leading-tight mt-7'>
                                        <p className='lg:text-2xl text-xl font-bold'>Nomor Urut:{info.nomor}</p>
                                        <p className='lg:text-4xl text-3xl font-bold text-reddark-2'>{info.name}</p>
                                    </div>
                                    <p className='lg:text-2xl text-xl mt-4'>Visi & Misi :</p>
                                    <ul className='list-disc lg:text-2xl text-xl ml-8 leading-tight'>
                                        <li>
                                            {info.vismis[0]}
                                        </li>
                                        <li>
                                            {info.vismis[1]}
                                        </li>
                                        <li>
                                            {info.vismis[2]}
                                        </li>
                                    </ul>
                                    <p className='lg:text-2xl text-xl mt-4'>Koalisi :</p>
                                    <ul className='list-disc lg:text-2xl text-xl ml-8 pb-10 leading-tight'>
                                        <li>
                                            {info.koalisi[0]}
                                        </li>
                                        <li>
                                            {info.koalisi[1]}
                                        </li>
                                        <li>
                                            {info.koalisi[2]}
                                        </li>
                                    </ul>
                            </div>
                        </div>
       

                <button className=' lg:ml-24 lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-white lg:text-3xl text-center gap-0 text-gray-400'>&gt;</button>
            </div>

            <aside className='bg-white h-384 mt-16 flex'>
                <p className=' font-bold lg:text-41 text-3xl text-center flex justify-center items-center text-red'>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</p>
            </aside>


        </div>
    )
}

export default Info