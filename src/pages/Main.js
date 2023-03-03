import NavCard from "../components/body/NavCard";
import RoomType from "../components/body/RoomType";
import CustomCarousel from "../components/body/Carousel";

function Main() {
    
    return (
        <>
            <CustomCarousel/> {/* 이미지 슬라이더 */}
            <RoomType/>       {/* 방 종류에 맞는 가구 보러가기 링크 */}
            <NavCard/>        {/* 다른 페이지로 이동하는 또 다른 링크 (이미지를 포함하는 버튼) */}
        </>
    )
}

export default Main;