import React from 'react';
import {
  Button,
  Container,
  CardGroup,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

const MFE1_Button =
  React.lazy(() =>
    import('MFE1/Button')
  );

const styles = {
  card: {
    backgroundColor:
      '#B7E0F2',
    borderRadius: 55,
    padding: '3rem',
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: 55,
  },
};

function App() {
  return (
    <div>
      <h1>
        Micro-Frontend Host
      </h1>
      <Button>
        Bootstrap Button
      </Button>
      <Container fluid>
        <CardGroup className='m-5 d-block'>
          <Card
            className='m-5 border-0 shadow'
            style={
              styles.card
            }>
            <Row>
              <Col>
                <Card.Img
                  src='https://ucarecdn.com/02a46e61-a02e-4263-8279-d0b1c0079f87/-/format/auto/-/progressive/yes/-/preview/180x180/'
                  style={
                    styles.cardImage
                  }
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title as='h1'>
                    Englishes
                    of the
                    World
                  </Card.Title>
                  <Card.Text
                    as='h4'
                    style={
                      styles.cardText
                    }>
                    How do
                    your
                    grammar
                    intuitions
                    depend on
                    when and
                    where you
                    learned
                    English?
                    Participants
                    took a
                    short
                    grammar
                    quiz,
                    which we
                    are using
                    to
                    understand
                    how
                    grammar
                    differs in
                    different
                    parts of
                    the
                    English-speaking
                    world
                    (USA,
                    Ireland,
                    Australia,
                    etc.). We
                    are also
                    investigating
                    how
                    grammar is
                    different
                    for people
                    who learn
                    English
                    later in
                    life: Do
                    they make
                    different
                    mistakes
                    if their
                    first
                    language
                    is German
                    as opposed
                    to
                    Japanese?
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </CardGroup>
      </Container>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
          Button from MFE1
        </h3>
        <React.Suspense fallback='Loading Button'>
          <MFE1_Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
