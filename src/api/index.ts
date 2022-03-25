import axios from "axios";
import { Show } from "../models";

export const getSchedule = async () => {
  const results = await axios
    .get<Show[]>("https://api.tvmaze.com/schedule/web?country=US")
    .then((res) => res.data);
  return results;
};
