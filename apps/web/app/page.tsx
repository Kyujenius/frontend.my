import styles from "./page.module.css";
import FallingTextContainer from "@ui/Common/FallingTextContainer";
import NotionComponent from "@/app/components/NotionComponent";
export default async function Home() {
  return (
    <>
      <FallingTextContainer
        trigger="hover"
        text="안녕하세요 저는 홍규진 입니다. 배우고 익히는 것을 좋아해요"
        highlightWords={["홍규진", "배우고", "익히는"]}
        highlightColor="blue"
        gravity={0.05}
        fontSize="2rem"
      >
        <></>
      </FallingTextContainer>
      <NotionComponent />
    </>
  );
}
