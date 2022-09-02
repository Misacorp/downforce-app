import styled from "styled-components/macro";
import { FormGameResultPlayer, SeasonPlayer } from "@/types";
import React, { FormEvent } from "react";
import Input from "@/components/lib/Input";
import FlexBox from "@/components/lib/FlexBox";
import Button from "@/components/lib/Button";

interface Props {
  playerOptions: SeasonPlayer[];
  selectedPlayerNames: string[];
  onChange: (result: FormGameResultPlayer) => void;
  text: string | undefined;
  className?: string;
}

/**
 * Dropdown from which players can be selected
 * @param playerOptions       Player options
 * @param selectedPlayerNames Player names that have already been selected
 * @param onChange            Change handler
 * @param text                Text to display in the dropdown
 * @param className           Class name
 * @constructor
 */
const PlayerSelector = ({
  playerOptions,
  selectedPlayerNames,
  onChange,
  text,
  className,
}: Props) => {
  // Form options array
  const options = playerOptions.map((p) => `${p.name}`);
  const defaultValue = "Select a player…";
  options.unshift(text ?? defaultValue); // Add an option to indicate no selection has been made

  const onPlayerSelect = (event: FormEvent<HTMLSelectElement>) => {
    // Get player name from event
    const { value: playerName } = event.target as HTMLSelectElement;

    // Do nothing if we don't have data
    if (!playerOptions) return;

    // Find the entire player object in the data
    const newPlayer = playerOptions.find(
      (s: SeasonPlayer) => s.name === playerName
    );

    // No player found (someone really broke something)
    if (!newPlayer) return;

    onChange({
      playerId: newPlayer.pk1,
      playerName: newPlayer.name,
    });
  };

  const [newPlayerName, setNewPlayerName] = React.useState<string>("");
  const [hasDuplicatePlayerNameError, setHasDuplicatePlayerNameError] =
    React.useState<boolean>(false);

  /**
   * Handles changes in the new player input
   * @param event Event
   */
  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    // Get player name from event
    const { value: playerName } = event.target as HTMLSelectElement;
    setNewPlayerName(playerName);
  };

  /**
   * Creates a new player
   */
  const onPlayerCreate = () => {
    if (newPlayerName.length < 2) return;

    // All existing player names in this season and those created on this form
    const allExistingPlayerNames = [
      ...playerOptions.map(({ name }) => name),
      ...selectedPlayerNames,
    ];

    if (allExistingPlayerNames.includes(newPlayerName)) {
      setHasDuplicatePlayerNameError(true);

      return;
    }

    const newPlayer: FormGameResultPlayer = {
      playerId: null,
      playerName: newPlayerName,
    };

    onChange(newPlayer);
    setNewPlayerName("");
    setHasDuplicatePlayerNameError(false);
  };

  // The Dropdown element actually sucks and this whole UI library is a fun gimmick, but a pain to work with
  return (
    <FlexBox className={className}>
      <select onChange={onPlayerSelect} value={text ?? defaultValue}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span> or </span>

      <FlexBox>
        <FlexBox>
          <Input
            placeholder="Enter new player name"
            value={newPlayerName}
            onChange={handleInputChange}
          />

          <Button onClick={onPlayerCreate}>Create</Button>
        </FlexBox>

        {hasDuplicatePlayerNameError && (
          <span>A player with that name already exists</span>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default styled(PlayerSelector)`
  gap: 1rem;

  select {
    padding: 3px;
    max-width: 200px;

    border-left: 1px;
    border-left-color: #868a8e;
    border-top: 1px;
    border-top-color: #868a8e;
    box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
      0.5px 0.5px 0 0.5px #ffffff;
  }

  ${FlexBox} {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: flex-start;

    ${FlexBox} {
      flex-direction: row;
      gap: 1rem;

      ${Input} {
        max-width: unset;
        flex-grow: 1;
      }
    }

    span {
      color: maroon;
    }
  }
`;
