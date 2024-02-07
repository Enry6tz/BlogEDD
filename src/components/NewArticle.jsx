import React from 'react';
import { Link } from 'react-router-dom';

const NewArticle = ({ title, text, path }) => {
    return (
        <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none">
            <Link to={path}>
            <h2 className="hover:text-SoftOrange cursor-pointer mb-3 font-bold text-[20px]">{title}</h2>
            </Link>
            <p className="text-[15px]">{text}</p>
        </article>
    );
}

export default NewArticle;
