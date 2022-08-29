import styled from "styled-components/macro";

interface Props {
  className?: string;
}

const Routes = ({ className }: Props) => (
  <div className={className}>Routes go here my dude</div>
);

export default styled(Routes)``;
