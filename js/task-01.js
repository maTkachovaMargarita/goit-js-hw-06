const listOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listOfCategories.length);

listOfCategories.forEach(item => {
    const itemName = item.firstElementChild.textContent;
    console.log("Category:", itemName);
    
     const numbersOfElements = item.lastElementChild.children.length;
     console.log("Elements:", numbersOfElements);
});