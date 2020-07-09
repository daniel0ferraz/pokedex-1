import React from "react";
import Filter from "../../../assets/images/icons/Filter.svg";
import Sort from "../../../assets/images/icons/Sort.svg";
import Generation from "../../../assets/images/icons/Generation.svg";
import { Container, Option } from "./style";
import { Image } from "../../../Components";

export default function Actions() {
  const iconSize = 13;
  return (
    <Container>
      <Option onClick={() => alert("generation")}>
        <Image source={Generation} alt="generation" size={iconSize} />
      </Option>
      <Option onClick={() => alert("sort")}>
        <Image source={Sort} alt="sort" size={iconSize} />
      </Option>
      <Option onClick={() => alert("filter")}>
        <Image source={Filter} alt="filter" size={iconSize} />
      </Option>
    </Container>
  );
}
