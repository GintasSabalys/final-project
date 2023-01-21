import React from 'react'
import { useState } from 'react'

function VynilPage() {

  const a = 'info1'

  const b = 'info2'

  const [isA, setisA] = useState(false)

  const [isB, setisB] = useState(false)

  const changeTab = (value) => {
    if (value === 'A') {
      if (isB) {
        setisB(false)
      }
      setisA(true)
    }
    if (value === 'B') {
      if (isA) {
        setisA(false)
      }
      setisB(true)
    }

  }

  return (
    <>
    <div className='vynilPage'>
        <div className='content'>
          <img src="https://vinyloteka.lt/wp-content/uploads/2023/01/R-4016938-1352544210-8550.jpeg" alt="" />
        </div>
        <div className='menu'>menu</div>
    </div>
    <div>
      <button><div onClick={()=>changeTab('A')}>A</div></button>
      <button><div onClick={()=>changeTab('B')}>B</div></button>
    </div>
    {isA &&  <div>{a}</div>}
    {isB &&  <div>{b}</div>}
    </>
  )
}

export default VynilPage
