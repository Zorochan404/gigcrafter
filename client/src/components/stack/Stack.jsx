import React from 'react'
import "./stack.scss"
import react from "../../assets/react.jpg"
import node from "../../assets/node.jpg"
import express from "../../assets/express.jpg"
import figma from "../../assets/figma.jpg"
import mongodb from "../../assets/mongodb.jpg"


export default function Stack() {
  return (
    <div className='stack'>
        <div className="section">
            <div className="row-layout">
                <h6>Mongodb</h6>
                <img src={mongodb}/>
            <div className="column-layout">
                <h6>Expressjs</h6>
                <img src={express}/>
            </div>
            </div>
        </div>
    </div>
  )
}
