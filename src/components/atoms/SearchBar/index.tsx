import { TextField } from "@mui/material";

import { ChangeEvent } from "react";

interface SearchBarProps {
  setSearchQuery: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
}

export default function SearchBar({ setSearchQuery, value }: SearchBarProps) {
  return (
    <div className="flex justify-center">
      <TextField
        value={value}
        id="search-bar"
        onChange={(e) => {
          setSearchQuery(e);
        }}
        label="Enter a starwars character"
        variant="filled"
        size="small"
        sx={{
          backgroundColor: "#EAB308",
        }}
        color="secondary"
      />
    </div>
  );
}
