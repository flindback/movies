import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const Search = () => {
  const { state, dispatch, searchFor } = useContext(SearchContext);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "START_LOADING" });
      const results = await searchFor(e.target.value);
      dispatch({ type: "SEARCH_SUCCESS", payload: { ...results } });
    }
  };
  console.log(state);
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for a movie, actor..."
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </InputGroup>
    </Stack>
  );
};

export default Search;
