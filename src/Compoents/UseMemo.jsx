import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [no, setNo] = useState(0)
    const Counter=useMemo(()=>{
        return no*2
    })
  return (
    <div>
      <h1>{no}</h1>
      <h2>{Counter}</h2>
      <button onClick={() => setNo(no + 1)}>ClickMe</button>
    </div>
  )
}

export default UseMemo
