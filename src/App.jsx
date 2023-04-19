import "./App.css";
import Header from "./Header";
import OrderSummary from "./OrderSummary";
import ServicePlan from "./ServicePlan";
import Payment from "./Payment";

const App = () => {
  return (
    <div className="container">
      <Header />
      <OrderSummary />
      <ServicePlan />
      <Payment />
    </div>
  );
};

export default App;
