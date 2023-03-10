import logo from "./img/logo.png"
import point from "./img/point.svg"
import man from "./img/man.svg"
import cach from "./img/Union.svg"
import vector from "./img/Vector (21).svg"
import sniker from "./img/imgCross/image 5 (1).png"
import sniker1 from "./img/imgCross/image 5.png"
import sniker2 from "./img/imgCross/image 5 (2).png"
import sniker3 from "./img/imgCross/image 5 (3).png"

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
         <div className='d-flex align-center'>
          <img style={{width:"40px"}} src={logo} alt="logo"/>
          <div className='items'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
         </div>
         <ul className="d-flex align-center">
          <li className="mr-30">
          <img src={point} alt="logo"/>
            <span>1205 руб.</span>
            </li> 
          <li>
          <img  className="mr-30" src={man} alt="logo"/>
          <img src={cach} alt="logo"/>
          </li>
         </ul>
      </header>
      <div className='mt-40 '>
        <h1 className="mb-40">Все кроссовки</h1>
      <div style={{width:'960px', marginLeft: '60px'}} className="d-flex">

        <div className="card">
          <img width={133} height={112} src={sniker} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб</b>
              </div>
              <button className="button">
              <img width={11} height={11} src={vector} alt=""/>
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={sniker1} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб</b>
              </div>
              <button className="button">
              <img width={11} height={11} src={vector} alt=""/>
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={sniker2} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб</b>
              </div>
              <button className="button">
              <img width={11} height={11} src={vector} alt=""/>
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={sniker3} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб</b>
              </div>
              <button className="button">
              <img width={11} height={11} src={vector} alt=""/>
              </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
