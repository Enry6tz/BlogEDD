import React from 'react';
import NewArticle from './NewArticle';

const NewContainer = () => {
    return (
        <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
            <h1 className="text-SoftOrange text-4xl font-bold">TDA's</h1>
            <NewArticle
                title='Stack'
                text='LIFO (Last In, First Out). El último elemento ingresado es el primero en ser retirado.'
                path='/Stack'
            />
            <NewArticle
                title='Queue'
                text='FIFO (First In, First Out), donde el primer elemento ingresado es el primero en ser retirado. '
                path='/Queue'
            />
            <NewArticle
                title='Simple Linked List'
                text='Cada nodo contiene datos y una referencia al siguiente nodo en la secuencia.'
                path='/Genericidad'
            />
        </aside>
    );
}

export default NewContainer;
