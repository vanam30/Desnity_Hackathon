
import Graph from "./components/Graph";
import Portfolio from "./components/Portfolio";
import Tform from "./components/Tform";
import OrderBook from "./components/OrderBook";
import Navbar from "./components/Navbar";
import Stocks from "./components/stocks"

function App() {
  return (
    <>
      <Navbar />
      <div className="row first-row-upper">
        <div className="col-8 graph-stock"><Stocks /></div>
        <div className="col-4 buy-sell-section"><Tform /></div>
      </div>
      <div className="row">
        <div className="col-4"><Portfolio /></div>
        <div className="col-8"><OrderBook /></div>
      </div>
    </>
  );
}

export default App;
