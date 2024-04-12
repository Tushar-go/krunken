import chatbot from "./assets/chatbot.png"
import tick from "./assets/tick.png"
import bag from "./assets/bag.png"
import logo from "./assets/Logo.png"

function App() {
 

  return (
   <div className="main h-auto w-screen">
    <div className="container rounded-3xl ">
    <div className="bg-[#E6EEFF] m-2 rounded-t-xl p-2 mb-10">
      <div className="flex justify-between ">
      <div className="flex">
      <div className="relative mr-2">
        <img className=" w-13" src={chatbot} alt="chatbot" />
        <div className="dot absolute bottom-0 left-9"></div>
      </div>
      <div className=" flex flex-col">
          <div className="flex items-center"> <span className=" font-bold text-[#4C82EF] " >Timpu</span> <img  className=" ml-1 w-3 h-3 rounded-3xl " src={tick} alt="tick" /> </div>
          <p className=" font-bold text-[#4C82EF]">Chat assistant</p>
      </div>
      </div>

      <div className=" flex items-center">
      <div className="dot mr-1 "></div>
      <p>Online</p>
      </div>

      </div>

    </div>

    <div className=" grid grid-cols-3 gap-1 p-2 ">
      <div className=" min-h-[90px]  rounded-xl bg-[#E5EEFF] col-start-1 col-end-3 p-3 ">
        <p className=" text-sm">Hi Sam! I am your personal shopping assistant , how can i help you today ?</p>
      </div>
      <div className="min-h-[10px] text-xs ml-1 col-start-1 col-end-2">4:45 PM</div>

      <div className=" min-h-[50px] col-start-2 col-end-4 rounded-xl bg-[#DCF7C5] p-3 mt-8 text-sm">
      I am looking for a hand bag, with long strap .
      </div>
      <div className="min-h-[10px] text-xs col-start-3 col-end-4 text-end  mr-2  ">4:45 PM</div>

      <div className=" col-start-1 col-end-3 text-sm text-[#949494] min-h-[20px] mb-1 ">
      Popular tags for handbag
      </div>

      
      <div className=" col-start-1 col-end-4  min-h-[20px]  mb-5">
        <div className=" flex gap-2 items-center">

        <span className="text-[#4C82EF] border border-[#4C82EF] bg-[#F2F7FF] p-1 rounded-md text-sm">Clutch</span>
        <span className="text-[#4C82EF] border border-[#4C82EF] bg-[#F2F7FF] p-1 rounded-md text-sm">Fabric lining</span>
        <span className="text-[#4C82EF] border border-[#4C82EF] bg-[#F2F7FF] p-1 rounded-md text-sm">Baggit </span>
        <span className="text-[#4C82EF] border-t border-b border-l border-[#4C82EF] bg-[#F2F7FF] p-1 rounded-l-lg text-sm">Multi</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="#4C82EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </div>

      <div className=" min-h-[90px]  rounded-xl bg-[#E5EEFF] col-start-1 col-end-3 p-3 ">
        <div className=" bg-white flex rounded p-3">
          <img className=" w-14 h-12 mr-1 object-cover rounded-md" src={bag} alt="bag" />
          <div className=" flex flex-col justify-around">
            <div className=" flex items-center"><p className="text-xs font-bold">Bags on Timpu</p> <img className="ml-1 w-4 h-4 rounded-3xl" src={tick} alt="" /></div>
            <div className=" flex items-center justify-between"><p className="text-xs text-[#949494]">1123 products </p> 
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.20587 13L7.20587 7L1.20587 1" stroke="#949494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
</div>
          </div>
        </div>
        <p className=" text-xs mt-1">Or set filter and help us choose the best bag for you.</p>
      </div>
      <div className="min-h-[10px] text-xs ml-1 col-start-1 col-end-2">4:45 PM</div>

      <div className=" col-start-1 col-end-4 mt-1"> 
      <div className=" flex justify-between">
        <p className=" text-[#949494]">Select filters</p>
        <div className=" flex items-center">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.33331H12.1667" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.83333 3.33331H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10H10.5" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.16667 10H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 16.6667H13.8333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.6667H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1667 1.66669V5.00002" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.16669 8.33331V11.6666" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8333 15V18.3333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <p className=" text-[#666666] text-sm">Filter</p>

        </div>
      </div>
          </div>

          <div className=" col-start-1 col-end-4 mt-1">
          <div className="flex justify-start gap-2">
  <span className="text-[#4C82EF] border border-[#4C82EF] bg-[#F2F7FF] p-1 rounded-md text-xs flex items-center  ">Strap - Long
    <svg className=" ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.19873 9.91345L8.95514 2.15704" stroke="#4C82EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.19873 2.15704L8.95514 9.91345" stroke="#4C82EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>

  <span className="text-[#737373]  bg-[#F4F4F4] p-1 rounded-md text-xs flex items-center  ">Colour
  <svg className=" ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_232)">
<path d="M1.35257 9.91345L9.10898 2.15704" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.35257 2.15704L9.10898 9.91345" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_232">
<rect width="10.1538" height="11" fill="white" transform="translate(0.153839 0.5)"/>
</clipPath>
</defs>
</svg>
  </span>

  <span className="text-[#737373]  bg-[#F4F4F4] p-1 rounded-md text-xs flex items-center  ">Size
  <svg className=" ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_232)">
<path d="M1.35257 9.91345L9.10898 2.15704" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.35257 2.15704L9.10898 9.91345" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_232">
<rect width="10.1538" height="11" fill="white" transform="translate(0.153839 0.5)"/>
</clipPath>
</defs>
</svg>
  </span>


       </div>

       <div className="flex justify-start gap-2 mt-2">
       <span className="text-[#737373]  bg-[#F4F4F4] p-1 rounded-md text-xs flex items-center  ">Brand
  <svg className=" ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_232)">
<path d="M1.35257 9.91345L9.10898 2.15704" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.35257 2.15704L9.10898 9.91345" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_232">
<rect width="10.1538" height="11" fill="white" transform="translate(0.153839 0.5)"/>
</clipPath>
</defs>
</svg>
  </span>
       <span className="text-[#737373]  bg-[#F4F4F4] p-1 rounded-md text-xs flex items-center  ">Material
  <svg className=" ml-1" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_232)">
<path d="M1.35257 9.91345L9.10898 2.15704" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.35257 2.15704L9.10898 9.91345" stroke="#737373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_232">
<rect width="10.1538" height="11" fill="white" transform="translate(0.153839 0.5)"/>
</clipPath>
</defs>
</svg>
  </span>
       </div>

          </div>

          </div>


      <div className="grid grid-cols-3 gap-1  bg-[#E3ECFF] m-2 rounded-b-xl " >


    <div className=" col-start-1 col-end-3 mt-1">
<div className=" flex bg-white justify-between items-center border w-[260px] ml-2 p-2 rounded-lg ">
  <p className=" text-[#949494] text-sm">Type your message</p> 
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8667 9.20836L10.2083 16.8667C9.27014 17.8049 7.99766 18.332 6.67084 18.332C5.34402 18.332 4.07154 17.8049 3.13334 16.8667C2.19514 15.9285 1.66806 14.656 1.66806 13.3292C1.66806 12.0024 2.19514 10.7299 3.13334 9.79169L10.275 2.65003C10.9005 2.02345 11.7492 1.67101 12.6346 1.67023C13.5199 1.66945 14.3693 2.02039 14.9958 2.64586C15.6224 3.27133 15.9749 4.12009 15.9756 5.00541C15.9764 5.89074 15.6255 6.74012 15 7.36669L7.84167 14.5084C7.52894 14.8211 7.10478 14.9968 6.66251 14.9968C6.22023 14.9968 5.79608 14.8211 5.48334 14.5084C5.17061 14.1956 4.99491 13.7715 4.99491 13.3292C4.99491 12.8869 5.17061 12.4628 5.48334 12.15L12.5583 5.08336" stroke="#949494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
    </div>
    <div className="  col-start-3 col-end-4 ml-10 mt-2 w-16 ">
      <div className=" flex justify-center items-center  bg-[#4C82EF] p-2 rounded-lg">
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 16.5L9.75 9L2.25 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>

    <div className="  col-start-1 col-end-4 mt-1">
      <div className="flex gap-2 justify-center items-center">
      <p className="text-[#B1B1B1] text-sm">Powered by</p>
      <div className=" flex">
      <span className="text-[#7A7F8C]  font-bold">Krunk.ai
      </span>
      <img className=" object-contain" src={logo} alt="logo" />
      </div>
      </div>
    </div>

    </div>

      

    


    </div>
   </div>
  )
}

export default App
