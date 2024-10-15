import React, { useContext } from 'react'
import './Chart.css'
import { DashBoardContext } from '../../../context/DashBoardContext'
import { ProductContext } from '../../../context/ProductContext'
import TinyBarChart from './TinyBarChart'
import BasicLineChart from './BasicLineChart'

const Chart = () => {
    const {totalSale,users,admins,sellingProduct}=useContext(DashBoardContext)
    const {allProducts}=useContext(ProductContext)
    const adminid=JSON.parse(localStorage.getItem("id"))
    if(adminid!==1){return null}
    console.log(sellingProduct,"all selling product");
    const value=Object.values(sellingProduct)
    console.log(value,"vlaues");
    const totalQuantity=value.reduce((acc,x)=>acc+x,0)
    console.log(totalQuantity);
  return (<div className='flex flex-col gap-40'>
    <div className='chart-main-div' >
         <div className="total-sale">
          <div className="total-slaes-heading">Total Number of sale:</div>
          <div className="total-slaes-value">{totalQuantity}</div>
      </div>
      <div className="total-sale">
          <div className="total-slaes-heading">Total Sales Amount:</div>
          <div className="total-slaes-value">₹ {totalSale}</div>
      </div>
      <div className="total-sale">
          <div className="total-slaes-heading">Total Users:</div>
          <div className="total-slaes-value">{users}</div>
      </div>
      <div className="total-sale">
          <div className="total-slaes-heading">Total Admins:</div>
          <div className="total-slaes-value">{admins.length}</div>
      </div>
      <div className="total-sale">
          <div className="total-slaes-heading">Types in Stock:</div>
          <div className="total-slaes-value">{allProducts.length}</div>
      </div>
     
      <div className="total-saled-products"></div>
      {/* =================================================== */}
      
    </div>
    <div className="char-bars">
        <TinyBarChart/>
        <BasicLineChart/>
    </div>
    </div>
  )
}

export default Chart


