import "./App.css";
import "./tailwind.css";
import ProductProvider from "./context/ProductContext";
import ProductSwiper from "./components/ProductSwiper";
import ProductDetail from "./components/ProductDetail/index";
function App() {
  return (
    <ProductProvider>
      <div className="max-w-6xl mx-auto antialiased py-14">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <ProductSwiper />
          </div>
          <div className="px-4 md:w-1/2">
            <ProductDetail />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
