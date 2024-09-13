import { getCharacterByID } from "@/services/api/api";

import { useQuery } from "@tanstack/react-query";

export default function useGetCharacterById(id: number) {
  const response = useQuery({
    queryKey: ["characterData"],
    queryFn: async () => {
      return getCharacterByID(id);
    },
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return { ...response };
}
