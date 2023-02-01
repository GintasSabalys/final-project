import React from 'react';
import '../../Shared/Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-name'>
                        <h4>PLOKŠTELIŲ KOKYBĖS APRAŠYMAS</h4>
                        <ul className='href-ul'>
                            <li><a className='li-a-tag' href="https://vinyloteka.lt/ploksteliu-kokybe/" aria-label="Skaityti daugiau">Skaityti daugiau</a></li>
                        </ul>
                    </div>
                    <div className='footer-name'>
                        <h4>PREKIŲ UŽSAKYMAS IR PRISTATYMAS</h4>
                        <ul className='href-ul'>
                            <li><a className='li-a-tag' href="https://vinyloteka.lt/prekiu-pristatymas/" aria-label="Skaityti daugiau">Skaityti daugiau</a></li>
                        </ul>
                    </div>
                    <div className='footer-name'>
                        <h4>PREKIŲ GRĄŽINIMAS</h4>
                        <ul className='href-ul'>
                            <li><a className='li-a-tag' href="https://vinyloteka.lt/prekiu-grazinimas/" aria-label="Skaityti daugiau">Skaityti daugiau</a></li>
                        </ul>
                    </div>
                    <div className='footer-name'>
                        <h4>PLOKŠTELIŲ SUPIRKIMAS</h4>
                        <ul className='href-ul'>
                            <li><a className='li-a-tag' href="https://vinyloteka.lt/ploksteliu-supirkimas/" aria-label="Skaityti daugiau">Skaityti daugiau</a></li>
                        </ul>
                    </div>
                    <div className='footer-name'>
                        <h4>PRIVATUMO POLITIKA</h4>
                        <ul className='href-ul'>
                            <li><a className='li-a-tag' href="https://vinyloteka.lt/privatumo-politika/" aria-label="Skaityti daugiau">Skaityti daugiau</a></li>
                        </ul>
                    </div>
                    <div className='footer-name'>
                        <h4>© 2021 | VINYLOTEKA.LT</h4>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;