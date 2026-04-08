
//  console.log('click')
  
let currentTab = 'all'
const tabActive = ["bg-blue-600","text-white"];
const tabInactive = ["bg-gray-200","text-slate-700","text-black"];

let allIssues = [];


const displayPost =(posts)=>{
  console.log(posts)
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  console.log(mainContainer)
  posts.forEach(post => {
   //  console.log(post.description)

  const div = document.createElement("div");
  
   
  div.innerHTML = `
   <div class=" border border-t-4 ${post.status === 'open' ? 'border-green-500': 'border-purple-500'} mt-3 p-5 space-y-3 rounded-lg shadow-2xl mb-2">
                  <div class="flex justify-between items-center">
                     <div>
                      <img src="${post.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" alt="">
                     </div>
                     <h3 onclick="loadDetails(${post.id})" class="cursor-pointer rounded-full py-1.5 px-5 text-red-500 bg-[#FEECEC]">${post.priority}</h3>
                  </div>
                  <p class="text-[#1F2937] font-semibold">${post.title}</p>
                   <p class="text-[#64748B] font-medium">${post.description}</p>
                   <div class="flex gap-3">
                                 ${
                                   post.labels.map(label=>`
                                    <label class="py-1 px-3 bg-[#FDE68A] rounded-md font-medium text-[#D97706]" for="">${label}</label>
                                    `) 
                                 }
                   </div>
                   <hr class="text-[#64748B]">
                   
                   <span class="text-[#64748B]">${post.createdAt}</span>
                    <p class="text-[#64748B]">${post.updatedAt}</p> 
                    </div>

  `;

  mainContainer.appendChild(div);

  });
}
// tabfilter function
function switchTab (clickTab) {
   const tabs = ["all","open","closed"];
console.log(clickTab)
   for(const tab of tabs){
    const tabName = document.getElementById("tab-"+ tab );
    console.log(tabName);
    if(tab === clickTab){
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
    }else{
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
    }
   }
   
if(clickTab === 'all'){
   displayPost (allIssues)
}else if (clickTab === 'open') {
    const filteredData = allIssues.filter(post=> post.status === 'open')
    document.getElementById("count").innerText = filteredData.length;
   displayPost(filteredData);
} else if (clickTab === 'closed') {
   const filteredData = allIssues.filter(post=> post.status === 'closed')
   document.getElementById('count').innerText = filteredData.length;
   displayPost(filteredData);
}{
   
}
}
// to good
fetch((`https://phi-lab-server.vercel.app/api/v1/lab/issues`))
 .then((res)=>res.json())
 .then((json)=> {
  console.log(json)
  allIssues = json.data
  document.getElementById('count').innerText = allIssues.length;

  displayPost(allIssues)
 })


// modal open to 

const loadDetails = (id)=>{

   const url =  `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

   fetch(url)
   .then(res=>res.json())
   .then(details=>{
        console.log(details)
        displayDetails(details.data)

      })
   }

const displayDetails =(posts)=>{
  const detailsContainer = document.getElementById("details-container");
  console.log(detailsContainer);

    detailsContainer.innerHTML = `
        <div class="space-y-3">
         <h1 class="pl-3.5 text-black font-bold">${posts.title}</h1>
         <div class="flex gap-2 pl-3.5">
            <button class="bg-green-500 text-white font-medium rounded-md px-5 py-1.5">opened</button>
            <span class="text-[#64748B] font-medium">. Opened by Fahim Ahmed</span>
            <span class="text-[#64748B] font-medium">. 22/02/2026</span>
         </div>
         <div class="flex gap-3 pl-3.5">
            ${
                                   posts.labels.map(label=>`
                                    <label class="py-2 px-5 bg-[#FDE68A] rounded-md font-medium text-[#D97706]" for="">${label}</label>
                                    `) 
                                 }
         </div>
         <p class="pl-3.5 text-gray-400 font-medium">${posts.description}</p>
          <div class="bg-gray-100 w-11/12 mx-auto flex gap-x-10 rounded-lg pl-2 py-6">
               <div class="">
                <p class="font-bold text-gray-300 mb-2">Assignee :</p>
                <h3 class="font-bold text-black">${posts.author}</h3>
               </div>
               <div>
                   <p class="font-bold text-gray-300 mb-3">Priority:</p>
                    <label class=" bg-red-500 text-white rounded-md py-1.5 px-5" for="">${posts.priority}</label>
               </div>
          </div>
          </div>
    
    
    `;

   document.getElementById('my_modal').showModal(); 

}

// /    to be
switchTab(currentTab);

// search btn value

document.getElementById('search-btn').addEventListener('click', function(){
       const input = document.getElementById('input-search');
       const searchVlaue = input.value.trim().toLowerCase();
       console.log(searchVlaue);

   const filterData = allIssues.filter(post=>post.title.toLowerCase().includes(searchVlaue)|| post.priority.toLowerCase().includes(searchVlaue) || post.description.toLowerCase().includes(searchVlaue)|| post.label.toLowerCase().includes(searchVlaue));
   console.log(filterData)

   displayPost(filterData);

})


 
