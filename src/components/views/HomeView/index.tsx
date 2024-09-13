"use client";
import SearchBar from "@/components/atoms/SearchBar";
import CardContainer from "@/components/modules/CardContainer";
import useGetCharactersData from "@/hooks/useGetCharactersData";
import { setPage, setSearchValue } from "@/store/slices/characters.slice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { CircularProgress, Pagination } from "@mui/material";

import { useCallback, useEffect, useState } from "react";

export default function HomeView() {
  const { characters, page, pageCount, searchValue } = useTypedSelector(
    (state) => state
  );
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const { refetch, isLoading } = useGetCharactersData({
    page,
    character: searchValue,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      dispatch(setPage({ page: newPage }));
    },
    [dispatch]
  );

  useEffect(() => {
    refetch();
  }, [refetch, page, pageCount, searchValue]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      dispatch(setSearchValue({ searchValue: inputValue }));
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [dispatch, inputValue]);

  return (
    <div className="max-w-screen-xl m-auto flex items-center flex-col">
      <div className="w-full text-4xl text-center my-10 text-yellow-500">
        STAR WARS CHARACTERS
      </div>
      <SearchBar
        value={inputValue}
        setSearchQuery={(e) => setInputValue(e.target.value)}
      />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <CardContainer characters={characters} />
      )}

      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        className="my-10 bg-yellow-500 rounded-lg text-white "
      />
    </div>
  );
}
