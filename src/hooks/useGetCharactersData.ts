import { getCharactersData } from "@/services/api/api";
import { setCharactersData } from "@/store/slices/characters.slice";

import { useAppDispatch } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

export default function useGetCharactersData({
  page,
  character,
}: {
  page?: number;
  character?: string;
}) {
  const dispatch = useAppDispatch();
  const response = useQuery({
    queryKey: ["charactersData", page, character],
    queryFn: async () => {
      const data = await getCharactersData({ page, character });
      dispatch(
        setCharactersData({
          character: data.results,
          count: data.count,
        })
      );
      return data;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { ...response };
}
