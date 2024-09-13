import { Character, CharacterSearchResponse } from "@/types/characters";
import server from "../service";

export const getCharactersData = async (
  page: number,
  character?: string
): Promise<CharacterSearchResponse> => {
  const searchParam = character ? `?search=${character}` : "";
  const paginationParam = page ? `?page=${page}` : "";
  const res = await server.get(`/people${searchParam}${paginationParam}`);

  return res.data;
};

export const getCharacterByID = async (id: number): Promise<Character> => {
  const res = await server.get(`/people/${id}/`);

  return res.data;
};
