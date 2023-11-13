import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import { SearchContext, SearchProvider } from "./contexts/SearchContext";
import { useContext } from "react";
import { Spinner } from "@chakra-ui/react";

function App() {
  const { state } = useContext(SearchContext);
  const { isLoading, results } = state;

  console.log("isloading:", isLoading, results);
  return (
    <>
      <Search />
      {isLoading ? (
        <Spinner size={"xl"} />
      ) : results.data ? (
        <Results results={results} />
      ) : null}
    </>
  );
}

export default App;
