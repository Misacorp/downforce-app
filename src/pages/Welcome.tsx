import styled from "styled-components/macro";
import TaskBar from "@/components/lib/TaskBar";

interface Props {
  className?: string;
}

/**
 * The purpose of this page is not really to welcome new users. Instead, it prevents bots etc. that load visit the
 * application from making API calls on their initial visit.
 * @param className Class name
 * @constructor
 */
const Welcome = ({ className }: Props) => (
  <div className={className}>
    <TaskBar list={<p>Hello</p>} />
  </div>
);

export default styled(Welcome)`
  background-color: #018281;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;
