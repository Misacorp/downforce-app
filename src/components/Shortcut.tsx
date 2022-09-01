import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  Icon: ReactNode;
  className?: string;
  children: string;
}

const Shortcut = ({ to, Icon, className, children }: Props) => (
  <Link to={to} className={className}>
    {Icon}
    {children}
  </Link>
);

export default styled(Shortcut)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  text-align: center;
  max-width: 90px;
`;
