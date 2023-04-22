import { useState, useEffect } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Home() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const returnPath = router.query.ret?.toString();

  useEffect(() => {
    if (user) {
      router.replace(returnPath || "/dashboard");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div>
      <div>Back to main page</div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
      </div>
    );
  }

  return null;
}