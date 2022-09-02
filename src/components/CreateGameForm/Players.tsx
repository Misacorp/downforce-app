import React from "react";
import styled from "styled-components/macro";
import { API_CACHE_KEYS, fetchPlayers } from "@/api";
import { useQuery } from "@tanstack/react-query";
import Alert from "@/components/lib/Alert";
import Loader from "@/components/lib/Loader";
import { FormGameResult, FormGameResultPlayer } from "@/types";
import Fieldset from "@/components/lib/Fieldset";
import FlexBox from "@/components/lib/FlexBox";
import PlayerSelector from "@/components/CreateGameForm/PlayerSelector";
import { formatIndexToUIStr } from "@/utils";
import Player from "@/components/CreateGameForm/Player";

interface Props {
  results: FormGameResultPlayer[];
  setResults: (results: FormGameResultPlayer[]) => void;
  seasonId: string | undefined;
  className?: string;
}

const Players = ({ seasonId, results, setResults, className }: Props) => {
  const cacheKey = `${API_CACHE_KEYS.PLAYER}_${API_CACHE_KEYS.SEASON}_${seasonId}`;

  const { isLoading, error, data } = useQuery([cacheKey], () =>
    fetchPlayers(seasonId)
  );

  // No season, no render
  if (!seasonId) return null;

  /**
   * Adds a new player to the form
   * @param player
   */
  const addPlayer = (player: FormGameResultPlayer) => {
    const newPlayers = [...results, { ...player }];

    setResults(newPlayers);
  };

  /**
   * Removes a player from the list
   * @param player
   */
  const deletePlayer = (player: FormGameResult) => {
    setResults(results.filter((p) => p.playerName !== player.playerName));
  };

  const selectedPlayerIds = results.map(({ playerId }) => playerId);
  const playerOptions =
    data?.filter(({ pk1 }) => !selectedPlayerIds.includes(pk1)) ?? [];

  return (
    <Fieldset legend="Players and placement" className={className}>
      {Boolean(error) && (
        <Alert
          title="Network error"
          type="error"
          message="Attempting to load a list of games from the network failed."
          closeAlert={() => {}}
        />
      )}

      {isLoading && <Loader />}

      {data?.length && (
        <FlexBox>
          <FlexBox>
            {results.map((player, index) => (
              <Player
                key={player.playerName}
                player={{ ...player, placement: index + 1 }}
                onDelete={deletePlayer}
              />
            ))}
          </FlexBox>

          <PlayerSelector
            playerOptions={playerOptions}
            selectedPlayerNames={results.map(({ playerName }) => playerName)}
            onChange={addPlayer}
            text={`Select ${formatIndexToUIStr(results.length + 1)} player`}
          />
        </FlexBox>
      )}
    </Fieldset>
  );
};

export default styled(Players)`
  & > ${FlexBox} {
    gap: 2rem;
    flex-direction: column;
    align-items: stretch;

    & > ${FlexBox}:first-of-type {
      flex-direction: column;
      gap: 0.5rem;
      align-items: stretch;
    }
  }
`;
