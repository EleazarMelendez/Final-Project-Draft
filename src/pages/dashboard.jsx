import { useSecurePage } from "@/lib/useSecurePage";
import { addUserToPreferencesTable } from "@/lib/addUsertoPreferencesTable";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import CountryCheckboxes from "@/components/CountryCheckboxes";
import Menu from "@/components/Menu"

const Dashboard = () => {

  useSecurePage();
  addUserToPreferencesTable();
  const supabaseClient = useSupabaseClient();

  return (
    <div>
  <Menu />
      <button
        onClick={() => {
          supabaseClient.auth.signOut();
        }}
      >
        Log out
      </button>
  <CountryCheckboxes />
    </div>
  );
};

export default Dashboard;