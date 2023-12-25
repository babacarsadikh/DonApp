import React, { useState, useEffect } from 'react';

import pmt1 from '/public/images/partners/payment.png'
import pmt2 from '/public/images/checkout/img-2.png'
import pmt3 from '/public/images/checkout/img-3.png'
import pmt4 from '/public/images/checkout/img-4.png'
import Image from 'next/image'
import Pays from '../../api/pays';
import Causes from '../../api/cause'
// import 'react-phone-number-input/style.css'
import { PhoneInput } from 'react-international-phone';
import "react-international-phone/style.css";
import { useRouter } from 'next/router';



const Donate = (props) => {
    function getParams() {
        const phoneNumberWithoutCountryCode = phone ? phone.replace(/^(\+\d{1,3}\s?)?/, '') : '';

        var randomDigits = Math.floor(Math.random() * 1000000000);
        const paddedRandomNumber = randomDigits.toString().padStart(7, '0');
        const randomRef = 'DKI' + paddedRandomNumber;
        var succeslink = 'https://dkrinfos.com/reussi.php';
        var failedlink = 'https://dkrinfos.com/echec.php';
        var ref = randomRef;
        var samamontant = montant
        if (!samamontant) {
            alert("Veuillez renseigner le montant avant de continuer.");    
            return;
        }
     
        // console.log(samamontant);
        sendPaymentInfos(ref,
            'DAKIN14898', 'iDnrqZwm252SnwDuQvtHSIVxUgpmFXLzfLONQOOkH51ylgmlNw',
            'dkrinformatique.sn', succeslink,
            failedlink, samamontant,
            'Dakar', mail, '', '', phoneNumberWithoutCountryCode);

    }

    const [phone, setPhone] = useState("");

    const [montant, setMontant] = useState('');
    const [mail, setMail] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (event) => {
        // Mettez à jour l'état avec le pays sélectionné
        setSelectedCountry(event.target.value);
    };
    const router = useRouter();

    const { causeId } = router.query; // Récupérez le paramètre 'causeId' de l'URL
    const selectedCause = Causes.find((cause) => cause.id === causeId);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://touchpay.gutouch.com/touchpay/script/prod_touchpay-0.0.1.js';
        script.type = 'text/javascript';
        script.async = true;
        document.head.appendChild(script);
        console.log('Pays sélectionné :', selectedCountry);
    }, [selectedCountry]);


    return (
        <div className="tp-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                     {selectedCause && (
                            <div>
                                {/* <h2>Informations de la campagne sélectionnée :</h2>
                                <p>But : {selectedCause.Goal} CFA</p>
                                <p>Recueillis : {selectedCause.Raised} CFA</p> */}
                                <div className="tp-donate-header">
                            <h2 style={{ color: "#1d5d1d" }}>FAIRE UN DON</h2>
                            <h3>CAMPAGNES : {selectedCause.cTitle}</h3>
                        </div>
                                {/* ... Affichez d'autres informations de la campagne */}
                            </div>
                            
                        )}
                     


                        <div id="Donations">
                            <form onSubmit={SubmitHandler} action="#">
                                <div className="tp-donations-amount">
                                    <h2>Entrez votre donation</h2>
                                    <div  className="input-group">
                                    <input required type="number" className="form-control" name="text" id="text" placeholder="1000"
                                        value={montant}
                                        onChange={(e) => setMontant(e.target.value)} />
                                    <div className="input-group-append">
                                        <span style={{height: '50px', background:"#1d5d1d", color:"white"}} className="input-group-text addon-dollar">CFA</span>
                                    </div>
                                    </div>
                                   
                                </div>
                                <div className="row">

                                </div>
                                <div className="tp-donations-details">
                                    <h2>MES COORDONNÉES</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="name" id="fname" placeholder="Nom complet" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <select className="form-control" id="donatorStatus" name="donatorStatus">
                                                <option value="donatorStatus">Selectionner votre statut:</option>

                                                <option value="entreprise">Entreprise</option>
                                                <option value="particulier">Particulier</option>
                                                <option value="association">Association</option>
                                            </select>
                                        </div>


                                        <div className="col-lg-12 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email (facultatif)" value={mail}
                                                onChange={(e) => setMail(e.target.value)} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <select
                                                className="form-control"
                                                id="country"
                                                name="country"
                                                value={selectedCountry}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="">Sélectionnez votre pays</option>
                                                {Pays.map(country => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            {/* <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Telephone" /> */}
                                            <PhoneInput
                                                className="form-control"
                                                defaultCountry="sn"
                                                value={phone}
                                                onChange={(phone) => setPhone(phone)}

                                            />
                                        </div>
                                        <div className="col-lg-12 col-12 mt-3 form-group">
                                            <textarea className="form-control" name="note" id="note" placeholder="Ecrivez un brief message (facultatif)"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-doanation-payment">
                                    <h2>méthode de paiement</h2>
                                    <div className="tp-payment-area">
                                        <div className="row">
                                            <div className="col-12">
                                       <Image
                                        src={pmt1} // Update the path to your image
                                        alt="Description of the image"
                                        width={800} // Set the desired width
                                        height={150} // Set the desired height
      />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-area sub-btn">
                                    <button onClick={(e) => {
      if (montant.value !== '') {
        getParams();
      } else {
        alert('Veuillez saisir le montant avant de continuer.');
      }
    }} type="submit" className="theme-btn submit-btn">Faire le don</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;