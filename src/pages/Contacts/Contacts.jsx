import "./Contacts.css";

const Contacts = () => {
    function moveUpLabel(labelName) {
        document.querySelector(labelName).classList.add("label-focus");
    }

    function changeLabel(labelName, inputName) {
        document.querySelector(labelName).classList.remove("label-focus");
        if (document.querySelector(inputName).value === "") {
            document.querySelector(labelName).classList.remove("label-focus");
        } else {
            document.querySelector(labelName).classList.add("label-focus");
        }
    }

    return (
        <>
            <div className="contacts-container" id="section4">
                <h3 className="contacts-main-info">Contacts</h3>
                <p className="contacts-info">
                    Contact us today for all your frozen fruit needs! Whether
                    you have questions about our products or want to place an
                    order, our team is ready to assist you. Get in touch with us
                    by phone or email and we’ll get back to you as soon as
                    possible. Let us help you find the perfect frozen fruit
                    solution for your business.
                </p>
                <div className="contacts-icons-container">
                    <div className="icon-container">
                        <i className="fa-solid fa-envelope"></i>
                        <p>dordyaysberries@gmail.com</p>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-phone"></i>
                        <p>+380968065513</p>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="c-address">
                            Central street, 34B Tyachiv district Transcarpathian
                            region Ukraine
                        </p>
                    </div>
                </div>
            </div>
            <div className="form-map-container">
                <form
                    className="form"
                    action="mailto:hokageow@icloud.com"
                    method="post"
                    encType="text/plain"
                >
                    <p className="form-info">contact us</p>
                    <div className="input-container">
                        <input
                            id="first-name"
                            className="input1"
                            onFocus={() => moveUpLabel(".label1")}
                            onBlur={() => changeLabel(".label1", ".input1")}
                            type="text"
                        />
                        <label className="label1" htmlFor="first-name">
                            First Name
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            id="last-name"
                            className="input2"
                            onFocus={() => moveUpLabel(".label2")}
                            onBlur={() => changeLabel(".label2", ".input2")}
                            type="text"
                        />
                        <label className="label2" htmlFor="last-name">
                            Last Name
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            id="tel"
                            className="input3"
                            onFocus={() => moveUpLabel(".label3")}
                            onBlur={() => changeLabel(".label3", ".input3")}
                            type="tel"
                        />
                        <label className="label3" htmlFor="tel">
                            Phone Number
                        </label>
                    </div>
                    <div className="input-container">
                        <textarea
                            className="input4"
                            onFocus={() => moveUpLabel(".label4")}
                            onBlur={() => changeLabel(".label4", ".input4")}
                            name=""
                            id="message"
                            cols="10"
                            rows="10"
                        ></textarea>
                        <label className="label4" htmlFor="message">
                            Message
                        </label>
                    </div>
                    <input
                        className="form-submit-btn"
                        type="submit"
                        value="Send Message"
                    />
                </form>
                <iframe
                    className="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0764004226559!2d23.74658175529479!3d48.10434021444485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47379f8eb1dc7f03%3A0x6e39e1068f4cb4a!2sYagoda%20Karpat%2C%20LLC!5e0!3m2!1sen!2sua!4v1722068818836!5m2!1sen!2sua"
                ></iframe>
            </div>
        </>
    );
};
export default Contacts;
