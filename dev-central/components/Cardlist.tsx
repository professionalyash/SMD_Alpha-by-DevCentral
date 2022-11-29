import { Container, Stack } from "@mantine/core";
import React from "react";
import { obj } from "../components/Objects";
import PostCard from "./Postcard";

const Cardlist = () => {
  const database = obj;
  return (
    <Container size="lg">
      {database.map((item) => {
        return (
          <PostCard
            image={item.image}
            link={item.link}
            description={item.description}
            className={item.className}
            key={item.id}
            author={item.author}
            rating={item.rating}
            title={item.title}
          />
        );
      })}
    </Container>
  );
};

export default Cardlist;
