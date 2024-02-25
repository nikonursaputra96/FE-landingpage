import React from 'react'
import AdminNavbar from '../component/Admin/AdminNavbar'
import SectionAdmin from '../component/Admin/SectionAdmin'
import SectionListVote from '../component/Admin/SectionListVote'

const Admin:React.FC = () => {
  return (
    <div>
        <AdminNavbar/>
        <SectionAdmin/>
        <SectionListVote/>
        
    </div>
  )
}

export default Admin