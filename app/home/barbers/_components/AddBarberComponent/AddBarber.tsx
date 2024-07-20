import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import React from "react"

type AddBarberProps = {
  children: React.ReactNode
}

const AddBarber = ({children}: AddBarberProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div>
          
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AddBarber