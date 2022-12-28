import React from 'react'

const alt = "Buono carburante"
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7191.jpg"
const desc = "50€ Carburante +120P"
const prezzo = "0.13"
const utente = "piccolo123"
const puntata = "10,00€"

function Prodotto() {
  return (
    <article>
        <div className='card'>
            <img src={img} alt={alt} />
            <br/>
            <h6>{desc}</h6>
            <p>{prezzo * 2}€</p>
            <p className='nome-utente'>{utente.toLocaleUpperCase()}</p>
            <br/>
            <button>{puntata}</button>
        </div>
    </article>
  )
}

export default Prodotto
