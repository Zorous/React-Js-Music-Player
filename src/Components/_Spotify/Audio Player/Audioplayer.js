import React,{ useEffect,useState,useRef } from 'react'
import '../css/Audioplayer.css'
import ProgressCircle from './ProgressCircle';
import Waveanimation from './Waveanimation';
import Controls from './Controls';

function Audioplayer({   
  currentTrack,
  CurrentIndex,
  setCurrentIndex,
  total })
   {  
 const [firstTrack,setfirstTrack]=useState();
 const [TracksTotal,setTracksTotal]=useState();


useEffect(()=>{
 if(total) {
  console.log("haha",total)
  console.log("haha",CurrentIndex)
  setTracksTotal(total.length)
  setfirstTrack(total[0]?.track.preview_url)
 }
})

    const audioRef = useRef(new Audio(firstTrack));

    const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[CurrentIndex]?.track.preview_url;

  useEffect(()=>{
    audioRef.current.src=firstTrack
    console.log(firstTrack)
  },[firstTrack])

useEffect(()=>{
  console.log(audioRef)
})


  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    console.log('0')

    if (audioRef.current.src) {
      console.log('1')

      if (isPlaying) {
        console.log('2')

        audioRef.current.play();
        startTimer();
      } else {
        console.log('3')
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [CurrentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
/*     console.log('next')
    console.log(TracksTotal,CurrentIndex)

    if (CurrentIndex > TracksTotal) {
      console.log('next - 2')
      setCurrentIndex(TracksTotal - CurrentIndex)
      
    }
     else{setCurrentIndex(CurrentIndex + 1);}; */
     if (CurrentIndex < TracksTotal - 1) {
      setCurrentIndex(CurrentIndex + 1);
    } else setCurrentIndex(0);
  };
  

  const handlePrev = () => {
    console.log('prev')

    if (CurrentIndex - 1 < 0) setCurrentIndex(TracksTotal - 1);
    else{ setCurrentIndex(CurrentIndex - 1);}
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (

    <div className='player-body'>
    <div className='player-left-body'>
    <ProgressCircle
    percentage={currentPercentage}
    isPlaying={true}
    image={currentTrack?.album?.images[0]?.url}
    size={300}
    color={"#1ed760"}/>
    </div>


    <div className='player-right-body'>
<p className='song-title'>{currentTrack?.name}</p>
<p className="song-artist">{artists.join(" | ")}</p>
<div className="player-right-bottom">
  <div className="song-duration">
    <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
    <Waveanimation isPlaying={isPlaying} />
    <p className="duration">0:30</p>
  </div>


  <Controls
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    handleNext={handleNext}
    handlePrev={handlePrev}
    total={total}
  />
</div>
    </div>
    </div>
  )
}

export default Audioplayer