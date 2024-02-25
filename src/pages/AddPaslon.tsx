import React from 'react'
import AddPaslonForm from '../component/Admin/AddPaslonForm'
import AdminNavbar from '../component/Admin/AdminNavbar'

const AddPaslon:React.FC = () => {
  return (
    <div>
        <AdminNavbar/>
        <AddPaslonForm/>
    </div>
  )
}

export default AddPaslon