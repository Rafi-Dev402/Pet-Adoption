
// View More Button Functionality
const scroller = ()=>{
    const mainSection = document.getElementById('main-section');
    mainSection.scrollIntoView({behavior:'smooth'})
}
// Fetch API Section Start\\------------------------------------------------------------------||||
//Fetch Button API
const btnFetchApi = async()=>{
    const  response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await response.json()
    displayBtnFetchDatas(data.categories)
}

//Fetch All pets datas\\
const allDataFetch = async() =>{
   
    const resp = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const petsdata = await resp.json()
    displayAllpetsData(petsdata.pets)
}
btnFetchApi()
allDataFetch()


// Fetch API Section End\\-----------------------------------------------------------------------||||


//Display Fetch Data Start\\
//Display btn Fetch Data \\
const displayBtnFetchDatas =  (datas)=>{
    const catagoryBtnContainer = document.getElementById('ctagory-btn-container');
    datas.forEach((data)=>{
       const btnDiv = document.createElement('div')
       btnDiv.classList = "flex justify-center items-center"
       btnDiv.innerHTML = `
            <button class="bg-slate-100 px-12 py-4 flex justify-center items-center borderd border-2 rounded-xl text-2xl font-semibold gap-x-2  hover:bg-none   md:hover:bg-none lg:hover:bg-slate-200"> <img class="w-11 h-11" src="${data.category_icon}" alt=""> <span>${data.category}</span> </button>
       `
       catagoryBtnContainer.appendChild(btnDiv);
    })
}

// Display All pets datas
const displayAllpetsData = (petDatas) =>{

    const cardContainer = document.getElementById('card-container');
    petDatas.forEach(petdata=>{

        
        
        // console.log(petdata)
        const carddiv = document.createElement('div')
        carddiv.classList = "flex justify-center items-center";

        carddiv.innerHTML = `

            <div class="border p-5  rounded-xl mx-auto">
                <!-- image -->
                <div class="mb-6">
                    <img class="w-[272px] rounded-lg" src="${petdata.image}" alt="">
                </div>
                <!-- Texts -->
                <div class="mb-4 ">
                    <h3 class="text-xl font-bold text-headerTxtColor mb-2">${petdata.pet_name
                    } </h3>
                    <div class="flex gap-x-2 mb-2"><img width="24" height="24" src="https://img.icons8.com/plumpy/24/qr-code.png" alt="qr-code"/> <span class="text-gray-600 text-base font-semibold">Breed :</span> <span class="text-gray-600 text-base font-medium">${petdata.breed === undefined || petdata.breed === null?"Not Found":`${petdata.breed}`} </span></div>

                    <div class="flex gap-x-2 mb-2"><img width="24" height="24" src="https://img.icons8.com/plumpy/24/birth-date.png" alt="birth-date"/> <span class="text-gray-600 text-base font-semibold">Birth :</span> <span class="text-gray-600 text-base font-medium"> ${petdata.
                        date_of_birth === undefined || petdata.date_of_birth === null? "Not Found":`${petdata.date_of_birth}`
                        }</span></div>

                    <div class="flex gap-x-2 mb-2"><img width="24" height="24" src="https://img.icons8.com/plumpy/24/gender.png" alt="gender"/> <span class="text-gray-600 text-base font-semibold">Gender :</span> <span class="text-gray-600 text-base font-medium">${petdata.
                        gender === undefined || petdata.gender === null? "Not Found": `${petdata.gender}` 
                        } </span></div>

                    <div class="flex gap-x-2 mb-2"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/price-tag-usd.png" alt="price-tag-usd"/><span class="text-gray-600 text-base font-semibold">Price :</span> <span class="text-gray-600 text-base font-medium">${petdata.price === undefined || petdata.price === null ? "Not Available": `${petdata.price}`
                    } </span><span class="text-gray-800 text-base font-extrabold">$</span></div>
                </div>
                <hr class="border">
                <!-- buttons -->
                    <div class="mt-4 flex justify-start items-center gap-x-5">
                    <button class="borderd px-4 py-2 bg-slate-50 rounded-lg border"><img width="24" height="24" src="https://img.icons8.com/forma-thin/24/facebook-like.png" alt="facebook-like"/></button>
                    <button class="borderd px-5 py-2 bg-slate-50 rounded-lg text-btnBg text-base font-semibold border">Adopt</button>
                    <button class="borderd px-5 py-2 bg-slate-50 rounded-lg text-btnBg text-base font-semibold border">Details</button>
                    </div>
            </div>
        
        `
        cardContainer.appendChild(carddiv)
        
        
        
        
        
    })

}





//Dosplay Fetch Data End\\