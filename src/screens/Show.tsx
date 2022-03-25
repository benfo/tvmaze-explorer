import { useParams } from "react-router-dom";

const Show = () => {
  const { showId } = useParams();
  return <div>Show {showId}</div>;
};

export default Show;
