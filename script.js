const categoriesContainer = document.getElementById("categoriesContainer");
const plantContainer = document.getElementById("plantContainer");
const allTree = document.getElementById("allTree");
const my = document.getElementById("my_modal_1");
const modalContainer = document.getElementById("modalContainer");
const cartContainer = document.getElementById("cartContainer");
const totalContainer = document.getElementById("totalContainer");



const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => showCategories(data.categories
        ))
        .catch((err) => {
            console.log(err);
        })
}

const showCategories = (categories) => {
    categories.forEach(category => {
        categoriesContainer.innerHTML += `
<p id="${category.id}" onclick="loadTreesByCategory(${category.id}) ; mark(this)" class="hover:bg-[#cff0dc] hover:rounded-sm cursor-pointer">${category.category_name}</p>
`
    }
    )
};


