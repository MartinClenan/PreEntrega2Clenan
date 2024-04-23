import React from 'react'

function Page(props) {
    console.log(props);
  return (
    <main className="p-4 grow">
      <h2 className="font-bold text-2xl mb-4">{props.title}</h2> 
        {props.children}
    </main>
  )
}

export default Page