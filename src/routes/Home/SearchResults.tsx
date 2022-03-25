import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import GenreBadge from "../../components/GenreBadge";
import { SearchResult, Show } from "../../models";

type Props = { data?: SearchResult[] };

const GenreBadges = ({ show }: { show: Show }) => {
  return (
    <>
      {show.genres.map((g, idx) => (
        <GenreBadge key={`badge:${show.id}${idx}`} className="mx-1" genre={g} />
      ))}
    </>
  );
};

const SearchResults = ({ data }: Props) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((result) => (
          <tr key={`result:${result.show.id}`}>
            <td>
              <Link to={`/shows/${result.show.id}`}>{result.show.name}</Link>
            </td>
            <td>{result.show.language}</td>
            <td>
              <img src={result.show.image?.medium} alt="banner" />
            </td>
            <td>{result.show.rating.average ?? "Not Rated"}</td>
            <td>
              <GenreBadges show={result.show} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SearchResults;
