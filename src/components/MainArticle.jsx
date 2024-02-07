import { Link } from 'react-router-dom';
import imageMobile from '../assets/images/fondo-web-desktop.png'
import imageDesktop from '../assets/images/fondo-web-desktop.png'
const MainArticle = () => {
    return (
        <section className='mb-12 md:mb-0'>
        <picture>
          <source media='(max-width: 640px)' srcSet={imageMobile} />
          <source media='(min-width: 641px)' srcSet={imageDesktop} />
          <img src={imageMobile} alt="image" />
        </picture>
        <div className='sm:flex'>
          <div className='flex-1 py-6'>
            <h2 className='text-[40px] leading-none font-bold sm:text-[58px]'>TDA's Para Estructuras de Datos en Java.</h2>
          </div>
          <div className='flex-1  pt-9 px-4'>
            <p className='mb-10 text-[13px] sm:text-[15px] '>Temas fundamentales de Programación Orientada a Objetos (POO) y Estructuras de Datos (EDD) en el contexto de Java. Implementaciones de las interfaces proporcionadas por la cátedra de Estructuras de Datos, Departamento de Ciencias de la Computación, <a href="https://www.uns.edu.ar/" className='text-SoftOrange'>Universidad Nacional del Sur</a>.</p>
            <Link to='/Blogs'>
            <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue '>Ver más</button>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default MainArticle;
