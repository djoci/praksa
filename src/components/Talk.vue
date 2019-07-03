<template>
  <section class="talk">
    <div class="container text-center">
      <h2>SOME TALK OF OUR CLIENTS</h2>
      <!-- carousel -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <img class="d-block w-100" src="..." alt="First slide"> -->
            <div class="row">
              <div class="col-sm-6">
                <div class="mr-sm-2 talk-box">
                  <img src="../assets/img/momak.png" alt>
                  <h6>OLIVER GOMEZ</h6>
                  <p>CEO of google</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="ml-sm-2 talk-box">
                  <img src="../assets/img/devojka.png" alt>
                  <h6>RITA WATSON</h6>
                  <p>Web Designer</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- <img class="d-block w-100" src="..." alt="Second slide"> -->
            <div class="row">
              <div class="col-sm-6">
                <div class="mr-sm-2 talk-box">
                  <img src="../assets/img/momak1.png" alt>
                  <h6>OLIVER GOMEZ</h6>
                  <p>CEO of google</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="ml-sm-2 talk-box">
                  <img src="../assets/img/devojka1.png" alt>
                  <h6>RITA WATSON</h6>
                  <p>Web Designer</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- <img class="d-block w-100" src="..." alt="Third slide"> -->
            <div class="row">
              <div class="col-sm-6">
                <div class="mr-sm-2 talk-box">
                  <img src="../assets/img/momak2.png" alt>
                  <h6>OLIVER GOMEZ</h6>
                  <p>CEO of google</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="ml-sm-2 talk-box">
                  <img src="../assets/img/devojka2.png" alt>
                  <h6>RITA WATSON</h6>
                  <p>Web Designer</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s,good.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of carousel -->
    </div>
  </section>
</template>
<script>
export default {
  name: "Talk",
  props: {
    msg: String
  }
};
</script>