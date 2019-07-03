    <template>
  <section class="contact" id="contact">
    <div class="container text-center">
      <h2>Say Hello To Us!</h2>
      <div class="line"></div>
      <div class="about-text">
        <p class="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has
          been
          the industry's standard dummy text ever since the 1500s,good.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="location">
            <div class="row">
              <div class="col-1">
                <span class="quest text-center font-weight-bold">?</span>
              </div>
              <div class="col-11">
                <span class="font-weight-bold">Location:</span>
                <p class="text-muted">Admirala Geprata 14</p>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <span class="quest text-center font-weight-bold">?</span>
              </div>
              <div class="col-11">
                <span class="font-weight-bold">Phone:</span>
                <p class="text-muted">+1234321321</p>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <span class="quest text-center font-weight-bold">?</span>
              </div>
              <div class="col-11">
                <span class="font-weight-bold">Email:</span>
                <p class="text-muted">websitename@mail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <form id="contactForm" name="sentMessage">
            <div class="form-group">
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Name *"
                required="required"
                data-validation-required-message="Please enter your name."
                aria-invalid="false"
              >
            </div>
            <div class="form-group">
              <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Email *"
                required="required"
                data-validation-required-message="Please enter your email address."
              >
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="message"
                rows="4"
                placeholder="Your Message *"
                required="required"
                data-validation-required-message="Please enter a message."
              ></textarea>
            </div>
            <button id="sendMessageButton" class="btn btn-primary btn-xl" type="submit">
              Send
              Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
    
  <script>
export default {
  name: "Contact",
  props: {
    msg: String
  }
};
</script>  