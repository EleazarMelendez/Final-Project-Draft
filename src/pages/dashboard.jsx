import { useSecurePage } from "@/lib/useSecurePage";
import { addUserToPreferencesTable } from "@/lib/addUsertoPreferencesTable";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import CountryCheckboxes from "@/components/CountryCheckboxes";
import Menu from "@/components/Menu"
import SpinningGlobe from "@/components/SpinningGlobe";

const Dashboard = () => {

  useSecurePage();
  addUserToPreferencesTable();
  const supabaseClient = useSupabaseClient();

  return (
    <div class="app slide">
  <Menu />
      <button
        onClick={() => {
          supabaseClient.auth.signOut();
        }}
      >
        Log out
      </button>
      <SpinningGlobe />   
  <CountryCheckboxes />
    </div>
  );
};

export default Dashboard;