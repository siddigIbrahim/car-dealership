// preloader

window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
});
// creat all cars
const creatcars = (() => {
  const carsarry = [];

  class Car {
    constructor(idd, company, modle, img1, img2, img3, img4, img5, price) {
      this.idd = idd;
      this.company = company;
      this.modle = modle;
      this.img1 = img1;
      this.img2 = img2;
      this.img3 = img3;
      this.img4 = img4;
      this.img5 = img5;
      this.price = price;
    }
  }
  function makecar(idd, company, modle, img1, img2, img3, img4, img5, price) {
    const car = new Car(
      idd,
      company,
      modle,
      img1,
      img2,
      img3,
      img4,
      img5,
      price
    );
    carsarry.push(car);
  }
  function producecar() {
    makecar(
      "ferrari",
      "ferrari",
      "488 spider",
      "./Ferrari 488 Spider-1.jpg",
      "./Ferrari 488 Spider-2.jpg",
      "./Ferrari 488 Spider-3.jpg",
      "./Ferrari 488 Spider-4.jpg",
      "./Ferrari 488 Spider-5.jpg",
      "1290"
    );
    makecar(
      "rolls-roys",
      "rolls roys",
      "phantom",
      "./rr-1.jpg",
      "./rr-2.jpg",
      "./rr-3.jpg",
      "./rr-4.jpg",
      "./rr-5.jpg",
      "1390"
    );
    makecar(
      "mclaren",
      "mclaren",
      "720s",
      "./mcla-1.jpeg",
      "./mcla-2.jpg",
      "./mcla-3.jpg",
      "./mcla-4.jpg",
      "./mcla-5.jpg",
      "1750"
    );
    makecar(
      "bentlly",
      "bentlly",
      "bugotn",
      "./bent-1.jpg",
      "./bent-2.jpg",
      "./bent-3.jpg",
      "./bent-4.jpg",
      "./bent-5.jpg",
      "890"
    );
    makecar(
      "lambo",
      "lamborghini",
      "huracin",
      "./lambo-1.jpg",
      "./lambo-2.jpg",
      "./lambo-3.jpg",
      "./lambo-4.jpg",
      "./lambo-5.jpg",
      "1290"
    );
    makecar(
      "porcha",
      "porcha",
      "911 rt",
      "./porch-1.jpeg",
      "./porch-2.jpg",
      "./porch-3.jpg",
      "./porch-4.jpg",
      "./porch-5.jpg",
      "1490"
    );
    makecar(
      "tesla",
      "tesla",
      "model x",
      "./Tesla-1.jpg",
      "./Tesla-2.jpg",
      "./Tesla-3.jpg",
      "./Tesla-4.jpg",
      "./Tesla-5.jpg",
      "590"
    );
    makecar(
      "bmw",
      "bmw",
      "i8",
      "./BMW-1.jpg",
      "./BMW-2.jpg",
      "./BMW-3.jpg",
      "./BMW-4.jpg",
      "./BMW-5.jpg",
      "590"
    );
    makecar(
      "maserati",
      "maserati",
      "ghilbli s",
      "./Maserati-1.jpg",
      "./Maserati-2.jpg",
      "./Maserati-3.jpg",
      "./Maserati-4.jpg",
      "./Maserati-5.jpg",
      "350"
    );
    makecar(
      "Mercedes",
      "Mercedes",
      "amg s63",
      "./Mercedes-1.jpg",
      "./Mercedes-2.jpg",
      "./Mercedes-3.jpg",
      "./Mercedes-4.jpg",
      "./Mercedes-5.jpg",
      "750"
    );
    makecar(
      "cadillac",
      "cadillac",
      "escalade",
      "./cadilac-1.jpg",
      "./cadilac-2.jpg",
      "./cadilac-3.jpg",
      "./cadilac-4.jpg",
      "./cadilac-5.jpg",
      "295"
    );
    makecar(
      "aston-martin",
      "aston martin",
      "ventage",
      "./aston-1.jpg",
      "./aston-2.jpg",
      "./aston-3.jpg",
      "./aston-4.jpg",
      "./aston-5.jpg",
      "750"
    );
  }
  producecar();

  return {
    carsarry,
  };
})();
// display all cars
const displaycars = ((creatcars) => {
  const cars = creatcars.carsarry;

  const inventory = document.querySelector(".inventory-container");

  document.addEventListener("DOMContentLoaded", () => {
    inventory.innerHTML = "";
    let output = "";
    cars.forEach((car) => {
      output += ` <!-- single car -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.idd}">
              <div class="card">
              <div class="carousel slide carousel-fade" id="${car.idd}" data-interval="false">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${car.img1}" class="card-img-top active-img" alt="">
                  </div>
                  <div class="carousel-item">
                    <img src="${car.img2}" class="card-img-top" alt="">
                  </div>
                  <div class="carousel-item">
                    <img src="${car.img3}" class="card-img-top"alt="">
                  </div>
                  <div class="carousel-item">
                    <img src="${car.img4}" class="card-img-top" alt="">
                  </div>
                  <div class="carousel-item">
                    <img src="${car.img5}" class="card-img-top" alt="">
                  </div>
                </div>
                <a href="#${car.idd}" class="left carousel-control-prev" role="button" data-slide="prev">
                  
                  <i class="fas fa-chevron-circle-left fa-2x control-arrow" ></i>
                
                </a>
                <a href="#${car.idd}" class="left carousel-control-next" data-slide="next" role="button">
                  
                  <i class="fas fa-chevron-circle-right fa-2x control-arrow" ></i>
                
                </a>
              </div>
              <div class="card-body">
                <div class="car-info d-flex justify-content-between">
                  <div class="car-make text-uppercase">
                    <h4>${car.company}</h4>
                    <h6>${car.modle}</h6>
                  </div>
                  <div class="car-price align-self-center">$
                    <span class="car-value ">${car.price}</span> A Day
                    
                    
                  </div>
                  
    
                </div>
                
              </div>
              <div class="card-footer d-flex justify-content-around">
              <a href="#cont-form" class="request-btn">request to book</a>
            </div>
             </div>
            </div>
            <!-- end of single car -->`;
    });
    inventory.innerHTML = output;
  });
})(creatcars);
// filter cars
const filterdcars = (() => {
  const fillterbtn = document.querySelectorAll(".img-container");

  fillterbtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const value = event.target.dataset.filter;
      const singlecar = document.querySelectorAll(".single-car");

      singlecar.forEach((caro) => {
        console.log(caro);

        if (value === "all") {
          caro.style.display = "block";
        } else {
          !caro.classList.contains(value)
            ? (caro.style.display = "none")
            : (caro.style.display = "block");
        }
      });
    });
  });
})();
// read more

var a = 0;
function readmores() {
  const more = document.getElementById("more");
  const dots = document.getElementById("dots");
  const readbtn = document.getElementById("read-btn");

  if (a == 0) {
    more.style.display = "inline";
    dots.style.display = "none";
    readbtn.innerHTML = `read less <i class="fa fa-angle-double-up"></i>`;
    a = 1;
  } else {
    more.style.display = "none";
    dots.style.display = "inline";
    readbtn.innerHTML = `read more <i class="fa fa-angle-double-down"></i>`;
    a = 0;
  }
}
