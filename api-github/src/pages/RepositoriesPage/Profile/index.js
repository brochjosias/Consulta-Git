/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  MdGroup,
  MdLocationCity,
  MdWork,
  MdLink,
  MdClose,
} from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile({ user }) {
  const navigate = useNavigate();

  const handleBackToSearch = () => {
    navigate("/");
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#ff0000";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "#fff";
  };

  return (
    <Container>
      <button
        type="button"
        onClick={handleBackToSearch}
        aria-label="Fechar e voltar à página de pesquisa"
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
