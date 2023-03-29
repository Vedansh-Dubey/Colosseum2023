import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
const photos = [
    { src: "https://i.ibb.co/Wfc8pCK/IMG-20190508-WA0009.jpg" },
    { src: "https://i.ibb.co/48bhQv3/IMG-20190508-WA0005.jpg" },
    { src: "https://i.ibb.co/RN0W4Cz/IMG-20190508-WA0002.jpg" },
    { src: "https://i.ibb.co/ygVW69h/Colosseum-Ianugral-Function.jpg" },
    { src: "https://i.ibb.co/xDrLbgm/MG-2328.jpg" },
    { src: "https://i.ibb.co/5TMJ7pf/MG-2325.jpg" },
    { src: "https://i.ibb.co/Fqvzzf2/IMG-8316.jpg" },
    { src: "https://i.ibb.co/C0gj4L1/IMG-0010.jpg" },
    { src: "https://i.ibb.co/523J17G/IMG-9744.jpg" },
    { src: "https://i.ibb.co/pxyWhkn/IMG-0047.jpg" },
    { src: "https://i.ibb.co/nRVhDqp/IMG-9814.jpg" },
    { src: "https://i.ibb.co/m6GNqL6/IMG-9352.jpg" },
    { src: "https://i.ibb.co/8XDJMrJ/IMG-9995.jpg" },
    { src: "https://i.ibb.co/ZmkM8hD/IMG-9841.jpg" },
    { src: "https://i.ibb.co/895pZgs/IMG-9856.jpg" },
    { src: "https://i.ibb.co/CBBZrng/IMG-8616.jpg" },
    { src: "https://i.ibb.co/HxVKBBq/IMG-0073.jpg" },
    { src: "https://i.ibb.co/26ZhTzS/IMG-0003.jpg" },
    { src: "https://i.ibb.co/mXTm1nm/IMG-9741.jpg" },
    { src: "https://i.ibb.co/khfxTPj/IMG-9994.jpg" },
    // { src: "https://i.ibb.co/mBD2vYZ/IMG-9716.jpg" },
];

const GalleryComponent = () => {
    return (
        <div className='galery'>
        <ResponsiveGallery
            className="gal"
            images={photos}
        >
        </ResponsiveGallery>
        </div>
    );
};

export default GalleryComponent;

