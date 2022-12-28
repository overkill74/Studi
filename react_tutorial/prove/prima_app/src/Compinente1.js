import React from 'react'

const Compinente1 = () => {
  return (
    <React.Fragment>
        <Saluto/>
        <Saluto/>
        <Saluto/>
    </React.Fragment>
  )
}

const Persona = () => {
    return <h2>Sono: Ivan</h2>
}

const Messaggio = () => {
    return <h3>e ti dico ciao</h3>
}

const Saluto = () => {
    return <React.Fragment>
        <Persona/>
        <Messaggio/>
    </React.Fragment>
}

export default Compinente1
