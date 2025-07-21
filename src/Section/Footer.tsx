
import { footer_img } from '../constants/footer.ts';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-white text-center py-8 border-t border-gray-200
    bg-gradient-to-bl from-zinc-50 to-zinc-300
    
    ">
      <div className="flex flex-col items-center justify-center gap-0">
        {/* Primeira linha */}
        <div className="flex items-center justify-center gap-2 text-gray-700 text-sm font-medium">
          <span>© {currentYear}</span>
          <span className="text-sky-400 text-lg">💙</span>
          <span>Feito Pela UniLib Team para Estudantes</span>
          <span className="text-sky-400 text-lg"></span>
        </div>
        {/* Social logos */}
        <div className="flex flex-row gap-4 justify-center my-2">
          {footer_img.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer">
              <img src={resource.img} alt={resource.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
        {/* Segunda linha */}
        <div className="text-xs text-gray-500 font-light">
          All copyrights reserved to UniLib Team
        </div>
      </div>
    </footer>
  );
}

export default Footer