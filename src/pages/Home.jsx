import React from 'react';
import MainArticle from '../components/MainArticle'
import NewContainer from '../components/NewContainer'
import ArticlesContainer from '../components/ArticlesContainer'

const Home = () => {
    return (
        <>
        <div className="md:flex md:gap-8 md:mb-10">
          <MainArticle />
          <NewContainer />
        </div>
        <ArticlesContainer /> 
        </>
    );
}

export default Home;
