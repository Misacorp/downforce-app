import styled from "styled-components/macro";
import TaskBar from "@/components/lib/TaskBar";
import Desktop from "@/components/Desktop";
import StartMenu from "@/components/StartMenu";
import Routes from "@/components/Routes";

interface Props {
  className?: string;
}

/**
 * The purpose of this page is to prevent bots etc. that visit the
 * application from making API calls on their initial visit.
 * @param className Class name
 * @constructor
 */
const Main = ({ className }: Props) => (
  <div className={className}>
    <Routes />

    <Desktop />

    <TaskBar list={<StartMenu />} />
  </div>
);

export default styled(Main)`
  background-color: #018281;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;

  ${TaskBar} {
    height: 100px !important;
  }
`;
