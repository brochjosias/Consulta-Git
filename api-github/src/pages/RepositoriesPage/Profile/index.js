/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import {
  MdGroup,
  MdLocationCity,
  MdWork,
  MdLink,
  MdClose,
} from "react-icons/md"; // Importe o ícone de "X"

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile({ user }) {
  const navigate = useNavigate(); // Hook para navegação

  // Função para voltar à página principal
  const handleBackToSearch = () => {
    navigate("/"); // Redireciona para a rota principal
  };

  // Função para mudar a cor ao passar o mouse
  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#ff0000"; // Cor ao passar o mouse
  };

  // Função para voltar à cor original ao sair do mouse
  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "#fff"; // Volta à cor original
  };

  return (
    <Container>
      {/* Botão de "X" no canto superior direito */}
      <button
        type="button" // Adicione o tipo explícito
        onClick={handleBackToSearch}
        aria-label="Fechar e voltar à página de pesquisa" // Rótulo para acessibilidade
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "#fff",
          transition: "color 0.3s",
        }}
        onMouseEnter={handleMouseEnter} // Função para o evento onMouseEnter
        onMouseLeave={handleMouseLeave} // Função para o evento onMouseLeave
      >
        <MdClose />
      </button>

      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;
          {user.followers}&nbsp;<i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} /> {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
