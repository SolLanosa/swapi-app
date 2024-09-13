import Card from "@/components/atoms/Card";
import { Character } from "@/types/characters";
import { extractNumberFromUrl } from "@/utils/general.utils";

interface CardContainerProps {
  characters: Character[];
}

export default function CardContainer({ characters }: CardContainerProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {characters?.map((character, index) => (
        <Card
          key={index}
          character={character}
          href={`/character/${extractNumberFromUrl(character.url)}`}
        />
      ))}
    </div>
  );
}
