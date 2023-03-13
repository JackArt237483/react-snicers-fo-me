import search from "./img/other/Group (3).svg"
import Card from "./components/card/Card"
import Header from "./components/Header"
import DrawerCach from "./components/DrawerCach"
import sneakers from "./img/imgCross/image 5 (1).png"
import sneakers1 from "./img/imgCross/image 5.png"
import sneakers2 from "./img/imgCross/image 5 (2).png"
import sneakers3 from "./img/imgCross/image 5 (3).png"

const arr = [
  {
   name:"Мужские Кроссовки Nike Blazer Mid Suede",
   prize: "12999", 
   image: sneakers
  },
  {
   name:"Мужские Кроссовки Nike Air Max 270", 
   prize: "12999",  
   image: sneakers1
  },
  {
   name:"Мужские Кроссовки Nike Blazer Mid Suede",
   prize: "8499", 
   image: sneakers2
  },
  {
   name:"Кроссовки Puma X Aka Boku Future Rider",
   prize: "8999",
   image: sneakers3
  }
];

function App() {
  return (
    <div className="wrapper clear"><DrawerCach/>  
      <Header/>
      <div style={{width:'960px'}}className='d-flex align-center justify-between  mb-40 '>
        <h1>Все кроссовки</h1>
        <div className="search">
           <img src={search} alt='search'/>
           <input  placeholder="Поиск..."/>
        </div>
    </div>
      <div style={{width:'960px', marginLeft: '60px'}} className="d-flex">
        
           {
           arr.map((obj,index) => (
            <Card  key={index}
            name={obj.name}
            prize={obj.prize}
            imageUrl={obj.image}
            onclicker={()=> console.log(obj) }
              />
           
           ))}
        </div>
    </div>
  );
}

export default App;
