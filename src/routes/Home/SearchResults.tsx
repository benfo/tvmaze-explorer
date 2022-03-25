import React from "react";
import { Alert, Table } from "react-bootstrap";
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

  if (!data.length) {
    return (
      <Alert variant="success">
        <Alert.Heading>Search for something</Alert.Heading>
        <p>
          Type in the search input to start the search.
        </p>
        <hr />
        <p className="mb-0">
          You will be able to click on a result and see more information.
        </p>
      </Alert>
    );
  }

  return (
    <Table hover striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Genres</th>
          <th>Official Site </th>
          <th>Running Time</th>
          <th>Premiered / Ended</th>
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
              <img style={{minHeight: "295px"}} src={result.show.image?.medium} alt="banner" />
            </td>
            <td>{result.show.rating.average ?? "Not Rated"}</td>
            <td>
              <GenreBadges show={result.show} />
            </td>
            <td>
              {result.show.officialSite ? (
                <a href={result.show.officialSite} target="_blank">
                  Official Site
                </a>
              ) : (
                "Not Available"
              )}
            </td>
            <td>{result.show.runtime ? `${result.show.runtime} min` : ""}</td>
            <td>
              {`Premiered: ${
                result.show.premiered ? result.show.premiered : "Not Available"
              }`}
              <br />
              {`Ended: ${
                result.show.ended ? result.show.ended : "Not Available"
              }`}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SearchResults;
