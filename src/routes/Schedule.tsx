import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getSchedule } from "../api";
import { Show } from "../models";

const Schedule = () => {
  const { isLoading, error, data, isFetching } = useQuery<Show[]>(
    "schedule",
    getSchedule
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>TV Schedule</h1>
      <ol>
        {data?.map((s) => (
          <li>
            <Link to={`/shows/${s.id}`}>
              {s.name} (Season: {s.season})
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Schedule;
