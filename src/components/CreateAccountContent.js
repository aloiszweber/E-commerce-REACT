import React from 'react';

const CreateAccountContent = () => {
    return (
        <section className="body-section">
            <h1 style={{ textAlign: 'center', marginTop: '7vh', marginBottom: '1vh' }}> Create an account, and join us ! </h1>
            <form id="inscription_form">
                <div className="inputs">
                    <label htmlFor="firstname"> Firstname </label>
                    <input type="text" name="firstname" />
                </div>
                <div className="inputs">
                    <label htmlFor="lastname"> Lastname </label>
                    <input type="text" name="lastname" />
                </div>
                <div className="inputs" id="mail_input">
                    <label htmlFor="mail-address"> Mail </label>
                    <input type="email" name="mail-address" />
                </div>
                <div className="gender">
                    <label htmlFor="men"> Men </label>
                    <input type="checkbox" name="men" />
                    <label htmlFor="women"> Women </label>
                    <input type="checkbox" name="women" />
                    <label htmlFor="non-binary"> X </label>
                    <input type="checkbox" name="non-binary" />
                </div>
                <button> Create an account </button>
            </form>

        </section >
    );
};

export default CreateAccountContent;