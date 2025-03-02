import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

/**
 * Notion API 클라이언트 생성
 * @author 홍규진
 */
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * Notion 페이지 내용을 Markdown 형식으로 변환
 * @author 홍규진
 */
export const n2m = new NotionToMarkdown({
  notionClient: notionClient,
});
