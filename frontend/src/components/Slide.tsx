type PropsType = {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
  index: number;
};

const Slide = (props: PropsType) => {
  const { id, text, imageURL, audioURL, index } = props;
  return (
    <div
      key={id}
      className="slide-container"
      style={{ translate: `${-100 * index}%` }}
    >
      <audio src={audioURL} controls className="slide-audio"></audio>
      <div className="slide-info">
        <h2 className="slide-text">Slide number: {id}</h2>
        <p className="slide-text">{text}</p>
      </div>
      <img src={imageURL} className="slide-img" alt={`Slide ${id}`} />
    </div>
  );
};

export default Slide;
