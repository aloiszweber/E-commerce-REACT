import React from 'react';
import CreateAccountContent from '../components/CreateAccountContent';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const CreateAccount = ({ showLinks, setShowLinks, styles }) => {
    return (
        <div>
            <Navigation showLinks={showLinks} setShowLinks={setShowLinks} styles={styles} />
            <CreateAccountContent />
            <Footer />
        </div>
    );
};

export default CreateAccount;