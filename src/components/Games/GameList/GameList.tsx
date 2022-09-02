import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "@tanstack/react-query";
import Alert from "@/components/lib/Alert";
import { API_CACHE_KEYS, fetchGames } from "@/api";
import Loader from "@/components/lib/Loader";
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
  // Get games from the API
  const cacheKey = `${API_CACHE_KEYS.GAME}_${API_CACHE_KEYS.SEASON}_${seasonId}`;

  const { isLoading, error, data } = useQuery([cacheKey], () =>
    fetchGames(seasonId)
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
        data
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((game) => <Game game={game} key={game.pk1} />)}
    </div>
  );
};

export default styled(GameList)`
  ${Game} {
    margin-bottom: 2rem;
  }
`;
