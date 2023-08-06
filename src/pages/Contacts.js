const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Vinnytsia, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <p>
                            <a href="tel:+79051234567">+38 (095) 3-999-100</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:nikitabashtovyi@gmail.com">
                                nikitabashtovyi@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
