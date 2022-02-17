import React, { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Modal } from "./../modal/";

import "./style.css";

export function HeroList() {
  const [value, setValue] = useState([]);
  const [modal, setModal] = useState(false);
  const [hero, setHero] = useState(false);
  const { heroes } = useFetch(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  

  function handleHero(hero){
    setHero(hero);
  }

  function handleModal(hero) {
    handleHero(hero);
    setModal(true);
    
  }
  return (
    <main className="container">
        
      <div className="box">
        <div className="section">
          <div className="formgroup">
            <div className="subform">
              <input
                type="text"
                placeholder="Digite o nome do personagem"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoFocus
              />
              {/* <button>Pesquisar</button> */}
            </div>
          </div>
          <div className="cardgroup">
            {heroes
              .filter((hero) => {
                if (
                  value != "" &&
                  hero.name.toUpperCase().includes(value.toUpperCase())
                ) {
                  return hero;
                } else if (value == "") {
                  return hero;
                }
              })
              .map((hero, id) => {
                return (
                  <div className="cardlist" key={id}>
                    <div className="cardimage">
                      <img src={hero.images.sm} alt={hero.name}></img>
                      <p>{hero.name}</p>
                        <button onClick={() => handleModal(hero)}>Ver mais</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal} hero={hero}/> : null}
    </main>
  );
}
