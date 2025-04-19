import React from 'react'
import { useSelector } from 'react-redux'
import { HeroParallaxDemo } from '../components/Hero/Hero'

export default function Home() {
  const user = useSelector((state)=> state.user.accessToken)
  console.log(user)
  return (
    <div>    <HeroParallaxDemo /></div>

  )
}