import React from 'react'
import ListTablePaslon from '../component/Admin/ListTablePaslon'
import AdminNavbar from '../component/Admin/AdminNavbar'

const ListPaslon:React.FC = () => {
  return (
    <div>
        <AdminNavbar/>
        <ListTablePaslon/>
    </div>
  )
}

export default ListPaslon