import React, { useEffect, useState } from 'react'

const ArrowUp = () => {

  const [showBtn, setShowBtn] = useState(false)


  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY > 500){
        setShowBtn(true)
      }
      else{
        setShowBtn(false)
      }
    }

    window.addEventListener("scroll",handleScroll)

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div>
    {/* <h1>Heleo </h1> */}
      {showBtn && (
        <button 
          style={{position:'fixed', bottom: 20, right: 20, cursor:'pointer', fontSize:'20px', background:'transparent', border:'0'}}
          className="fa-solid fa-arrow-up" 
          onClick={handleClick}
        ></button>
      )}
    </div>
  )
}

export default ArrowUp
