import { Character, CharacterSearchResponse } from "@/types/characters";
import server from "../service";

export const getCharactersData = async ({
  page,
  character,
}: {
  page?: number;
  character?: string;
}): Promise<CharacterSearchResponse> => {
  const queryParam = character
    ? `?search=${character}`
    : page
    ? `?page=${page}`
    : "";
  const res = await server.get(`/people${queryParam}`);

  return res.data;
};

export const getCharacterByID = async (id: number): Promise<Character> => {
  const res = await server.get(`/people/${id}/`);

  return res.data;
};
