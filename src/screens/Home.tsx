import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

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
    </div>
  );
};

export default Home;
