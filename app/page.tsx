import React from 'react'
// import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>popular Companion</h1>
      <section className='home-section'>
          <CompanionCard
            id = "123"
            name= "Neura the Brainy Explorer"
            topic = "Neural network of the brain"
            subject='Bio'
            duration = {45}
            color ="#ffda6e"
          />
          <CompanionCard
            id = "456"
            name= "Countsy the numbe wiz"
            topic = "Derivatives and Integrals"
            subject='Math'
            duration = {30}
            color ="#e5d0ff"
          />
          <CompanionCard
            id = "789"
            name= "Verba the vocab builder"
            topic = "English lit"
            subject='English'
            duration = {45}
            color ="#BDE7FF"
          />

      </section>

      <section className='home-section'>
          <CompanionsList
              title = "Recently completed sessions"
              companions = {recentSessions}
              classNames = "w-2/3 max-lg:w-full"
          />
          <Cta/>
      </section>
    </main>
  )
}

export default Page