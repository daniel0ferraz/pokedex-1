import React, { useState, useEffect } from "react";
import { Container, Input, SearchIconComponent } from "./style";
import SearchIcon from "../../assets/images/icons/Search.svg";
import { connect } from "react-redux";
import { filterPokemons } from "../../actions/pokedex";

function Search(props) {
  const { className, filterPokemons } = props;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    filterPokemons(filter);
  }, [filter, filterPokemons]);

  return (
    <Container className={className || ""}>
      <SearchIconComponent source={SearchIcon} size={"12px"} />
      <Input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="What Pokémon are you looking for?"
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filterPokemons: (filter) => dispatch(filterPokemons(filter)),
});

export default connect(null, mapDispatchToProps)(Search);
