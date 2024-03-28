import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useProtectAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/authentication/signin");
    }
  }, []);

  return null;
}
