import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";
import { searchShows } from "../../api";
import SearchResults from "./SearchResults";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  var { data } = useQuery(["search", query], () => searchShows(query));

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, []);

  useDebounce(
    () => {
      if (query) {
        setSearchParams({ q: query });
      } else {
        setSearchParams({});
      }
    },
    500,
    [query]
  );

  const handleSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value);
  };

  return (
    <div>
      <div className="mb-2">
        <Form.Control
          autoFocus
          type="text"
          placeholder="Type something to search"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <SearchResults data={data} />
    </div>
  );
};

export default Home;
