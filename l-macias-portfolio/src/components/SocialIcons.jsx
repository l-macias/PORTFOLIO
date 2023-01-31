import navIcon1 from '../assets/img/linkedin-icon.png'
import navIcon2 from '../assets/img/github-icon.png'
import navIcon3 from '../assets/img/whatsapp-icon.png'

export const SocialIcons = () => {
  return (
    <div className="social-icon">
              <a href="https://linkedin.com/in/l-macias" target={'_blank'}><img src={navIcon1} alt="Linkedin"/></a>
              <a href="https://github.com/l-macias" target={'_blank'}><img src={navIcon2} alt="Github" /></a>
              <a href="https://wa.me/5493413168242" target={'_blank'}><img src={navIcon3} alt="Whatsapp" /></a>
            </div>
  )
}
