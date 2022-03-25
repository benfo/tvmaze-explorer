import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";
import { searchShows } from "../api";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  var { isLoading, data } = useQuery(["search", query], () =>
    searchShows(query)
  );

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
      <input autoFocus type="text" onChange={handleSearchChange} />
      {isLoading && <div>Loading... </div>}
      {
        <ul>
          {data?.map((show) => (
            <li>{show.show.name}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Home;
