import search from "./img/other/Group (3).svg"
//import vector from "./img/other/Vector (21).svg"
//import sniker1 from "./img/imgCross/image 5.png"
//import sniker2 from "./img/imgCross/image 5 (2).png"
//import sniker3 from "./img/imgCross/image 5 (3).png"
import Card from "./components/Card"
import Header from "./components/Header"
import DrawerCach from "./components/DrawerCach"

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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  );
}

export default App;
