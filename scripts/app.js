
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



const catagoryBtn = (id)=>{
    document.getElementById('card-container').innerHTML = ""
    document.getElementById('spinner-1').style.display = 'block'

    setTimeout(function(){
        catagoryData(id)
    },2000)
}
// Fetch data Catagory Wise
const catagoryData = async(id)=>{
    try{
        document.getElementById('spinner-1').style.display = 'none'
        const responseCatagoryData = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        const dataCatagory = await responseCatagoryData.json()
        displayAllpetsData(dataCatagory.data);
        dataEmptyHandaling(dataCatagory.data)

        
    }catch(error){
        console.log("Somthing is Wrong",error)
    }
    
}

btnFetchApi()
allDataFetch()

// Fetch API Section End\\-----------------------------------------------------------------------||||
const dataEmptyHandaling = (catagoryPetsData)=>{
    console.log(catagoryPetsData)
    const cardContainer = document.getElementById('card-container');
    if(catagoryPetsData.length === 0){

        
        
        document.getElementById('card-container').classList.remove("grid")
        const errorDiv = document.createElement('div')
        errorDiv.classList = "bg-[#13131308] rounded-xl py-12 mx-auto"
        errorDiv.innerHTML = `

            <div class="flex justify-center items-center mb-8 ">
                    <img src="./images/error.webp" alt="">
                </div>
                <div>
                    <h1 class="text-headerTxtColor text-3xl font-bold text-center mb-5   ">No Information Available</h1>
                    <p class="text-center w-[350px] md:w-[550px] lg:w-[760px] mx-auto text-gray-600 text-base font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                        its layout. The point of using Lorem Ipsum is that it has a.</p>
                </div>
        
        `
        cardContainer.appendChild(errorDiv);
        
    }else{
        document.getElementById('card-container').classList.add("grid")
    }
}

//Display Fetch Data Start\\
//Display btn Fetch Data \\
const displayBtnFetchDatas =  (datas)=>{
    const catagoryBtnContainer = document.getElementById('ctagory-btn-container');
    datas.forEach((data)=>{
       const btnDiv = document.createElement('div')
       btnDiv.classList = "flex justify-center items-center"
       btnDiv.innerHTML = `
            <button onclick="catagoryBtn('${data.category}')"   class="bg-slate-100 px-12 py-4 flex justify-center items-center borderd border-2 rounded-xl text-2xl font-semibold gap-x-2  hover:bg-none   md:hover:bg-none lg:hover:bg-slate-200"> <img class="w-11 h-11" src="${data.category_icon}" alt=""> <span>${data.category}</span> </button>
       `
       catagoryBtnContainer.appendChild(btnDiv);
    })
}


// Display All pets datas
const displayAllpetsData = (petDatas) =>{
    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML = "";
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

                    <div class="flex gap-x-2 mb-2"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/price-tag-usd.png" alt="price-tag-usd"/><span class="text-gray-600 text-base font-semibold">Price :</span> <span class="text-gray-600 text-base font-medium">${petdata.price === undefined || petdata.price === null ?"Not Available": `${petdata.price} $`
                    } </span>
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







//Display Fetch Data End\\