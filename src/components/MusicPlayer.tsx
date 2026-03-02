import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const tryPlay = () => {
      audioRef.current?.play().then(() => {
        setPlaying(true);
        document.removeEventListener("click", tryPlay);
        document.removeEventListener("touchstart", tryPlay);
        document.removeEventListener("scroll", tryPlay);
      }).catch(() => {});
    };
    // Browsers block autoplay without user interaction, so we attach to first interaction
    document.addEventListener("click", tryPlay);
    document.addEventListener("touchstart", tryPlay);
    document.addEventListener("scroll", tryPlay);
    // Also attempt immediate autoplay (works in some browsers)
    tryPlay();
    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, []);
  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }
  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-song.mpeg" loop preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full bg-maroon border border-border shadow-lg flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
        aria-label={playing ? "Mute music" : "Play music"}
      >
        {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
};
export default MusicPlayer;