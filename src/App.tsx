import Breadcrumb from "./components/Breadcrumb";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import TabMenu from "./components/TabMenu";
import traingleSVG from "./assets/triangle.svg";
import traingleSVG2 from "./assets/triangle2.svg";
import dottedLineSVG from "./assets/dottedLine.svg";
import hexagonSVG from "./assets/hexagon.svg";
import ShareButton from "./components/ShareButton";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <img
        src={traingleSVG}
        alt="svg"
        className="-z-20 absolute h-[250px] w-[250px]"
      />
      <img
        src={dottedLineSVG}
        alt="svg"
        className="-z-20 right-0 absolute h-[400px] w-[300px]"
      />
      <img
        src={hexagonSVG}
        alt="svg"
        className="-z-20 bottom-0 absolute h-[250px] w-[250px]"
      />
      <img
        src={traingleSVG2}
        alt="svg"
        className="-z-20 bottom-0 absolute right-0 h-[250px] w-[250px]"
      />

      <div className="mx-[10%] my-8 space-y-6">
        <Navbar />
        <Breadcrumb />
        <h1 className="text-3xl font-bold mx-10 bg-white px-4 py-2 rounded-lg shadow-lg">
          Oceanfront ~ Newport Whale Watch ~ Single Story Home ~ W/Hot Tub!
        </h1>
        <Carousel />
        <ShareButton />
        <TabMenu />
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
