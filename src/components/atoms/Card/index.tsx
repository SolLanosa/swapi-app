import { Character } from "@/types/characters";
import {
  CardContent,
  Card as CardComponent,
  Typography,
  CardActions,
} from "@mui/material";
import Link from "next/link";

interface CardProps {
  character: Character;
  href: string;
}

export default function Card({ character, href }: CardProps) {
  return (
    <CardComponent
      sx={{
        maxWidth: 345,
        backgroundColor: "#EAB308",
      }}
      className="m-4"
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="white"
          className="font-bold"
        >
          {character.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href={href}
          className="text-neutral-50 border border-white rounded-xl p-3 text-center"
        >
          <span className="text-black">Click here </span> if you want to know
          more about: {character.name}{" "}
        </Link>
      </CardActions>
    </CardComponent>
  );
}
