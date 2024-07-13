const getprodact = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data;
};
const displayprodact = async () => {
  const data = await getprodact();
  const prodact = data.products;
  console.log(prodact);
  const pro = prodact
    .map(
      (e) =>
        `<div class="product">
      <h2>${e.title} </h2>
      <img src="${e.images}"/>
      <a href="detals.html?id=${e.id}">detals<a>
     </div>`
    )
    .join("");
  //join it mzke arr to string without  , colon
  console.log(pro);
  document.querySelector(".prodacts").innerHTML = pro;
};
getprodact();
displayprodact();
