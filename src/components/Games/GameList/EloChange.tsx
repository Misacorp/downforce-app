import styled from "styled-components/macro";
import { formatFloatToUIStr } from "@/utils";

interface Props {
  before: number;
  after: number;
  className?: string;
}

/**
 * Displays the change in a player's ELO after a game
 * @param before    Elo before the game
 * @param after     Elo after the game
 * @param className Class name
 * @constructor
 */
const EloChange = ({ before, after, className }: Props) => (
  <span className={className}>
    ({formatFloatToUIStr(before)} › {formatFloatToUIStr(after)})
  </span>
);

export default styled(EloChange)`
  color: ${({ before, after }) => (after > before ? "green" : "maroon")};
`;
