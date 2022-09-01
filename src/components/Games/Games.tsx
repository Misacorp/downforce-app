import React from "react";
import styled from "styled-components/macro";
import GameList from "@/components/Games/GameList/GameList";
import SeasonSelector from "@/components/SeasonSelector";
import { Season } from "@/types";
import FlexBox from "@/components/lib/FlexBox";

interface Props {
  className?: string;
}

/**
 * Games page
 * @param className Class name
 * @constructor
 */
const Games = ({ className }: Props) => {
  const [season, setSeason] = React.useState<Season | null>(null);

  return (
    <FlexBox className={className}>
      <SeasonSelector onChange={setSeason} />

      {season && <GameList seasonId={season.pk1.split("#")[1]} />}
    </FlexBox>
  );
};

export default styled(Games)`
  gap: 1rem;
  flex-direction: column;
  align-items: stretch;
`;
