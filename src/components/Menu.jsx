import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PastryCard from "./PastryCard";
import Search from './Search';

function Menu() {
  const [searchState, setSearchState] = useState('');

  const { pastries } = useLoaderData();

  const filteredMappedCards = pastries
    .filter(pastryObj => pastryObj.name.toLowerCase().includes(searchState.toLowerCase()))
    .map(pastryObj => (
      <PastryCard key={pastryObj.id} pastryObj={pastryObj} />
    ));

  return (
    <div className="menu-container">
      <Search setSearchState={setSearchState} />
      <div className="pastry-card-container">{filteredMappedCards}</div>
    </div>
  );
}

export default Menu;
