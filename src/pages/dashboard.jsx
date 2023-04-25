import { useSecurePage } from "@/lib/useSecurePage";
import { useAddUserToPreferencesTable } from "@/lib/useAddUserToPreferencesTable";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import CountryCheckboxes from "@/components/CountryCheckboxes";
import Menu from "@/components/Menu"
import SpinningGlobe from "@/components/SpinningGlobe";

const Dashboard = () => {

useSecurePage();
useAddUserToPreferencesTable();

  const supabaseClient = useSupabaseClient();

  return (
    <div class="app slide">
  <Menu />
  <div className="btn-cont">
      <button className="btn"
        onClick={() => {
          supabaseClient.auth.signOut();
        }}
      >
        Log out
      </button> </div>
      <div className="main-container">
      <SpinningGlobe /> 
      </div>  
  <CountryCheckboxes />
    </div>
  );
};

export default Dashboard;