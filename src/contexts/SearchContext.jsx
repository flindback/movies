import { createContext, useReducer, useContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const initialState = {
    results: {},
    isLoading: false,
    error: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "START_LOADING":
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case "SEARCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          results: action.payload,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchFor = async (query) => {
    const results = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    );
    return results;
  };

  return (
    <SearchContext.Provider value={{ state, dispatch, searchFor }}>
      {children}
    </SearchContext.Provider>
  );
};
