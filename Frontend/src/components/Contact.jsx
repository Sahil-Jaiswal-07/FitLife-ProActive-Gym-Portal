import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact">
                <h1 className="heading-section">Contact Us</h1>
                <div className="container1">
                    <article className="contact-section">
                        <strong className="contact-heading">Head Branch Address</strong>
                        <p className="contact-paragraph">
                          FitnessClub,Near D.Y.Patil college,Akurdi,Pune
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Email</strong>
                        <p className="contact-paragraph">
                            FitLifeProActive@gmail.com
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Phone Number</strong>
                        <p className="contact-paragraph">
                            +91 7083849766 <br/>
                            +91 7888257256
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contact