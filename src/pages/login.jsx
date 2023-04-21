import { useState, useEffect } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const returnPath = router.query.ret?.toString();

  useEffect(() => {
    if (user) {
      router.replace(returnPath || "/");
    }
  }, [user, router]);

  if (!user) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    );
  }

  return null;
}