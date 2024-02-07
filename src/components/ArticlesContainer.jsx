import React from 'react';
import Article from './Article';
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/Stack.jpg'
import img3 from '../assets/images/Queue.jpg'
const ArticlesContainer = () => {
    return (
        <section className='md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center'>
            <Article
                img={img1}
                number='01'
                title='Introduccion'
                text='Permite la creación de clases y métodos que trabajan con tipos de datos específicos.'
                path='/Genericidad'
            />
            <Article
                img={img2}
                number='02'
                title='Stack'
                text='Estructura de datos que sigue el principio LIFO (Last In, First Out).'
                path='/Stack'
            />
            <Article
                img={img3}
                number='03'
                title='Queue'
                text='Estructura de datos que sigue el principio FIFO (First In, First Out).'
                path='/Queue'
            />
        </section>
    );
}

export default ArticlesContainer;
