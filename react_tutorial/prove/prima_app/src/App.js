// import Componente1 from "./Compinente1"
import Prodotto from "./Prodotto";
// import Eli from "./Eli";
import products from "./products";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Carrello prodotti</h3>
        {/* <Componente1/> */}
      </header>
      <section className="card-section">
        {products.map((prodotto) => {
          const {id} = prodotto
          return <Prodotto key={id} {...prodotto} />;
        })}
      </section>
    </div>
  );
}

export default App;
