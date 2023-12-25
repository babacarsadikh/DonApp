import React from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Error from '../../components/404'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const StoryPage = (props) => {

    return (
        <div>
            <Navbar/>
            <Error/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


