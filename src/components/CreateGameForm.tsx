import styled from "styled-components/macro";

interface Props {
  className?: string;
}

const CreateGameForm = ({ className }: Props) => (
  <div className={className}>This is content</div>
);

export default styled(CreateGameForm)``;
