"use client";
import CardContainer from "@/components/modules/CardContainer";
import useGetCharactersData from "@/hooks/useGetCharactersData";
import { setPage } from "@/store/slices/characters.slice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { CircularProgress, Pagination } from "@mui/material";

import { useCallback, useEffect } from "react";

export default function HomeView() {
  const { characters, page, pageCount } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();

  const { refetch, isLoading } = useGetCharactersData(page);

  useEffect(() => {
    refetch();
  }, [refetch, page, pageCount]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      dispatch(setPage({ page: newPage }));
    },
    [dispatch]
  );

  return (
    <div className="max-w-screen-xl m-auto flex items-center flex-col">
      <div className="w-full text-4xl text-center my-10 text-yellow-500">
        STAR WARS CHARACTERS
      </div>
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
