
// View More Button Functionality
const scroller = ()=>{
    const mainSection = document.getElementById('main-section');
    mainSection.scrollIntoView({behavior:'smooth'})
}
// Fetch API Section Start\\
//Fetch Button API
const btnFetchApi = async()=>{
    const  response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await response.json()
    displayBtnFetchDatas(data.categories)
}
btnFetchApi()


// Fetch API Section End\\

//------------------------------\\
//Display Fetch Data Start\\
//Display btn Fetch Data \\

const displayBtnFetchDatas =  (datas)=>{
    const catagoryBtnContainer = document.getElementById('ctagory-btn-container');
    datas.forEach((data)=>{
       const btnDiv = document.createElement('div')
       btnDiv.classList = "flex justify-center items-center"
       btnDiv.innerHTML = `
            <button class="bg-slate-300 px-12 py-4 flex justify-center items-center borderd rounded-xl text-lg font-semibold gap-x-2 hover:bg-slate-400"> <img class="w-11 h-11" src="${data.category_icon}" alt=""> <span classs="text-3xl font-bold">${data.category}</span> </button>
       `
       catagoryBtnContainer.appendChild(btnDiv);
    })
}


//Dosplay Fetch Data End\\