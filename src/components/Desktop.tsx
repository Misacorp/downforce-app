import styled from "styled-components/macro";
import Shortcut from "@/components/Shortcut";
import { Bookmark, FilePen } from "@react95/icons";

interface Props {
  className?: string;
}

/**
 * Desktop content
 * @param className
 * @constructor
 */
const Desktop = ({ className }: Props) => (
  <div className={className}>
    <Shortcut to="/create-game" Icon={<FilePen />}>
      Create game
    </Shortcut>

    <Shortcut to="/games" Icon={<Bookmark />}>
      View games
    </Shortcut>
  </div>
);

export default styled(Desktop)`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  grid-auto-flow: column;
  gap: 1rem;
  padding: 1rem;
`;
