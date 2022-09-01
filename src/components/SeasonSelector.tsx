import styled from "styled-components/macro";
import { useQuery } from "@tanstack/react-query";
import config from "@/config";
import React, { FormEvent } from "react";
import Loader from "@/components/lib/Loader";
import Alert from "@/components/lib/Alert";
import Dropdown from "@/components/lib/Dropdown";
import Fieldset from "@/components/lib/Fieldset";
import { Season } from "@/types";

interface Props {
  onChange: (season: Season) => void;
  className?: string;
}

/**
 * Component to select a season from a list
 * @param onChange  Change handler
 * @param className Class name
 * @constructor
 */
const SeasonSelector = ({ onChange, className }: Props) => {
  /**
   * Fetch seasons from the API
   */
  const fetchSeasons = async (): Promise<Season[]> => {
    const response = await fetch(`${config.API_ENDPOINT}/season`, {
      method: "GET",
    });

    return response.json();
  };

  // Get seasons from the API
  const { isLoading, error, data } = useQuery(["seasons"], fetchSeasons);

  // Season names
  const options = data?.map((season: { name: string }) => season.name) ?? [];
  options.unshift("Select a season..."); // Add an option to indicate no selection has been made

  /**
   * Handles season selection change
   * @param event Change event
   */
  const onSeasonSelect = (event: FormEvent<HTMLSelectElement>) => {
    // Get season name from event
    const { value: seasonName } = event.target as HTMLSelectElement;

    // Do nothing if we don't have data
    if (!data) return;

    // Find the entire season object in the data
    const season = data.find((s: Season) => s.name === seasonName);

    // No season found (someone really broke something)
    if (!season) return;

    onChange(season);
  };

  return (
    <div className={className}>
      {Boolean(error) && (
        <Alert
          title="Network error"
          type="error"
          message="Attempting to load a list of active seasons from the network failed."
          closeAlert={() => {}}
        />
      )}

      {isLoading && <Loader />}

      {data && (
        <Fieldset legend="Season">
          <Dropdown options={options} onChange={onSeasonSelect} />
        </Fieldset>
      )}
    </div>
  );
};

export default styled(SeasonSelector)`
  ${Alert} {
  }
`;
