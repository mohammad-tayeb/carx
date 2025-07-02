import Link from 'next/link'
import React from 'react'

export default function Button({title,link}) {
  return (
    <Link href={`/${link? link: 'login'}`} className="btn bg-[#41bce8] text-white">{title? title: 'Login'}</Link>
  )
}
