import { useState } from "react"

const Showreel = () => {
    const [play, setPlay] = useState(false)

  return play ? (
    <iframe
          className="showreel-vid"
          width="1008"
          height="567"
          src={`https://www.youtube.com/embed/2LA1UIEf_vc?controls=0&autoplay=1&mute=0&playlist=2LA1UIEf_vc&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
  ) 
  : (
    <>
    <div className="showreel-thumbnail" onClick={() => setPlay(true)}>
        <img className="thumbnail" src={`https://img.youtube.com/vi/2LA1UIEf_vc/maxresdefault.jpg`} alt="press-to-play"/>
        <img className="play-button" src="images/play.png" alt="" />
      </div>
    </>
  )
}

export default Showreel