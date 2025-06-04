import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { User } from "../type";

const fetchUser = async (): Promise<User> => {
  const response = await apiRequest<User>(`/user`);
  return response;
};

export const getUser = unstable_cache(fetchUser, ["user"], { revalidate: false });
