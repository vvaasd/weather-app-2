import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Slider from "./components/ui/slider";
import { PageContext } from "./context/context";
import { useEffect, useRef, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const contentToBlurRef = useRef(null);

  useEffect(() => {
    contentToBlurRef.current.style.transition = "filter 0.15s ease-in";
  }, []);

  const blurContent = () => {
    contentToBlurRef.current.style.filter = "blur(25px)";
  };

  const unblurContent = () => {
    contentToBlurRef.current.style.filter = "";
  };

  return (
    <div className="app">
      <div className="content">
        <PageContext.Provider
          value={{ weatherData, setWeatherData, blurContent, unblurContent }}
        >
          <Header />
          <div ref={contentToBlurRef}>
            <Main />
            <Slider />
            <Footer />
          </div>
        </PageContext.Provider>
      </div>
    </div>
  );
}

export default App;
