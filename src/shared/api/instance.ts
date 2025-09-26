import { setCookie } from "cookies-next";
import { generateToken } from "../utils/generateJWT";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const apiRequest = async <T = unknown>(url: string): Promise<T> => {
  const token = generateToken();
  setCookie("token", token);

  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json() as T;
  } catch (error) {
    console.log(error, "error");
    return null as T;
  }
};
