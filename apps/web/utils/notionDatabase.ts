import { n2m, notionClient } from "@/utils/notionClient";

/**
 * Notion 데이터베이스 조회
 * @param databaseId - 조회할 데이터베이스의 ID
 * @author 홍규진
 */
export const fetchNotionDatabase = async (databaseId: string) => {
  try {
    const response = await notionClient.databases.query({
      database_id: databaseId,
    });
    return response; // Notion 데이터베이스의 결과를 반환
  } catch (error) {
    console.error("Notion DB 조회 중 오류 발생:", error);
    throw new Error("데이터베이스를 가져오는 데 실패했습니다."); // 에러를 던져서 호출하는 쪽에서 처리할 수 있도록 함
  }
};

/**
 * 데이터베이스에서 페이지 ID 조회
 * @param databaseId - 조회할 데이터베이스의 ID
 * @returns 페이지 ID 배열
 * @author 홍규진
 */
export const getPageIds = async (databaseId: string) => {
  const response = await fetchNotionDatabase(databaseId);
  return response.results.map((result) => result.id);
};

/**
 * 페이지 ID에 해당하는 페이지 내용 조회 - Markdown 형식
 * @param pageId - 조회할 페이지의 ID
 * @returns 페이지 내용
 * @author 홍규진
 */
export const getArticleContent = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks);
};
