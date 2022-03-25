import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getShow } from "../api";

const Show = () => {
  const { showId } = useParams();
  const { isLoading, data } = useQuery(["showDetails", showId], () =>
    getShow(showId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data?.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: data?.summary ?? "" }}>{}</div>
    </div>
  );
};

export default Show;
