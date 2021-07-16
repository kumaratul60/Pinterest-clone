import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Card.css";

function Card(props) {
  let { pins } = props;
  return (
    <Wrapper>
      <Container className="card__container">
        {pins.map((pin, id) => {
          let { urls } = pin;
          return <Pin key={id} urls={urls} />; // key is used for track changes in react js component
        })}
      </Container>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  background-color: white;
  justify-content: center;
`;

const Container = styled.div`
  ${"" /* display: flex; */}
  ${"" /* column-count: 5; */}
  ${"" /* coulmn-gap: 10px; */}
  margin: 0 auto;
  height: 100%;
  ${"" /* max-width:1260px; */}
  background-color: white;
`;
