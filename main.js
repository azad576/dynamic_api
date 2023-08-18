const main = document.querySelector(`.main`);
const show = document.querySelector(`.show`);
let small = document.querySelector(`.small`);

const getproduct = async () => {
  await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => {
      let contens = ``;
      res.products.map((item) => {
        contens += `
<div class="content">
<div class="button d-flex justify-content-between">
  <button class="btn btn-primary">${item.rating}</button>
  <button data-bs-toggle="modal" href="#single_post" onclick="view('${item.id}')" class="btn btn-info">
    <i class="fa-sharp fa-solid fa-eye"></i>
  </button>
</div>
<img
  class="w-100"
  src="${item.thumbnail}"
  alt=""
/>
<h6>${item.category}</h6>
<h4>${item.title}</h4>
<span>$${item.price}</span>
<span>$${item.discountPercentage}</span>
<button class="d-block btn btn-primary">Add to card</button>
<p>${item.stock} in stock </p>
</div>


`;
      });
      main.innerHTML = contens;
    })
    .catch((eror) => {
      console.log(eror);
    });
};
getproduct();

//single view

const view = async (id) => {
  await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((res) => {
      show.innerHTML = `

  <img id="real"
  class="w-100 main_thumbnail"
  src="${res.thumbnail}"
  alt="">
 
  <div class="thubnail-img d-flex">
  ${
    res.images[0]
      ? `<a href="#"><img class="small" onclick="sin('${res.images[0]}')"

      src="${res.images[0]}"
      alt=""/></a>`
      : ""
  }
  ${
    res.images[1]
      ? `<a href="#"><img class="small" onclick="sin('${res.images[1]}')"

      src="${res.images[1]}"
      alt=""/></a>`
      : ""
  }
    ${
      res.images[2]
        ? `<a href="#"><img class="small" onclick="sin('${res.images[2]}')"
  
        src="${res.images[2]}"
        alt=""/></a>`
        : ""
    }
    ${
      res.images[3]
        ? `<a href="#"><img class="small" onclick="sin('${res.images[3]}')"
  
        src="${res.images[3]}"
        alt=""/></a>`
        : ""
    }
  </div>
  <h6 class="my-1">${res.category}</h6>
  <h4>${res.title}</h4>
  <p>${res.description}</p>
  <span>${res.price}</span>
  <span>${res.discountPercentage}</span>
  <div class="btn2 d-flex">
    <button   class=" mx-3 btn btn-primary">Add to card</button>
    <button class=" btn btn-success">Add to wishlist</button>
  </div>
  
  <p>${res.stock} in stock </p>
  
  
  `;
    });
};

const sin = (all) => {
  // real.src

  const real = document.getElementById(`real`);
  real.setAttribute(`src`, all);
};

// const sin2 = (all) => {
//   // real.src

//   const real = document.getElementById(`real`);
//   real.setAttribute(`src`, all);
// };

// const sin3 = (all) => {
//   // real.src

//   const real = document.getElementById(`real`);
//   real.setAttribute(`src`, all);
// };

// const sin4 = (all) => {
//   // real.src

//   const real = document.getElementById(`real`);
//   real.setAttribute(`src`, all);
// };
