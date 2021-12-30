import Navbar from "./Navbar";
import GridImage from "./HeroComponent";
import Card from "./Card";
import Data from "./Data";
import "./App.css";

function App() {

  const data = Data.map(item => <Card 
                                  key={item.id}
                                  {...item}
                                  /* title={item.title}
                                  price={item.price}
                                  src={item.coverImg}
                                  rating={item.stats.rating}
                                  reviewCount={item.stats.reviewCount}
                                  location={item.location}
                                  openSpots={item.openSpots} */
                                />)

  return (
    <div className="App">
      <Navbar />
      <GridImage />
      <div className="card-container">
        {/* <Card
          src="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="India"
          title="Life lessons with Katie Zaferes"
          price={136}
        /> */}
        {data}
      </div>
    </div>
  );
}

export default App;
