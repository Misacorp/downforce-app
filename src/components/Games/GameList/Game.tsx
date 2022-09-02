import styled from "styled-components/macro";
import { Game as GameType } from "@/types";
import Fieldset from "@/components/lib/Fieldset";
import EloChange from "@/components/Games/GameList/EloChange";
import { formatISODateToUIDateStr, formatISODateToUITimeStr } from "@/utils";

interface Props {
  game: GameType;
  className?: string;
}

/**
 * A single game's results
 * @param game      Game
 * @param className Class name
 * @constructor
 */
const Game = ({ game, className }: Props) => (
  <Fieldset
    legend={`${formatISODateToUIDateStr(
      game.createdAt
    )} ${formatISODateToUITimeStr(game.createdAt)}`}
    className={className}
  >
    <ol>
      {game.results
        .sort((a, b) => a.placement - b.placement)
        .map((result) => (
          <li key={result.player.id}>
            {result.player.name}{" "}
            <EloChange
              before={result.eloBeforeGame}
              after={result.eloAfterGame}
            />
          </li>
        ))}
    </ol>
  </Fieldset>
);

export default styled(Game)`
  ol,
  ul {
    padding-inline-start: 0;
    list-style-position: inside;
  }
`;
