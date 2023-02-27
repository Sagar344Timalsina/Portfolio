import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, Legend, Label, YAxis, CartesianGrid, Tooltip } from 'recharts'


const Education = () => {
    const pdata = [
        { name: 'SLC', GPA: 3.45 },
        { name: '+2', GPA: 3.42 },
        { name: '1st Sem', GPA: 3.60 },
        { name: '2nd Sem', GPA: 3.75 },
        { name: '3rd Sem', GPA: 3.93 },
        { name: '4th Sem', GPA: 3.89 },
        { name: '5th Sem', GPA: 3.83 },
        { name: '6th Sem', GPA: 3.87 },
    ]

    return (
        <div>
            <h1 className='text-2xl font-bold mt-3'>Education Background</h1>
            <ResponsiveContainer width="100%" aspect={2} >
                <LineChart data={pdata} width={300} height={300} margin={{ top: 20, left: 5, right: 12, bottom: 30 }} >
                    <Line dataKey="GPA" stroke="white" activeDot={{ r: 8 }} />
                    <Legend />
                    <Tooltip contentStyle={{ backgroundColor: 'gray' }} />
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis tick={{ stroke: 'white' }} fontSize="12px" dataKey="name" interval={'preserveStartEnd'} />
                    <YAxis tick={{ stroke: 'white' }}  >
                        <Label value=' GPA' angle={-90} position='center' fill='white' />
                    </YAxis>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Education