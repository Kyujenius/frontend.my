import "server-only";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const client = new Client({
  auth: process.env.NOTION_SECRET_ID!,
});

export const n2m = new NotionToMarkdown({
  notionClient: client,
});
