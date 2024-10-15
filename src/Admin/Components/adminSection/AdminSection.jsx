import React, { useContext } from 'react'
import './AdminSection.css'
import { DashBoardContext } from '../../../context/DashBoardContext'

const AdminSection = () => {
    const {admins,handleAdminLogout}=useContext(DashBoardContext)
    const adminDetails=JSON.parse(sessionStorage.getItem("admin"))
console.log(adminDetails);
  return (<div className='user-section-main-div'>
    <div className="admin-table">
    {/* <h1 className='admins-head'>ADMINS</h1> */}
      <table>
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, ind) => (
            <tr key={ind}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='admin-section'>
        <img className='admin-section-img' src='/assets/extra/Admin.png'></img>
     <loged-admin-details>
         <div className="loged-Admin-name">
           Name: {adminDetails.name}
         </div>
         <div className="loged-Admin-email">
           Email: {adminDetails.email}
         </div>
         <div className="loged-Admin-email">
            Role: {adminDetails.role}
         </div>
     </loged-admin-details>
     <button onClick={handleAdminLogout} className='admin-btn'>Logout</button>
    </div>
    </div>
  )
}

export default AdminSection
