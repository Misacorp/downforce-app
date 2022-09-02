import styled from "styled-components/macro";
import { useQuery } from "@tanstack/react-query";
import config from "@/config";
import Alert from "@/components/lib/Alert";
import React from "react";
import Loader from "@/components/lib/Loader";
import { Game as GameType } from "@/types";
import Game from "./Game";

interface Props {
  seasonId?: string;
  className?: string;
}

/**
 * A list of game results
 * @param seasonId  Season id for which to display games from
 * @param className Class name
 * @constructor
 */
const GameList = ({ seasonId, className }: Props) => {
  /**
   * Fetches games from the API
   */
  const fetchGames = async (): Promise<GameType[]> => {
    // No season id, no results
    if (!seasonId) return [];

    const response = await fetch(
      `${config.API_ENDPOINT}/game?seasonId=${seasonId}`,
      {
        method: "GET",
      }
    );

    return response.json();
  };

  // Get games from the API
  const { isLoading, error, data } = useQuery(
    [`games_season_${seasonId}`],
    fetchGames
  );

  if (!seasonId) return null;

  return (
    <div className={className}>
      {Boolean(error) && (
        <Alert
          title="Network error"
          type="error"
          message="Attempting to load a list of games from the network failed."
          closeAlert={() => {}}
        />
      )}

      {isLoading && <Loader />}

      {Array.isArray(data) &&
        data.map((game) => <Game game={game} key={game.pk1} />)}
    </div>
  );
};

export default styled(GameList)``;
