import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { User } from "../type";

export const getRawUser = async (): Promise<User> => {
  const response = await apiRequest<User>(`/user`);
  return response;
};


export const getUser = async (): Promise<User> => {
return unstable_cache(getRawUser, ["user"], {
    revalidate: 60 * 60 * 24,
  })();
};