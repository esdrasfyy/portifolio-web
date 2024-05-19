"use client"
import { useRouter } from "next/navigation";

function LinkDefault(route: string) {
  const router = useRouter();
  router.push(route);

}
export { LinkDefault };
