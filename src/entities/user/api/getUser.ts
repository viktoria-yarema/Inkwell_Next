
import { User } from "../type";
import { apiRequest } from "@/shared/api/instance";

export const getUser = async (): Promise<User> => {
  const response = await apiRequest<User>(`/user`);

  return response;
};
