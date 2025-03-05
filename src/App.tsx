import { useEffect } from "react";
import AppRoutes from "./routes/routes";
// import { syncWithSupabase, listenForRealtimeChanges } from "./features/sync/sync";
import { useAuthStore } from "./state/useAuthStore";

const App = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      // syncWithSupabase(); // Sync data when user logs in
      // listenForRealtimeChanges(); // Listen for realtime updates
    }
  }, [user]);

  return <AppRoutes />;
};

export default App;
