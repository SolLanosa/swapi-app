import { getCharacterByID } from "@/services/api/api";
import { setCharacter } from "@/store/slices/characters.slice";
import { store } from "@/store/store";

import { useQuery } from "@tanstack/react-query";

export default function useGetCharacterById(id: number) {
  const response = useQuery({
    queryKey: ["characterData", id],
    queryFn: async () => {
      const data = await getCharacterByID(id);
      store.dispatch(
        setCharacter({
          character: data,
        })
      );
      return data;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { ...response };
}
