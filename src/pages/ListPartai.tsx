import React from 'react'
import ListTablePartai from '../component/Admin/ListTablePartai'
import AdminNavbar from '../component/Admin/AdminNavbar'

const ListPartai:React.FC = () => {
  return (
    <div>
        <AdminNavbar/>
        <ListTablePartai/>
    </div>
  )
}

export default ListPartai