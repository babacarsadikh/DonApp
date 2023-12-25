import cimg1 from '/public/images/cause/talibe.jpeg'
import cimg2 from '/public/images/cause/ecole.jpeg'
import cimg3 from '/public/images/cause/img-3.jpg'
import cimg4 from '/public/images/cause/puit.jpg'
import cimg5 from '/public/images/cause/img-5.jpg'
import cimg6 from '/public/images/cause/img-6.jpg'

import cimgSingle1 from '/public/images/cause/single-1.jpg'
import cimgSingle2 from '/public/images/cause/single-2.jpg'
import cimgSingle3 from '/public/images/cause/single-3.jpg'
import cimgSingle4 from '/public/images/cause/single-4.jpg'
import cimgSingle5 from '/public/images/cause/single-5.jpg'
import cimgSingle6 from '/public/images/cause/single-6.jpg'


const Causes = [
    {
        id: '1',
        cImg:cimg1,
        cImgSingle:cimgSingle1,
        process:'65',
        cTitle: 'UN ENFANT TALIBÉ UN PULL', 
        slug:'Financial-Help-for-Poor-Families',
        Goal:'1 000 000',
        Raised:'250 000',
        authorName:'Laura Faiary',
    },
    {
        id: '2',
        cImg:cimg2,
        cImgSingle:cimgSingle2,
        process:'75',
        cTitle: 'Éducation pour les enfants ', 
        slug:'Education-for-Poor-Children',
        Goal:'3 000',
        Raised:'2 000',
        authorName:'Laura Faiary',
    },
    {
        id: '3',
        cImg:cimg4,
        cImgSingle:cimgSingle4,
        process:'95',
        cTitle: 'CONSTRUCTION DE PUITS', 
        slug:'Food-And-Home-for-Children',
        Goal:'650 000',
        Raised:'0',
        authorName:'Laura Faiary',
    },
    // {
    //     id: '4',
    //     cImg:cimg3,
    //     cImgSingle:cimgSingle3,
    //     process:'85',
    //     cTitle: 'Envoyer un enfant à l’école pendant un certain tempsr', 
    //     slug:'Send-Child-to-School-for-a-Year',
    //     Goal:'3,000',
    //     Raised:'2,000',
    //     authorName:'Laura Faiary',
    // },

    // {
    //     id: '5',
    //     cImg:cimg5,
    //     cImgSingle:cimgSingle5,
    //     process:'55',
    //     cTitle: 'Pure Water For The World', 
    //     slug:'Pure-Water-For-The-World',
    //     Goal:'3,000',
    //     Raised:'2,000',
    //     authorName:'Laura Faiary',
    // },
    // {
    //     id: '6',
    //     cImg:cimg6,
    //     cImgSingle:cimgSingle6,
    //     process:'35',
    //     cTitle: 'Recycling For Charity', 
    //     slug:'Recycling-For-Charity',
    //     Goal:'3,000',
    //     Raised:'2,000',
    //     authorName:'Laura Faiary',
    // }
]

export default Causes;