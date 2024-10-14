import React, { useContext } from 'react'
import './Chart.css'
import { DashBoardContext } from '../../../context/DashBoardContext'
const Chart = () => {
    const {totalSale}=useContext(DashBoardContext)
    const adminid=JSON.parse(localStorage.getItem("id"))
    if(adminid!==1){return null}
  return (
    <div className='chart-main-div' >
      <div className="total-sale">
          <div className="total-slaes-heading">Total sales:</div>
          <div className="total-slaes-value">{totalSale}</div>
      </div>
      <div className="total-saled-products"></div>
    </div>
  )
}

export default Chart
