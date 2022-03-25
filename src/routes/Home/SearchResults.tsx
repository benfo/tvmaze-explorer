import React from "react";
import { Link } from "react-router-dom";
import { SearchResult } from "../../models";

type Props = { data?: SearchResult[] };

const SearchResults = ({ data }: Props) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data?.map((result) => (
        <li key={`result:${result.show.id}`}>
          <Link to={`/shows/${result.show.id}`}>{result.show.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
