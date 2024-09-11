import { UserProvider } from "./auth/Auth";

const AppProvider = ({ children }) => (
  <>
    <UserProvider>{children}</UserProvider>
  </>
);

export default AppProvider;
