import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/Auth Pages/signIn Page/SignIn";
import Signup from "./pages/Auth Pages/signIn Page/Signup";
import Onboarding from "./pages/Onboarding/Onboarding";
import Competition from "./pages/Competition Pages/Competition";
import Dashboard from "./pages/Participant/Dashboard/Dashboard.jsx";
import Competitions from "./pages/Participant/Competitions/Competitions.jsx";
import { participantMenuItems } from "./public/constants/constants";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react/preset";
import ParticipantSidebar from "./pages/Participant/_components/ParticipantSidebar.jsx";
import CreateCompetition from "./pages/Participant/Competitions/Create Competition/CreateCompetition.jsx";

function App() {
  return (
    <body className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/ide" element={<Competition />} />
          <Route path="/dashboard/:userId" element={<ParticipantSidebar />}>
            <Route path="" element={<Dashboard />} />
            <Route path="competitions">
              <Route path="" element={<Competitions />} />
              <Route path="create" element={<CreateCompetition />} />
              <Route path=":competitionId" element={<Competition />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
