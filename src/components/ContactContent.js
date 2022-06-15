import React from 'react';
import Contact2 from '../assets/contact2.png';

const ContactContent = () => {
    return (
        <section>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}> Need help ? Customer service available 24/7 </h1>
                <div id="contact_box">
                    <div id="block-image">
                        <img src={Contact2} width="100px" alt="contact client" />
                    </div>
                    <div id="block-information">
                        <br />
                        <p style={{ fontSize: 'large', fontWeight: '700', paddingBottom: '1vh', color: 'white' }}> Contact us </p>
                        <p style={{ color: 'white' }}> Our customer service will answer all your questions </p>
                        <p style={{ paddingTop: '1vh', paddingBottom: '3vh', color: 'white' }}> To contact our customer service,
                            please contact
                            us at <i id="mail-adress">
                                newstyle@hotmail.com </i> </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactContent;