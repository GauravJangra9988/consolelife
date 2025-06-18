import "./App.css";
import { Header } from "./uiComponent/header";
import { Toaster } from "sonner";
import { Home } from "./homePage";
import { Browse } from "./Browse";
import { useSelector } from "react-redux";

function App() {
  const { currentPage } = useSelector((state) => state.page);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#333",
            border: "1px solid #666",
          },
          className: "my-toast",
          duration: 3000,
        }}
      />
      <Header />
      
      {currentPage === "home" ? <Home /> : <Browse />}
      
    </>
  );
}

export default App;
