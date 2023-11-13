import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Search />
      </SearchProvider>
    </>
  );
}

export default App;
