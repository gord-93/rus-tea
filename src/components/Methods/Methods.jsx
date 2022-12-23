import ivanTeaVideo from '../../videos/ivantea.mp4';
import kurilTeaVideo from '../../videos/kuril.mp4';
import saganTeaVideo from '../../videos/sagan.mp4';


function Methods() {
  return (
    <div className="methods">
      <p className='block-title'>Способы приготовления</p>
      <div className='methods__videos'>
        <div className='methods__video-container'>
          <video className='methods__video' src={ivanTeaVideo} controls="controls"></video>
          <p className='methods__video-title'></p>
        </div>
        <video className='methods__video' src={kurilTeaVideo} controls="controls"></video>
        <video className='methods__video' src={saganTeaVideo} controls="controls"></video>
      </div>
    </div>
  )
}

export default Methods;