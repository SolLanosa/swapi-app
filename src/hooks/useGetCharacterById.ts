import { getCharacterByID } from "@/services/api/api";
import { setCharacter } from "@/store/slices/characters.slice";
import { useAppDispatch } from "@/store/store";

import { useQuery } from "@tanstack/react-query";

export default function useGetCharacterById(id: number) {
  const dispatch = useAppDispatch();
  const response = useQuery({
    queryKey: ["characterData", id],
    queryFn: async () => {
      const data = await getCharacterByID(id);
      dispatch(
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
