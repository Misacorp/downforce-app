import { Routes as RouterRoutes, Route, useNavigate } from "react-router-dom";
import CreateGameForm from "@/components/CreateGameForm";
import { Bookmark, FilePen } from "@react95/icons";
import PageModal from "@/components/PageModal";

/**
 * Routes
 * @constructor
 */
const Routes = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    console.log("nav");
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
            <CreateGameForm />
          </PageModal>
        }
      />
    </RouterRoutes>
  );
};

export default Routes;
