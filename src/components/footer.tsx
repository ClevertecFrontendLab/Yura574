import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import vk from '../assets/svg/vk.svg'


export const Footer = () => (
    <footer className='layout-main-page'>
        <div className="common_wrapper footer-wrapper">
            <div>© 2020-2023 Cleverland. <br/> Все права защищены.</div>
            <div className="icons-container">
                <a href='https://www.facebook.com/yura.sergeev.31'><img src={facebook} alt="facebook"/></a>
                <a href='https://instagram.com/yurasergeev05?igshid=ZDdkNTZiNTM='><img src={instagram} alt="instagram"/></a>
                <a href='https://vk.com/id155086759'><img src={vk} alt="vk"/></a>
                <a href='https://www.linkedin.com/in/yura-sergeev-b299a4205/'><img src={linkedin} alt="linkedin"/></a>
            </div>
        </div>
    </footer>
)

