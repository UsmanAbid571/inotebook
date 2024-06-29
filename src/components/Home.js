import React from 'react'
import Notes from './notes'


function Home(props) {
  return (
    <div className="container">
      <Notes showAlert={props.showAlert} />
    </div>
  )
}

export default Home
