"use client";
import useGetCharacterById from "@/hooks/useGetCharacterById";
import cn from "classnames";
import { Chip, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useTypedSelector } from "@/store/store";

export default function CharacterPage() {
  const params = useParams();
  const { refetch, isFetching } = useGetCharacterById(Number(params.id));
  const { character } = useTypedSelector((state) => state);

  useEffect(() => {
    refetch();
  }, [refetch, params.id]);

  return (
    <div>
      <div className="md:m-10 max-md:m-4">
        <Link
          href={"/"}
          className="border border-yellow-500 text-yellow-500 rounded-2xl px-4 py-2"
        >
          Go back
        </Link>
      </div>
      <div
        className={cn(
          "max-w-96 bg-yellow-500 mx-auto rounded-lg p-2 flex justify-center flex-col my-10 max-md:mx-4 max-md:my-10",
          { "h-64": isFetching }
        )}
      >
        {isFetching ? (
          <CircularProgress className="m-auto" />
        ) : (
          <>
            <span className="text-2xl">{character?.name}</span>
            <div>
              Body Description:
              {!!character?.eye_color && (
                <Chip label={`${character?.eye_color} eyes`} className="m-2" />
              )}
              {character?.hair_color && character.hair_color !== "n/a" && (
                <Chip label={`${character?.hair_color} hair`} className="m-2" />
              )}
              {character?.gender && character.gender !== "n/a" && (
                <Chip label={`gender: ${character?.gender}`} className="m-2" />
              )}
              {character?.height && character.height !== "n/a" && (
                <Chip label={`height: ${character?.height}`} className="m-2" />
              )}
              {character?.skin_color && (
                <Chip
                  label={`skin color: ${character?.skin_color}`}
                  className="m-2"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
