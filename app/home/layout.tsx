import React from "react"
import NavBar from "./_components/NavBar/NavBarComponent"

const Homelayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-main-black container mx-auto">
      <NavBar />
      {children}
    </div>
  )
}

export default Homelayout