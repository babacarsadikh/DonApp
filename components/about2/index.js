import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo'
import abimg from '/public/images/about.jpg'
import abimg2 from '/public/images/about/1.png'
import abimg3 from '/public/images/about/2.png'
import abimg4 from '/public/images/shape/shape2.png'
import Image from 'next/image'

const About2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-area section-padding">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-5 col-md-12  grid col-12">
                        <div className="video-area">
                            <Image src={abimg} alt="" />
                            <div className="entry-media video-holder video-btn2">
                                <VideoModal/>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-7 grid  col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>A propos de SOLIDARITE</span>
                                </div>
                                <h2>Khairah is <span>Nonprofit</span> Organization <span>For Help</span> Children.</h2>
                            </div>
                            <p>Le Mouvement Actions Citoyennes (MAC) est une communauté dynamique et passionnée de citoyens engagés pour le bien commun. Nous croyons en la force collective pour créer un impact positif dans notre société et façonner un avenir meilleur. Nos actions sont fondamentalement orientées vers la construction d'une société plus juste, transparente et participative. Nous sommes des citoyens engagés prêts à agir pour le bien commun.
Fondé sur les principes de citoyenneté active au service du développement de notre pays et ancré sur la restauration de nos valeurs fondamentales, notre mouvement vise à construire une société où chaque Sénégalais et Sénégalaise va compter quelque soit son appartenance ethnique, religieuse, géographique et orientation politique.
Notre mouvement se veut profondément citoyen mais aussi fondamentalement apolitique car il souhaite réconcilier les Sénégalais à travers une approche inclusive fondée sur des valeurs civiques et patriotiques. Nous souhaitons être le terreau qui regroupe tous les Sénégalais portant en bandoulière nos valeurs ancestrales de paix, de justice ,d’équité sociale, de solidarité et de partage au-delà des clivages partisans.</p>
                            <div className="ab-icon-area">
                                {/* <div className="about-icon-wrap">
                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <Image draggable="false" src={abimg2} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Save  Children.</Link></h2>
                                        </div>
                                    </div>
                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <Image draggable="false" src={abimg3} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Fresh And  Clean Water.</Link></h2>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <Image src={abimg4} alt="" />
            </div>
        </div>
    )
}

export default About2;