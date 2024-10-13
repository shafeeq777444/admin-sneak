import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';

export const DashBoardContext = createContext();
export const DashBoardProvider=({children})=>{
    const [totalSale,setTotalSale]=useState(0) /* it have all users and all users dat */
    console.log("hello render");
    useEffect(()=>{
        const details = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/users`);
                const all=response.data;
                const users=all.filter(user=>user.order&&Array.isArray(user.order))
                // console.log(users,"checking");
                const totalSale=users.reduce((acc,user)=>{return acc+user.order.reduce((accs,sorder)=>{return accs+parseFloat(sorder.totalPrice)},0)},0)
            //    console.log(totalSale,"final");
                setTotalSale(totalSale)
                
               

            } catch (err) {
                console.log(err);
            }}
details();
    },[])

    
 
    return (
        <DashBoardContext.Provider
        value={{
            totalSale

        }}>{children}</DashBoardContext.Provider>
    )
}
