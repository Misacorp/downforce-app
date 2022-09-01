import React from "react";
import styled from "styled-components/macro";
import { Bookmark, FilePen } from "@react95/icons";
import { List } from "@react95/core";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

/**
 * Start menu
 * @param className Class name
 * @constructor
 */
const StartMenu: React.FC = ({ className }: Props) => (
  // TODO: Add outside click handler to close the menu

  <List className={className}>
    <Link to="/games">
      <List.Item icon={<Bookmark variant="32x32_4" />}>View games</List.Item>
    </Link>

    <Link to="create-game">
      <List.Item icon={<FilePen variant="32x32_4" />}>New game</List.Item>
    </Link>
  </List>
);

export default styled(StartMenu)``;
