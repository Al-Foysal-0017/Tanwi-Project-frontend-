import React from "react";
import "./Contact.css";

const Contact = () => {
  // const handleUrl = (url) => {
  //     return () => window.open(url)
  // }

  return (
    <section
      className="contact-container d-flex justify-content-center"
      id="contact"
    >
      <div className="text-center pt-5 ">
        <h6 className="text-green">Contact us</h6>
        <h1 className="text-white">Always connect with us</h1>
        <div className="d-flex justify-content-center">
          <div>
            <input
              type="text"
              placeholder="E-mail"
              className="mt-3 mail-box"
              required
            ></input>
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="mt-3 mail-box"
              required
            ></input>
            <br />
            <input
              type="text"
              placeholder="your message"
              className="mt-3 msg"
              required
            ></input>
            <br />
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={console.log("clicked")}
            >
              submit
            </button>
          </div>
        </div>

        {/* <form>
               <div class="form-group">
                    <label for="usr">E-mail</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="texts" class="form-control" id="name"/>
                </div>
                <div class="form-group">
                    <label for="msg">Your message</label>
                    <input type="text" class="form-control" id="msg"/>
                </div>
               </form> */}
      </div>
    </section>
  );
};

export default Contact;
