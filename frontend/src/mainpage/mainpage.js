import FrameComponent1 from "../FrameComponent/framecomponent";
import MessageFrame from "../messageframe/messageframe";
import NotePad from "../notepad/notepad";
import "./mainpage.css";

const MainPage = (props) =>
{
    let x=true;
  return (
    <div className="main-page1">
      <FrameComponent1 />
      {
        !sessionStorage.id?
        <>
        <main className="frame-main" onClick={sessionStorage.id=true}>
        <div className="frame-child1" />
        <MessageFrame imageRemovebgPreview1="/imageremovebgpreview-12@2x.png" />
        <div className="endtoend-encryption-parent">
          <img
            className="endtoend-encryption-icon1"
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
          <div className="end-to-end-encrypted2">end-to-end encrypted</div>
        </div>
      </main>
        </>:<NotePad/>
      }
    </div>
  );
};

export default MainPage;