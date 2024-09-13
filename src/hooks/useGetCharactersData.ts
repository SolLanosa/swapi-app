import { getCharactersData } from "@/services/api/api";
import { setCharactersData } from "@/store/slices/characters.slice";

import { store } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

export default function useGetCharactersData(page: number, character?: string) {
  const response = useQuery({
    queryKey: ["charactersData"],
    queryFn: async () => {
      const data = await getCharactersData(page, character);
      store.dispatch(
        setCharactersData({
          character: data.results,
          count: data.count,
        })
      );
      return data;
    },
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return { ...response };
}
