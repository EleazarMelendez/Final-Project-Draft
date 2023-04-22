import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSecurePage = (returnPage = "/dashboard") => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace(`/login?ret=${returnPage}`);
    }
  }, [user, router]);
};