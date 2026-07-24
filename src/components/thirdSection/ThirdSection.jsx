import keysIcon from '../../assets/keys.png'
import heartIcon from '../../assets/hearticon.png'
import "./thirdSection.css"

const ThirdSection = () => {
  return (
    <div className='third-section-container'>
        <div className='banner-photo mb-8'></div>
        <div className='grid grid-cols-[1.25fr_.75fr]'>
          <div>
              <div className="font-tangerine ps-6 text-msg relative">
                <img src={keysIcon} className="icon-keys" />
                <div className="ml-4 pb-2 border-t-2 w-2/3 border-petrol" />
                <p>Ya tenemos gran parte de</p>
                <p>nuestra casita lísta,</p>
                <p>pero si querés ayudarnos a</p>
                <p>terminar de completarla,</p>
                <p>te dejamos nuestro alías</p>
                <p>a disposíción <img src={heartIcon} alt="" className="icon-heart" /></p>
              </div>
              <div className='grid grid-cols-[.75fr_1.25fr] mt-4 text-xs'>
                <div>
                  <div className="leaf"></div>
                </div>
                <div className="font-baskerville pt-4">
                  <span>alias: JoacoyMile26</span>
                </div>
              </div>
          </div>
          <div className="pe-6 flex flex-col items-end">
            <div className="polaroid polaroid-1"></div>
            <div className="polaroid polaroid-2 rotate-[24deg] mt-2"></div>
          </div>
        </div>
    </div>
  )
}

export default ThirdSection
