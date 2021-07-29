import React from 'react'

const Salom=[
    {name:"Ibrohim"},
    {name:"dfsd"},
    {name:"Jack"},
    {name:"Bezos"}

]


export const Map = () => {
    return (
        <div>
            {Salom.map((v,i)=>{
                <h1>{v.name}</h1>
            })}
            
        </div>
    )
}

export default Map;
