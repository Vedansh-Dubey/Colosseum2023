import GalleryComponent from '../../Sections/Gallery';
import './Gallery.css'
const GalleryPage = () => {
    return (
        <main className="main">
            <h2 className="heading">
                Past Glimpses
            </h2>
            <p className='para'>
                With a legacy of 13 years, Colosseum has been a platform for students from all over India to showcase their technical skills and innovative ideas
            </p>
            <hr className='hr'/>
            <p className='para'>
           
            <br/>

            We hope you enjoy browsing through the gallery of our past events and get a glimpse of the excitement and energy that Colosseum brings to the world of technology. Thank you for expressing your interest, and we look forward to welcoming you to our next edition of Colosseum!


                </p>
            <GalleryComponent className="gallery" />
        </main>
    );
};

export default GalleryPage