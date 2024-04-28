import Image from "next/image"
import Link from "next/link"
import React from "react"
import LogoCompany from 'app/assets/logo/logo.svg'

interface Props {
  name?: string
}

const Logo = (props: Props) => {
  const { name } = props
  return (
    <Link href="/" className="flex w-fit items-end gap-1">
      <Image
        src={LogoCompany}
        alt="Logo"
        width={35}
        height={35}
        className="pointer-events-none w-7 md:w-9"
      />
      {(name != null) && (
        <span className="text-xl  font-bold leading-none  text-purple md:text-2xl">
          {name}
        </span>
      )}
    </Link>
  )
}

export default Logo
