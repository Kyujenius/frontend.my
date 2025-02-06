import { useQuery } from "@tanstack/react-query";
import { Client } from "@notionhq/client";

const client = new Client({ auth: process.env.NOTION_API_KEY });

export function useNotionDatabase(databaseId: string) {
  return useQuery({
    queryKey: ["notion-database", databaseId],
    queryFn: async () => {
      const databases = await client.databases.query({
        database_id: databaseId,
      });
      return databases;
    },
    staleTime: 5 * 60 * 1000, // 5분
  });
}
