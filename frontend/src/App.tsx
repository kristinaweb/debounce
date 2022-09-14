import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { useGetFirstByNameQuery } from "./app/api";
import { useDebounce } from "./app/useDebounce";

function App() {
  const [value, setValue] = useState<string>("");
  const [debouncValue, setDebouncValue] = useState<string>("");
  const debounce = useDebounce(onSearch);

  const { data, error, isLoading } = useGetFirstByNameQuery(debouncValue);

  const onInput = (event: any): void => {
    setValue(event.target.value);
    debounce(event.target.value);
  };

  function onSearch(value: string) {
    if (value.length >= 3) {
      setDebouncValue(value);
    }
  }

  return (
    <div className="App">
      <Box width={"300px"}>
        <Autocomplete
          value={value}
          onInput={(e) => onInput(e)}
          options={
            data?.map((option: any) => {
              return option.country;
            }) || []
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
            />
          )}
        />
      </Box>
    </div>
  );
}

export default App;
