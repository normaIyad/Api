const getprodact = async () => {
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id");
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
};
const getdetals = async () => {
  const detals = await getprodact();
  const imgs = detals.images
    .map((e) => {
      return `<img src="${e}" alt="${detals.title}">`;
    })
    .join("");
  const result = `
    <h1>${detals.title}</h1>
    <p>${detals.description}</p>
    <p>${detals.category}</p>
    <p class="price">${detals.price}</p>
    `;
  console.log(detals);
  console.log(result);
  document.querySelector(".prodact").innerHTML = result;
  document.querySelector(".imgs").innerHTML = imgs;
};

getdetals();
