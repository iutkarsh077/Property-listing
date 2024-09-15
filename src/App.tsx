import Breadcrumb from "./components/Breadcrumb";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import TabMenu from "./components/TabMenu";

const App = () => {
  return (
    <div className="mx-[10%] my-8 space-y-6">
      <Navbar />
      <Breadcrumb />
      <h1 className="text-3xl font-bold mx-10">Oceanfront ~ Newport Whale Watch ~ Single Story Home ~ W/Hot Tub!</h1>
      <Carousel />
      <TabMenu />
    </div>
  );
};

export default App;
