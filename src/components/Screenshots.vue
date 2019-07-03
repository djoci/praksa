<template>
  <div class="moj-carousel" id="screenshot">
    <div class="container text-center">
      <h2>App Screenshots</h2>
      <div class="about-text">
        <p class="lead">
          Most such devices are sold with several apps bundled as pre-installed software,
          such as a web browser, email client, calendar, mapping program.
        </p>
      </div>
    </div>
    <!-- carousel -->
    <div
      id="carouselExampleControls"
      class="carousel slide text-center mt-3"
      data-ride="carousel"
      data-interval="3000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <img src="../assets/img/caroseul1.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul3.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul4.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul5.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul3.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul4.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul5.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img src="../assets/img/caroseul3.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul4.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul5.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul1.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img src="../assets/img/caroseul4.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul5.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul1.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul3.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <img src="../assets/img/caroseul5.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul1.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul2.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul3.png" class="d-block w-100" alt="...">
            </div>
            <div class="col">
              <img src="../assets/img/caroseul4.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <a href="#carouselExampleControls" data-slide="prev" class="car left-car"></a>
        <a href="#carouselExampleControls" data-slide="next" class="car right-car"></a>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "Screenshots",
  props: {
    msg: String
  }
};
</script>