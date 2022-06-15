import React from 'react';
import AppStore from '../assets/app-store.png';
import GooglePlay from '../assets/google-play.png';
import Facebook from '../assets/facebook.png';
import Youtube from '../assets/youtube.png';
import Instagram from '../assets/instagramme.png';

const Footer = () => {
    return (
        <footer>
            <ul id="footer-row1">
                <li> <a href="https://www.kolsquare.com/fr/blog/top-10-blogs-high-tech/#:~:text=Le%20journal%20du%20Geek%20est,en%20mati%C3%A8re%20de%20high%20tech."> Blog Tech | </a> </li>
                <li> <a href="https://www.legalplace.fr/guides/conditions-generales-vente/#:~:text=Les%20conditions%20g%C3%A9n%C3%A9rales%20de%20vente%20(CGV)%20font%20%C3%A9tat%20des%20modalit%C3%A9s,1%20du%20Code%20de%20commerce)."> General conditions | </a> </li>
                <li> <a href="http://www.worldlii.org/"> Legal information | </a> </li>
                <li> <a href="https://sociallinks.io/products/sl-professional?utm_source=google&utm_medium=cpc&utm_campaign=eu_search_other&utm_content=588748750764&utm_term=data%20protection&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGATgpytb7WbBGAWMJu1Zc9dkVOxMR2v8lqy915CrP5ozfUSQxfnfAtEaAi5MEALw_wcB"> Data protection | </a> </li>
                <li> <a href="https://old.dataone.org/best-practices/define-parameters"> Data parameters | </a> </li>
            </ul>

            <ul id="footer-row2">
                <div>
                    <li>
                        <h5> Applications New Style </h5>
                    </li>
                </div>
                <div className="inline_links">
                    <li> <a href="https://www.apple.com/befr/app-store/"> <img src={AppStore} width="100px" alt="" /> </a> </li>
                    <li> <a href="https://play.google.com/store/games?gl=BE&utm_source=emea_Med&utm_medium=hasem&utm_content=Sep2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-be-1001280-Med-hasem-py-Evergreen-Sep2020-Text_Search_BKWS%7CONSEM_kwid_43700007726293885&gclid=Cj0KCQjwwJuVBhCAARIsAOPwGATr9dmdf3RaIDPYvXJ5TdI3qqYlDFK9R7gC5yPZDzTyKSfygNF5LaUaAiVGEALw_wcB&gclsrc=aw.ds"> <img src={GooglePlay} width="100px" alt="" /> </a> </li>
                </div>
            </ul>

            <ul id="footer-row3">
                <div>
                    <li>
                        <h5> More inspiration </h5>
                    </li>
                </div>
                <div className="inline_links">
                    <li> <a href="https://www.facebook.com"> <img src={Facebook} alt="" /> </a> </li>
                    <li> <a href="https://www.youtube.com"> <img src={Youtube} alt="" /> </a> </li>
                    <li> <a href="https://www.instagram.com"> <img src={Instagram} alt="" /> </a> </li>
                </div>
            </ul>
        </footer>
    );
};

export default Footer;