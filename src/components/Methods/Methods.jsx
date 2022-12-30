import ivanTeaVideo from '../../videos/ivantea.mp4';
import kurilTeaVideo from '../../videos/kuril.mp4';
import saganTeaVideo from '../../videos/sagan.mp4';


function Methods() {
  return (
    <div className="methods">
      <a className='anchor' href="*" name="methods">
        <p className='block-title'>Способы приготовления</p>
      </a>
      <div className='methods__videos'>
        <div className='methods__video-container'>
        <p className='methods__video-title'>Иван-Чай</p>
          <video className='methods__video' src={ivanTeaVideo} controls="controls"></video>
        </div>
        <div className='methods__video-container'>
          <p className='methods__video-title'>Курильский Чай</p>
          <video className='methods__video' src={kurilTeaVideo} controls="controls"></video>
        </div>
        <div className='methods__video-container'>
          <p className='methods__video-title'>Саган-Дайля</p>
          <video className='methods__video' src={saganTeaVideo} controls="controls"></video>
        </div>
      </div>
    </div>
  )
}

export default Methods;