"use client";

import { useParams } from "next/navigation";
import UserProfile from "@/components/UserProfile";

export default function UserPage() {
  const params = useParams();
  const username = Array.isArray(params.username) ? params.username[0] : params.username;

  if (!username) return null;

  return <UserProfile username={decodeURIComponent(username)} />;
}
