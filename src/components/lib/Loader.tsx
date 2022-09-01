import React from "react";
import styled from "styled-components/macro";
import { Shdocvw257 } from "@react95/icons";
import FlexBox from "@/components/lib/FlexBox";

interface Props {
  className?: string;
}

/**
 * Loading indicator
 * @param className Class name
 * @constructor
 */
const Loader = ({ className }: Props) => (
  <FlexBox className={className}>
    <Shdocvw257 variant="48x48_4" />
    Loading…
  </FlexBox>
);

export default styled(Loader)`
  flex-direction: column;
  gap: 0.5rem;
`;
