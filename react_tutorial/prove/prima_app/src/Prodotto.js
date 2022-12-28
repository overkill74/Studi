import React from 'react'


const Prodotto = ({costoFinale, nome, img, utente, puntata, children}) => {
  const handleClick = () => {
    console.log("Hai premuto: ");
  };

  // const paramsHandler = (prezzo) => {
  //   console.log(prezzo);
  // };

  const eventHandler = (price) => (e) => {
    console.log(e.target.innerText);
    console.log(price);
  };

  function componiPrezzo(valore) {
    return <>{valore} €</> 
  };

  return (
    <article>
      <div className='card'>
        <img src={img} alt={`${img}`} onClick={handleClick}/>
        <hr/>
        <p>{nome}</p>
        <p>{costoFinale} €</p>
        <p>{utente}</p>
        <p className='card-time'>{children}</p>
        <button onClick={() => alert(`nome: ${nome}`)}>{componiPrezzo(puntata)}</button>
        <button onClick={eventHandler(puntata)}>args</button>
      </div>
    </article>
  )
}

export default Prodotto
