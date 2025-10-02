import { useState, useEffect } from "react";

const Vid = (props: any) => {
  const [play, setPlay] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchTitle() {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${props.vid}&format=json`
        );
        const data = await res.json();
        setTitle(data.title);
      } catch (error) {
        console.error("Error fetching video title:", error);
      }
    }

    if (props.vid) {
      fetchTitle();
    }
  }, [props.vid]);

  return play ? (
    <iframe
      className="film-vid"
      width="576"
      height="345"
      src={`https://www.youtube.com/embed/${props.vid}?controls=0&autoplay=1&mute=0&playlist=${props.vid}&loop=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      allowFullScreen
    ></iframe>
  ) : (
    <>
      <div className="film-vid-thumbnail" onClick={() => setPlay(true)}>
        <img
          className="thumbnail"
          src={`https://img.youtube.com/vi/${props.vid}/maxresdefault.jpg`}
          alt="press-to-play"
        />
        <img className="play-button" src="images/play.png" alt="" />
        <h2 className="film-vid-name">{title}</h2>
      </div>
    </>
  );
};

export default Vid;
