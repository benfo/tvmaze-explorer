import axios from "axios";
import { SearchResult, Show } from "../models";

axios.defaults.baseURL = "https://api.tvmaze.com";

export const getSchedule = async () => {
  const results = await axios
    .get<Show[]>("schedule/web?country=US")
    .then((res) => res.data);
  return results;
};

export const searchShows = async (query: string) => {
  const results = await axios
    .get<SearchResult[]>("search/shows", {
      params: {
        q: query,
      },
    })
    .then((res) => res.data);
  return results;
};

export const getShow = async (showId?: string) => {
  if (showId) {
    const result = await axios
      .get<Show>(`shows/${showId}`)
      .then((res) => res.data);
    return result;
  }
};
