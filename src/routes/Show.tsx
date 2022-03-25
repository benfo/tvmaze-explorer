import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
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
      <Row xs="auto">
        <Col>
          <img src={data?.image?.medium} alt="banner" />
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <strong>Show Info</strong>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Premiered:</strong> {data?.premiered}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rating:</strong> {data?.rating.average}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <div>
        <h3>Summary</h3>
        <div dangerouslySetInnerHTML={{ __html: data?.summary ?? "" }}></div>
      </div>
    </div>
  );
};

export default Show;
