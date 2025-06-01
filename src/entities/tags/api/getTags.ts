import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { Tag } from "../type";
import { formatTag } from "../utils";

const fetchTags = async (): Promise<Tag[]> => {
  try {
    const response = await apiRequest<Tag[]>("/tags");
    if (!response) throw new Error("No response");
    return response.map(formatTag);
  } catch (error) {
    console.error("Failed to fetch tags", error);
    return [];
  }
};

export const getTags = unstable_cache(fetchTags, ["tags"], { revalidate: false });
