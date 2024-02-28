import FrameComponent from "../FrameComponent/framecomponent";
import "./messageframe.css";

const MessageFrame = ({ imageRemovebgPreview1 }) =>
{
  return (
    <section className="message-frame">
      <div className="remove-b-g-image" >
        <img
          className="image-removebg-preview-1-icon"
          loading="lazy"
          alt=""
          src={imageRemovebgPreview1}
        />
      </div>
      <h1 className="pocket-notes1">Pocket Notes</h1>
      <div className="send-and-receive-container">
        <p className="send-and-receive" >
          Send and receive messages without keeping your phone online.
        </p>
        <p className="use-pocket-notes">
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </section>
  );
};

export default MessageFrame;