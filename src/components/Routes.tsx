import { Routes as RouterRoutes, Route, useNavigate } from "react-router-dom";
import CreateGameForm from "@/components/CreateGameForm/CreateGameForm";
import { Bookmark, FilePen } from "@react95/icons";
import PageModal from "@/components/PageModal";
import Games from "@/components/Games/Games";

/**
 * Routes
 * @constructor
 */
const Routes = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };

  return (
    <RouterRoutes>
      <Route
        path="/create-game"
        element={
          <PageModal
            icon={<FilePen variant="32x32_4" />}
            title="Create Game"
            onClose={closeModal}
          >
            <CreateGameForm />
          </PageModal>
        }
      />

      <Route
        path="/games"
        element={
          <PageModal
            icon={<Bookmark variant="32x32_4" />}
            title="Games"
            onClose={closeModal}
          >
            <Games />
          </PageModal>
        }
      />

      <Route path="/" element={null} />
    </RouterRoutes>
  );
};

export default Routes;
