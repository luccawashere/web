export default function Index() {
  return (
    <>
      <h1 className="rainbow-text">hi</h1>
      <audio controls>
        <source src="/cocaine.mp3" type="audio/mpeg"/>
      </audio>
      <i className="iconVolume bx bx-tada bx-flip-vertical bxs-volume-full" id="iconVolume" onclick="toggleMute();"></i
    </> 
  )
}