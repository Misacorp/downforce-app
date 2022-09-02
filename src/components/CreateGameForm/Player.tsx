import styled from "styled-components/macro";
import { FormGameResult } from "@/types";
import FlexBox from "@/components/lib/FlexBox";
import Button from "@/components/lib/Button";

interface Props {
  player: FormGameResult;
  onDelete: (player: FormGameResult) => void;
  className?: string;
}

/**
 * A player's results in  a form
 * @param player
 * @param onDelete
 * @param className
 * @constructor
 */
const Player = ({ player, onDelete, className }: Props) => {
  /**
   * Handles deleting the player
   */
  const handleDelete = () => {
    onDelete(player);
  };

  return (
    <FlexBox className={className}>
      <span>
        {player.placement}. {player.playerName}
      </span>

      <Button onClick={handleDelete}>Delete</Button>
    </FlexBox>
  );
};

export default styled(Player)`
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;
