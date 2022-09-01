import styled from "styled-components/macro";

interface Props {
  className?: string;
}

const Games = ({ className }: Props) => (
  <div className={className}>Check out this list of games</div>
);

export default styled(Games)``;
