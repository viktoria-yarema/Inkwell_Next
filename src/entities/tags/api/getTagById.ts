import { apiRequest } from "@/shared/api/instance";
import { unstable_cache } from "next/cache";
import { Tag } from "../type";
import { formatTag } from "../utils";

const fetchTagById = async (id: string): Promise<Tag> => {
  const response = await apiRequest<Tag>(`/tags/${id}`);
  return formatTag(response);
};

export const getTagById = unstable_cache(fetchTagById, ["tag-by-id"], { revalidate: false });
