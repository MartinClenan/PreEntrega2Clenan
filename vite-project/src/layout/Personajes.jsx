import React from 'react'
import UserCardContainer from '../UserCardContainer'

function Personajes() {
  return (
    <div>
        <h2>Personajes</h2>
        <section className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <UserCardContainer/>
        </section>
    </div>
  )
}

export default Personajes