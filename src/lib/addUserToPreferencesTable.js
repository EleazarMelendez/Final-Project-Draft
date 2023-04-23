import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const addUserToPreferencesTable = () => {
    const user = useUser();

    useEffect(() => {
        async function checkUserPreferences() {
          if (user) {
            const { data, error } = await supabase
              .from('UserPreferences')
              .select('*')
              .eq('id', user.id);
            if (error) {
              console.error(error);
            } else if (data.length === 0) {
              await supabase.from('UserPreferences').insert({
                id: user.id,
                email: user.email,
              });
            }
          }
        }
        checkUserPreferences();
      }, [user]);
};