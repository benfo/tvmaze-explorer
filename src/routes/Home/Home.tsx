import { ChangeEvent, useEffect, useState } from "react";
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
      <input
        autoFocus
        type="text"
        value={query}
        onChange={handleSearchChange}
      />
      <SearchResults data={data} />
    </div>
  );
};

export default Home;
