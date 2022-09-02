import styled from "styled-components/macro";
import SeasonSelector from "@/components/SeasonSelector";
import React from "react";
import { FormGameResultPlayer, Season } from "@/types";
import Players from "@/components/CreateGameForm/Players";
import FlexBox from "@/components/lib/FlexBox";
import Button from "@/components/lib/Button";

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

  /**
   * Creates the game in the API
   */
  const onSubmit = async () => {
    const dto = {
      season: seasonId,
      results: [
        results.map((result, index) => ({
          ...result,
          placement: index + 1,
        })),
      ],
    };

    // eslint-disable-next-line no-console
    console.log(dto);
  };

  return (
    <FlexBox className={className}>
      <SeasonSelector onChange={setSeason} />

      <Players seasonId={seasonId} results={results} setResults={setResults} />

      <Button onClick={onSubmit}>Create game</Button>
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
