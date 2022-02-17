import React from "react";
import "./style.css";

export function Modal({ setModal, hero }) {

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="modalgroup">
      <div className="modal">
        <div className="modalinfo">
          <div className="imagehero"><img src={hero.images.sm} alt={hero.name} /></div>
          <div className="heroinfo">
            <h2>{hero.name}</h2>
            <div className="containerhero">
              <div className="infowidth">
                <ul>
                  <li>Cor dos olhos: {hero.appearance.eyeColor}</li>
                  <li>Gênero: {hero.appearance.gender}</li> 
                  <li>Cor do cabelo: {hero.appearance.hairColor}</li>
                  <li>Altura: {hero.appearance.height[1]}</li>
                  <li>Raça: {hero.appearance.race}</li>
                  <li>Nome completo: {hero.biography.fullName}</li>
                  <li>Primeira aparição: {hero.biography.firstAppearance}</li>
                  <li>Editora: {hero.biography.publisher}</li>
                </ul>
                <div className="closemodal">
                  <button onClick={handleCloseModal}>Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
