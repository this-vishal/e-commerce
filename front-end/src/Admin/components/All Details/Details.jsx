import React from 'react'
import './Details.css';
export default function Details() {


    const data = [
        {
            title: 'Total Users',
            count: '45856',
        },
        {
            title: 'Total Product',
            count: '74585',
        },
        {
            title: 'Total Sell',
            count: '5856',
        },

    ]

    return (
        <>
                <div className='main-container'>

                {
                data.map((item, index) => {
                    return (
                        <>
                            <div className='d-container card' id={index}>

                                <h2>{item.title}</h2>
                                <h1>{item.count}</h1>

                            </div>
                        </>
                    )
                })
            }


                </div>

        </>
    )
}
