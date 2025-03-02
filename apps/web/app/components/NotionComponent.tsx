import { getArticleContent, getPageIds } from "@/utils/notionDatabase";

export default async function NotionComponent() {
  const pageIds = await getPageIds(process.env.NOTION_DB_ID as string);
  console.log("pageIds", pageIds);
  const articleContent = await getArticleContent(pageIds[0] || "");
  console.log("articleContent", articleContent);

  return (
    <div>
      <h1 style={{ color: "white" }}>{articleContent.content}</h1>
      {/* articleContent를 렌더링 */}
    </div>
  );
}
