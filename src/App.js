import search from "./other/Group (3).svg"
import Card from "./components/card/Card"
import React, { useState } from "react"
import Header from "./components/Header"
import DrawerCach from "./components/DrawerCach"

function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [clickToBasket, setClickToBasket] = useState(false)


  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://64134dd1a68505ea732ff077.mockapi.io/items");
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);
 

  const addToCard = (item) => {
    setCartItems(prev => [...prev, item])
  }

  console.log(cartItems)
  return (
    <div className="wrapper clear">
     
       {clickToBasket && <DrawerCach items={cartItems} onClickClose={()=> setClickToBasket(false)}/>}
      <Header onClickCard={()=> setClickToBasket(true)}/>
      <div style={{width:'960px'}} className='d-flex align-center justify-between  mb-40 '>
        <h1>Все кроссовки</h1>
        <div className="search">
           <img src={search} alt='search'/>
           <input  placeholder="Поиск..."/>
        </div>
    </div>
      <div style={{width:'1000px', minHeight: "600px", marginLeft: '60px'}} className="d-flex flex-wrap">
        
           {
           items.map((obj,index) => (
            <Card  key={index}
            name={obj.name}
            prize={obj.prize}
            image={obj.image}
            onClickLike={()=> console.log("Выбрать то что нам надо")}
            onClickPlus={(item)=> addToCard(item)}
              />
           
           ))}
        </div>
    </div>
  );
}

export default App;
