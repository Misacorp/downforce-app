import React from "react";
import styled from "styled-components/macro";
import SeasonSelector from "@/components/SeasonSelector";
import { CreateGameDTO, FormGameResultPlayer, Season } from "@/types";
import Players from "@/components/CreateGameForm/Players";
import FlexBox from "@/components/lib/FlexBox";
import Button from "@/components/lib/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_CACHE_KEYS, createGame } from "@/api";

interface Props {
  className?: string;
}

/**
 * A form to create a new game
 * @param className Class name
 * @constructor
 */
const CreateGameForm = ({ className }: Props) => {
  const [season, setSeason] = React.useState<Season | null>(null);

  const seasonId = season?.pk1.split("#")[1];

  const [results, setResults] = React.useState<FormGameResultPlayer[]>([]);

  const queryClient = useQueryClient();
  const mutation = useMutation(createGame, {
    // TODO: Change to onSuccess when things work out
    onSettled: () => {
      queryClient.invalidateQueries([
        `${API_CACHE_KEYS.GAME}_${API_CACHE_KEYS.SEASON}_${seasonId}`,
      ]);
    },
  });

  // Reset the player list when the season changes
  React.useEffect(() => {
    setResults([]);
  }, [seasonId]);

  /**
   * Creates the game in the API
   */
  const onSubmit = () => {
    if (!season) return;

    const dto: CreateGameDTO = {
      seasonId: season.pk1, // Full season id including the prefix
      results: results.map((result, index) => ({
        ...result,
        placement: index + 1,
      })),
    };

    mutation.mutate(dto);
  };

  return (
    <FlexBox className={className}>
      <SeasonSelector onChange={setSeason} />

      <Players seasonId={seasonId} results={results} setResults={setResults} />

      <Button onClick={onSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Creating…" : "Create game"}
      </Button>
    </FlexBox>
  );
};

export default styled(CreateGameForm)`
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;

  & > ${Button} {
    height: 3rem;
  }
`;
