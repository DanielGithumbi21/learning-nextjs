import React from 'react'

const Covid = ({covid}) => {
    return (
        <div>
            {
                covid.map((data) => (
                    <h1 key={data.confirmed}>{data.confirmed}</h1>
                ))
            }
        </div>
    )
}
export async function getStaticProps () {
    const response = await fetch ("https://covid19.mathdro.id/api")
    const data = response.json ()
    console.log(data)
    return{
        props: {
            covid:data
        }
    }
    
}


export default Covid;

