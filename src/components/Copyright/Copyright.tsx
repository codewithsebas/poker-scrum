import Link from "next/link"
import React from "react"

const Copyright = () => {
  const currentYear = new Date().getFullYear()
  return (
    <p className="text-center text-sm text-black px-3">
      Desarrollado por {" "} 
      <b>
        <Link className="text-black" href="https://portfolio-dinamic.vercel.app/">[ Sebastián Giraldo ]</Link>
      </b>{" "} - {" "}
      
      {currentYear} 
    </p>
  )
}

export default Copyright
