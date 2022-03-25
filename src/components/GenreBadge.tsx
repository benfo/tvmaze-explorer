import React from "react";
import { Badge } from "react-bootstrap";

type Props = {
  genre: string;
  className?: string;
};

const GenreBadge = ({ genre, className }: Props) => {
  return (
    <Badge className={className} bg="primary">
      {genre}
    </Badge>
  );
};

export default GenreBadge;
