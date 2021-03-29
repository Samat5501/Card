import React from 'react'
import s from './Card.module.css'

   export const Card = ({ data1, showTitle}) => {
        return (
            <div className={s.container}>
                {data1.map((item) => {
                    return (
                        <div className={s.card}>
                            <div className={s.title}>{item.title}</div>
                            <div className={s.count}>{item.count}</div>
                            <img src={item.img} onClick={() => showTitle(item)} className={s.img}/>
                        </div>
                    )
                })}
            </div>
        )
    }
