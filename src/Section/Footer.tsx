import { footer_img, logoFooter } from '../constants/footer.ts';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="footer-bg elemento">
              <div className='flex md:gap-[60%] gap-40'>
                <Link to={ logoFooter.link }> <img 
                  src={ logoFooter.img } 
                  alt={ logoFooter.alt }
                  className='footer-logo' /> </Link>
                  <div className='footer-social'>
                    {footer_img.map((resource, index) => (
                      <div key={index}>
                        <div >
                          <Link to={resource.link } target='_blank'><img src={ resource.img } alt={ resource.alt } /></Link>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>
        </div>
    </footer>
  )}

export default Footer