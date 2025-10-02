// import React, { useState, useEffect } from "react";
// import { IoChatbubble, IoFileTrayFull } from "react-icons/io5";

// const BothModernWidget = (
//   {
//     formData,
//     toggleChat,
//     isOpen,
//     widgetId,
//     actionText = "Let's chat",
//     statusBubbleIcon = false,
//     statusBubbleText = false,
//   }
// ) => {
//   // const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("home");

//   // const toggleChat = () => setIsOpen(!isOpen);
//   const switchTab = (tab) => setActiveTab(tab);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const delay = formData?.popUpAnimations?.popUpDelay || 0; 
//     const timeout = formData?.popUpAnimations?.popUpTimeout || 0;

//     const showTimer = setTimeout(() => {
//       setVisible(true);
//       const hideTimer = setTimeout(() => setVisible(false), timeout);
//       return () => clearTimeout(hideTimer);
//     }, delay);

//     return () => clearTimeout(showTimer);
//   }, [formData?.popUpAnimations ?? ""]);


//   return (
//     <div className="fixed bottom-5 right-5 z-9999">

//       {/* popup animtation */}
//       {visible && formData?.allowPopUpAnimationModal ? (
//         <div className="fixed bottom-24 right-6 bg-white border border-gray-300 rounded-lg shadow-md p-4 max-w-xs z-50">
//           <p className="text-sm text-gray-800">
//             {formData?.popUpAnimations.popUpAnimationText ?? ""}
//           </p>
//           <button onClick={() => setVisible(false)} className="text-xs text-blue-500 mt-2 underline" > Got it </button>
//         </div>
//       ) : ("")}

//       {/* Chat Bubble */}
//       <button
//         onClick={toggleChat}
//         className="bg-black text-white p-2 rounded-full shadow-lg flex items-center justify-center space-x-2 relative"
//         style={{
//           // width: formData?.bubbleSize === 'small' ? '40px' : formData?.bubbleSize === 'large' ? '60px' : '50px',
//           // height: formData?.bubbleSize === 'small' ? '40px' : formData?.bubbleSize === 'large' ? '60px' : '50px',
//         //   borderRadius: formData?.bubbleShape === 'square' ? '8px' : '', // Circle or Square
//         //   backgroundColor: formData?.headingBgColor,
//         //   bottom: formData?.position?.includes("bottom") ? "20px" : "auto",
//         //   top: formData?.position?.includes("top") ? "20px" : "auto",
//         //   left: formData?.position?.includes("left") ? "20px" : "auto",
//         //   right: formData?.position?.includes("right") ? "20px" : "auto",

//         }}
//       >
//         {!formData?.statusBubbleIcon && <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
//         {!formData?.statusBubbleText && <span className="text-xs">Offline</span>}
//         {/* Custom Icon (SVG or Image) */}
//         {formData?.bubbleIcon ? (
//           formData?.bubbleIcon.startsWith("<svg") ? (
//             <div className="text-3xl" dangerouslySetInnerHTML={{ __html: formData?.bubbleIcon }} />
//           ) : (
//             <img src={formData?.bubbleIcon} alt="Custom Icon" className="w-3 h-3" />
//           )
//         ) : (

//           <IoChatbubble className="text-3xl" />
//         )}
//         {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" > <path d="M8 15c-3.866 0-7-2.91-7-6.5S4.134 2 8 2s7 2.91 7 6.5c0 1.228-.344 2.37-.928 3.328A6.992 6.992 0 0 1 8 15z" /> <circle cx="8" cy="10.5" r="1.5" /> <circle cx="5" cy="10.5" r="1.5" /> <circle cx="11" cy="10.5" r="1.5" /> </svg> */}
//       </button>

//       {/* Chat Widget */}
//       {isOpen && (
//         <div className="fixed bottom-5 right-5 w-full max-w-xs bg-white rounded-lg shadow-lg text-xs z-9999 overflow-hidden " 
//         // style={{
//         //   backgroundColor: formData?.containerBgColor,
//         //   width: formData?.widgetWidth,
//         //   height: formData?.widgetHeight,
//         //   bottom: formData?.position?.includes("bottom") ? "20px" : "auto",
//         //   top: formData?.position?.includes("top") ? "20px" : "auto",
//         //   left: formData?.position?.includes("left") ? "20px" : "auto",
//         //   right: formData?.position?.includes("right") ? "20px" : "auto",
//         // }}
//         >
//           {!formData?.mordernStructure && activeTab === "home" && formData?.homeTab && (
//             <div className="bg-black-2  rounded-t-lg absolute w-full z-0" style={{ backgroundColor: formData?.headingBgColor, height: "250px" }}></div>
//           )}





//           {/* Tab Content */}
//           {activeTab === "home" && formData?.homeTab && (

//             // {/* <div className="bg-blue-700 h-64 rounded-t-lg absolute w-full z-0"></div> */ }
//             <div className="flex flex-col overflow-y-auto h-full p-4 space-y-4 md:text-xs bottom-3 pb-32">
//               <button onClick={toggleChat} className="text-gray-200 hover:text-gray-400 fixed right-10 "> ✖ </button>

//               {formData?.classicalStructure && !formData?.mordernStructure && (
//                 <div className="flex justify-between items-center  bg-gray-800 text-white p-4 rounded-t-lg" style={{ backgroundColor: formData?.headingBgColor, height: "150px" }}>
//                   <div className="flex items-center space-x-2">
//                     {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                       <img src={formData?.widget_image} alt="Chatbot" className="w-10 h-10 rounded-full" />
//                     )}
//                     <div>
//                       <h2 className="text-md font-semibold widgetName"> {formData?.name || 'Widget Name'}</h2>
//                       <p className="text-xs text-gray-500">{actionText} </p>
//                     </div>
//                   </div>
//                   <button onClick={toggleChat} className="text-gray-200 hover:text-gray-400"> ✖ </button>
//                 </div>
//               )}

//               {!formData?.mordernStructure && activeTab === "home" && formData?.homeTab && (
//                 <div className="flex flex-col z-10 rounded-t-lg p-4 text-white" >
//                   {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                     <img src={formData?.widget_image} alt="Chatbot" className="w-10 h-10 rounded-full" />
//                   )}
//                   <div className="text-3xl mb-2">{formData?.name || 'Hi Sophie 👋'}</div>
//                   <div className="w-60 text-gray-200  mb-1">{actionText}</div>
//                 </div>
//               )}

//               <div className="border-0 border-t-4 border-blue-500 rounded z-10 shadow-md text-sm md:text-xs">
//                 <div className="bg-white border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
//                   <div className="px-6 py-4 flex flex-col items-start gap-3">
//                     <div className="font-semibold ">Start a conversation</div>
//                     <div className="flex flex-row gap-3">
//                       <div className="flex flex-row -space-x-10">
//                         <img className="w-16 h-16 rounded-full border-2 border-white"
//                           src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&w=256&h=256&facepad=2" />
//                         <img className="w-16 h-16 rounded-full border-2 border-white"
//                           src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&w=256&h=256&facepad=2" />
//                         <img className="w-16 h-16 rounded-full border-2 border-white"
//                           src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&w=256&h=256&facepad=2" />
//                       </div>
//                       <div className="flex flex-col justify-center">
//                         <div className="text-gray-400">Our usual reply time</div>
//                         <div className="flex flex-row items-center gap-1 font-semibold">
//                           <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor"
//                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           A few minutes
//                         </div>
//                       </div>
//                     </div>
//                     <button type="button" className="bg-black w-full rounded-full text-white flex items-center justify-content flex-row gap-2 py-2 px-4">
//                       Send us a message
//                       <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor"
//                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                       </svg>
//                     </button>
//                   </div>

//                 </div>
//               </div>


//               <div id="home-content" className="h-full border bg-white rounded z-10 shadow-md ">
//                 {formData?.chatbotTab && (
//                   <div className=" rounded-lg p-4 mb-4">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3-3v6m7-6h.01M7 15h.01M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <h3 className="text-gray-800 font-medium">LiveChat Bot</h3>
//                         <p className="text-xs text-gray-600">{formData?.initialMessage}</p>
//                       </div>
//                     </div>
//                     <button onClick={() => switchTab("chat")} className="w-full bg-black text-white py-2 mt-4 rounded-full flex justify-center items-center">
//                       {formData?.callToActionText}
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16l5-5m0 0l-5-5m5 5H6" />
//                       </svg>
//                     </button>
//                   </div>
//                 )}

//               </div>

//               <ul className="space-y-3 mt-5">
//                 {formData?.actionButtons.map((button, index) => (
//                   <a key={index} href={button.link || "#"} className="block">
//                     <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
//                       <span>{button.text || "Default Label"}</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /> </svg>
//                     </li>
//                   </a>
//                 ))}
//               </ul>

//               <div className="px-4 mt-8 grid max-w-xl divide-y divide-neutral-200 border shadow-md ">
//                 {formData?.actionFaq.map((button, index) => (
//                   <div className="py-4">
//                     <details className="group">
//                       <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                         <span> {button.question || "How does the billing work?"}</span>
//                         <span className="transition group-open:rotate-180">
//                           <svg fill="none" height="24"
//                             stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
//                             stroke-width="1.5" viewBox="0 0 24 24" width="24">
//                             <path d="M6 9l6 6 6-6"></path>
//                           </svg>
//                         </span>
//                       </summary>
//                       <p className="group-open:animate-fadeIn mt-3 text-neutral-600">  {button.answer || "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."} </p>
//                     </details>
//                   </div>
//                 ))}

//               </div>
//             </div>

//           )}

//           {activeTab === "chat" && formData?.chatbotTab && (
//             <>
//               <div className="flex justify-between items-center  bg-white text-black border border-b p-4 rounded-t-lg" style={{ backgroundColor: formData?.headingBgColor}}>
//                 <div className="flex items-center space-x-2">
//                   {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                     <img src={formData?.widget_image} alt="Chatbot" className="w-10 h-10 rounded-full" />
//                   )}
//                   <div>
//                     <h2 className="text-md font-semibold widgetName"> {formData?.name || 'Widget Name'}</h2>
//                     <p className="text-xs text-gray-500">{actionText} </p>
//                   </div>
//                 </div>
//                 <button onClick={toggleChat} className="text-gray-200 hover:text-gray-400"> ✖ </button>
//               </div>
//               <div id="chat-content" className="p-4" >

//                 <div className="mt-4 flex justify-end">
//                   <button onclick="clearChatLocalStorage()" className="bg-red-500 text-white py-2 px-2 text-xs rounded-lg shadow hover:bg-red-600"> Clear Chat </button>
//                 </div>
//                 <div className="p-4 no-scrollbar">

//                   <div id="chatbox" className="space-y-4 h-3/6 border border-red-200 b-40  overflow-y-auto">
//                     {/* absolute */}
//                     {/* <!-- Reduced height for better fit --> */}
//                     {/* <!-- Chat Messages --> */}
//                     <div className="mt-6">
//                       <div className="mt-4 flex space-x-2">
//                         <button className="bg-red-500 text-white  px-4 py-2 rounded-full hover:bg-red-600 transition">Free trial</button>
//                         <button className="bg-gray-200 text-gray-700  px-4 py-2 rounded-full hover:bg-gray-300 transition">Product expert</button>
//                       </div>
//                     </div>

//                     <div className="flex justify-start"> <div className="bg-gray-200 p-3 rounded-lg max-w-xs" style={{ backgroundColor: formData?.botBgColor, color: formData?.textColor }}>
//                       <p> {formData?.initialMessage || "I am your friendly ChatBot here to assist you. 🤖 "} </p>
//                     </div>
//                     </div>
//                     <div className="flex justify-end">
//                       <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
//                         <p>I need help with pricing.</p>
//                       </div>
//                     </div>
//                     {/* <!-- More chat messages can be added dynamically --> */}
//                   </div>
//                 </div>
//                 {/* Suggested Messages (Scrollable Horizontally) */}
//                 <div className="mt-4">
//                   <div className="flex space-x-2 overflow-x-auto no-scrollbar p-2" style={{ whiteSpace: "nowrap" }}>
//                     {formData?.suggestedMessages.map((message, index) => (
//                       <button
//                         key={index}
//                         onClick={() => document.getElementById("chatbotInput").value = message}
//                         className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition"
//                       >
//                         {message}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* <!-- Chat input --> */}
//                 <div id="chat_input" className="p-3 border-t border-gray-300 bg-white rounded-b-lg bottom-0 w-full ">
//                   {/* absolute */}
//                   <div className="relative flex">
//                     <input type="text" placeholder="Write a message..." className="w-full p-3 rounded-lg border focus:outline-none" id="chatbotInput" />
//                     <button id="chatbotSendButton" className="absolute right-3 top-3 text-blue-500 hover:text-blue-700">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
//                         <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//                       </svg>
//                     </button>

//                   </div>
//                   <p className="text-center text-xs text-gray-400 mt-2">Powered by <span className="text-orange">Bucxai</span></p>
//                 </div>
//               </div>
//             </>
//           )}

//           {formData?.allowLeadsCollection && (
//             <div id="leads-form" className="  inset-0 p-4 flex flex-col items-center justify-center bg-black z-9999 absolute bg-opacity-50 rounded-lg  w-full">
//               <span className="text-black rounded-lg p-3 font-bold bg-white " onclick="window.handleSwitchTab('home', '${widgetId}', { homeTab: true })" >Home </span>
//               <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 relative">
//                 <h2 className="text-lg font-semibold mb-4">Start a Conversation</h2>
//                 <form id="leadForm" className="md:text-xs">
//                   {formData?.allowNameCollection && (
//                     <div className="mb-4">
//                       <label for="fullName" className="block  font-medium text-gray-700">{formData?.leadFormCustomization.nameTextCustomization}</label>
//                       <input type="text" id="lead_fullName" name="fullName" placeholder={formData?.leadFormCustomization.namePlaceholderCustomization}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chatbotPurple focus:border-chatbotPurple " />
//                     </div>
//                   )}

//                   {formData?.allowLeadsCollection && formData?.allowEmailCollection && (
//                     <div className="mb-4">
//                       <label for="email" className="block  font-medium text-gray-700">{formData?.leadFormCustomization.emailTextCustomization}</label>
//                       <input type="email" id="lead_email" name="email" placeholder={formData?.leadFormCustomization.emailPlaceholderCustomization}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chatbotPurple focus:border-chatbotPurple " />
//                     </div>
//                   )}

//                   {formData?.allowLeadsCollection && formData?.allowPhoneNumberCollection && (
//                     <div className="mb-4">
//                       <label for="message" className="block  font-medium text-gray-700"> {formData?.leadFormCustomization.mobileNoTextCustomization} </label>
//                       <input type="number" id="lead_email" name="email" placeholder={formData?.leadFormCustomization.mobileNoPlaceholderCustomization}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chatbotPurple focus:border-chatbotPurple " />
//                     </div>
//                   )}
//                   {formData?.allowLeadsCollection && formData?.allowMessageCollection && (
//                     <div className="mb-4">
//                       <label for="message" className="block  font-medium text-gray-700">{formData?.leadFormCustomization.messageTextCustomization} </label>
//                       <textarea id="lead_message" name="lead_message" placeholder={formData?.leadFormCustomization.messagePlaceholderCustomization}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-chatbotPurple focus:border-chatbotPurple " ></textarea>
//                     </div>
//                   )}
//                   <div className="text-right">
//                     <button type="button" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-600 focus:outline-none" onclick="startConversation()">Start Conversation</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}

//           {formData?.allowTicketCollection && (
//             // <div id="customModal" class="inset-0 z-9999 flex items-center justify-center bg-black bg-opacity-50 absolute backdrop-blur-sm transition-opacity duration-300 opacity-0">
//             <div id="leads-form" className="  inset-0 p-4 flex flex-col items-center justify-center bg-black z-9999 absolute bg-opacity-50 rounded-lg  w-full">
//               <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 relative transform transition-transform duration-300 scale-95 h-6/6 overflow-y-auto">
//                 <h2 class="text-xl font-semibold mb-4">title</h2>
//                 <p class="mb-6">Message</p>
//                 <div id="livechat-query-form">
//                   {/* <!-- Customer Name --> */}
//                   <div class="mb-4">
//                     <label for="customerName" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketNameTextCustomization}</label>
//                     <input type="text" id="customerName" placeholder={formData?.ticketFormCustomization.ticketNamePlaceholderCustomization}
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                   </div>


//                   {/* <!-- Contact Email --> */}
//                   <div class="mb-4">
//                     <label for="contactEmail" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketEmailTextCustomization}</label>
//                     <input type="email" id="contactEmail" placeholder={formData?.ticketFormCustomization.ticketEmailPlaceholderCustomization}
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                   </div>

//                   {/* <!-- Issue Title --> */}
//                   <div class="mb-4">
//                     <label for="issueTitle" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketTitleTextCustomization}</label>
//                     <input type="text" id="issueTitle" placeholder={formData?.ticketFormCustomization.ticketTitlePlaceholderCustomization}
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                   </div>

//                   {/* <!-- Issue Message --> */}
//                   <div class="mb-4">
//                     <label for="issueMessage" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketMessageTextCustomization}</label>
//                     <textarea id="issueMessage" placeholder={formData?.ticketFormCustomization.ticketMessagePlaceholderCustomization}
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
//                   </div>

//                   {/* <!-- Priority --> */}
//                   <div class="mb-4">
//                     <label for="priority" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketPriorityTextCustomization}</label>
//                     <select id="priority"
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//                       <option value="Low">Low</option>
//                       <option value="Medium" selected>Medium</option>
//                       <option value="High">High</option>
//                       <option value="Urgent">Urgent</option>
//                     </select>
//                   </div>

//                   {/* <!-- Category --> */}
//                   <div class="mb-4">
//                     <label for="category" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketCategoryTextCustomization}</label>
//                     <select id="category"
//                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//                       <option value="Billing">Billing</option>
//                       <option value="Technical" selected>Technical</option>
//                       <option value="General">General</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   {/* <!-- Image Upload --> */}
//                   {formData?.allowTicketCollection && formData?.allowTicketFileAttachmentCollection && (
//                     <div class="mb-4">
//                       <label for="attachment" class="block text-sm font-medium text-gray-700">{formData?.ticketFormCustomization.ticketAttachmentTextCustomization}</label>
//                       <input type="file" id="attachment" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                     </div>
//                   )}

//                   {/* <!-- Send Ticket Button --> */}
//                   <div class="w-full">
//                     <button id="sendTicket" class="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none">{formData?.ticketFormCustomization.ticketsubmitButtonTextCustomization}</button>
//                   </div>
//                 </div>

//                 {/* <!-- Cancel Button --> */}
//                 {/* <div class="flex justify-end space-x-4 mt-4">
//                     ${
//                         cancelAction
//                             ? `<button id="cancelButton" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none">${cancelButtonText}</button>`
//                             : ""
//                     }
//                 </div> */}
//               </div>
//             </div>
//           )}



//           {activeTab === "livechat" && formData?.livechatTab && (
//             <div id="livechat-content" className="p-4">
//               <div className=" p-4 no-scrollbar h-100 overflow-y-auto ">
//                 <div className="space-y-4 h-3/6 border border-red-200 b-40 absolute overflow-y-auto" id="liveChatBox">

//                   {/* <!-- Main Content 1--> */}
//                   <div className="mt-6" >
//                     <div className="bg-gray-100 rounded-lg p-2 flex items-center space-x-3">
//                       <div className="flex -space-x-2">
//                         {/* ${widget_logo ? `
//                             <img src="${apiEndpoint}/${widget_logo}" alt="User1" className="w-10 h-10 rounded-full border-2 border-white">
//                             <!--  <img src="user2.jpg" alt="User2" className="w-10 h-10 rounded-full border-2 border-white">
//                             <img src="user3.jpg" alt="User3" className="w-10 h-10 rounded-full border-2 border-white"> -->
//                             ` :``} */}
//                       </div>
//                       <div>
//                         {/* <h3 className="text-lg font-medium text-gray-800">Hello 👋</h3> */}
//                         <p className="text-sm text-gray-600">{formData?.LivechatInitialMessage}</p>
//                       </div>
//                     </div>

//                     <div className="mt-4 flex flex-col items-center justify-center space-x-2 text-xs">
//                       <span> {formData?.ConnectionRequestQuestion}</span>
//                       <button onclick="handleOpenConnectionRequestForm()" className="bg-red-500 text-white text-xs px-2 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer border border-transparent">
//                         Send a request
//                       </button>
//                     </div>
//                   </div>

//                   {/* <!-- Main Content 2--> */}
//                   <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                     <p className="text-gray-800 mb-2">Our livechat agent will contact you soon . 🤖</p>
//                     <p className="text-gray-600 text-sm">Please type any question related to LiveChat.</p>
//                     {/* <p className="mt-4 text-gray-500 text-xs">Chat closed due to long user inactivity</p> */}
//                   </div>




//                 </div>
//               </div>

//               {/* <!-- Chat input --> */}
//               <div id="chat_input" className="p-3  border-t border-gray-300 rounded-b-lg bottom-0 w-full absolute bg-white">
//                 <div className="relative flex items-center space-x-2">
//                   <input type="text" id="messageInput" placeholder="Write a message message..." oninput="handleTyping()" className="w-full p-3 rounded-lg border focus:outline-none" />

//                   {formData?.allowFileAttachments && (
//                     <>
//                       <label for="fileInput" className="text-gray-500 cursor-pointer hover:text-blue-500"> <span className="material-symbols-rounded"><IoFileTrayFull /></span> </label>
//                       <input id="fileInput" type="file" accept="image/*,application/pdf" className="hidden" onchange="handleFilePreview(event)" />
//                     </>
//                   )}


//                   {/* <!-- Send Button --> */}
//                   <button id="messageSend" onclick="sendMessage()" className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50" >
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
//                       <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//                     </svg>
//                   </button>

//                 </div>

//                 {/* <!-- File Preview Section --> */}
//                 <div id="filePreview" className="mt-3 hidden">
//                   <div className="flex items-center space-x-3">
//                     <img id="previewImage" src="" alt="Preview" className="w-20 h-20 object-cover rounded-lg hidden" />
//                     <p id="previewFileName" className="text-gray-700 text-sm"></p> <button onclick="clearFilePreview()" className="text-red-500 hover:text-red-700" > Remove </button>
//                   </div>
//                 </div>




//                 <p className="text-center text-xs text-gray-400 mt-2">Powered by <span className="text-orange">Bucxai</span></p>
//               </div>


//             </div>
//           )}

//           {/* Tabs */}
//           {formData?.modernStructure && (
//             <>
//               <div className="flex bottom-3 absolute z-999  justify-around w-full border shadow-t-md border-transparent bg-white py-2" style={{
//                 backgroundColor: formData?.containerBgColor
//               }} >
//                 {formData?.homeTab && (

//                   <button onClick={() => switchTab("home")} className={`p-1 ${activeTab === "home" ? "font-extrabold text-black-2" : ""}`}>
//                     {!formData?.HideTabIcon && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mb-1">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75l9-7.5 9 7.5v9a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 18.75v-9z" />
//                     </svg>)}
//                     {!formData?.HideTabLabel && (
//                       <span> {formData?.HomeTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.chatbotTab && (
//                   <button onClick={() => switchTab("chat")} className={`p-1 ${activeTab === "chat" ? "border-b-2 border-blue-600" : ""}`}>
//                     {!formData?.HideTabIcon && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mb-1">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h6m-6 4h8m-9-8v8m9-8v8M5 8h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
//                     </svg>)}

//                     {!formData?.HideTabLabel && (
//                       <span>  {formData?.BotTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.livechatTab && (
//                   <button onClick={() => switchTab("livechat")} className={`p-1 ${activeTab === "livechat" ? "border-b-2 border-blue-600" : ""}`}>
//                     {!formData?.HideTabIcon && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mb-1">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v6h6V5h-6zM5 12v6h14v-6H5z" />
//                     </svg>)}

//                     {!formData?.HideTabLabel && (
//                       <span> {formData?.LivechatTabLabel}</span>
//                     )}
//                   </button>
//                 )}

//                 {formData?.allowLeadsCollection && (
//                   <button onClick={() => switchTab("livechat")} className={`p-1 ${activeTab === "livechat" ? "border-b-2 border-blue-600" : ""}`}>
//                     {!formData?.HideTabIcon && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mb-1">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v6h6V5h-6zM5 12v6h14v-6H5z" />
//                     </svg>)}

//                     {!formData?.HideTabLabel && (
//                       <span>Ticket</span>
//                     )}
//                   </button>
//                 )}
//               </div>
//               <p className="text-center text-xs text-gray-400 mt-1  bottom-0 absolute z-999  w-full border shadow-md border-gray-50 bg-white py-1">Powered by <span className="text-orange">Bucxai</span></p>
//             </>
//           )}

//         </div>
//       )}
//     </div >
//   );
// };

// export default BothModernWidget;

// import React, { useState, useEffect } from "react";
// import { IoChatbubble, IoFileTrayFull, IoClose, IoSend, IoChevronDown, IoHome, IoPersonOutline } from "react-icons/io5";

// const BothModernWidget = ({
//   formData = {
//     name: "Assistant",
//     initialMessage: "Hi there! How can I help you today?",
//     actionText: "Let's chat",
//     callToActionText: "Start Chat",
//     homeTab: true,
//     chatbotTab: true,
//     livechatTab: true,
//     modernStructure: true,
//     allowWidgetDisplayPicture: true,
//     widget_image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
//     headingBgColor: "#1f2937",
//     containerBgColor: "#ffffff",
//     botBgColor: "#f3f4f6",
//     textColor: "#374151",
//     HomeTabLabel: "Home",
//     BotTabLabel: "Chat",
//     LivechatTabLabel: "Live Chat",
//     HideTabIcon: false,
//     HideTabLabel: false,
//     actionButtons: [
//       { text: "View Pricing", link: "#pricing" },
//       { text: "Contact Support", link: "#support" },
//       { text: "Documentation", link: "#docs" }
//     ],
//     actionFaq: [
//       { question: "How does billing work?", answer: "We offer flexible billing options including monthly and annual plans." },
//       { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time with no penalties." }
//     ],
//     suggestedMessages: ["I need help", "Pricing info", "Technical support", "General inquiry"],
//     allowPopUpAnimationModal: true,
//     popUpAnimations: {
//       popUpAnimationText: "👋 Need help? We're here to assist you!",
//       popUpDelay: 2000,
//       popUpTimeout: 5000
//     },
//     LivechatInitialMessage: "Connect with our live support team",
//     ConnectionRequestQuestion: "Want to chat with a human agent?",
//     allowLeadsCollection: true,
//     allowTicketCollection: true,
//     allowFileAttachments: true
//   },
//   toggleChat,
//   isOpen = false,
//   widgetId = "widget-1",
//   actionText = "Let's chat",
//   statusBubbleIcon = true,
//   statusBubbleText = true,
// }) => {
//   const [activeTab, setActiveTab] = useState("home");
//   const [visible, setVisible] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: formData?.initialMessage || "Hi there! How can I help you today?",
//       sender: "bot",
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     }
//   ]);
//   const [newMessage, setNewMessage] = useState("");

//   const switchTab = (tab) => {
//     setActiveTab(tab);
//   };

//   useEffect(() => {
//     const delay = formData?.popUpAnimations?.popUpDelay || 0;
//     const timeout = formData?.popUpAnimations?.popUpTimeout || 0;

//     if (delay > 0) {
//       const showTimer = setTimeout(() => {
//         setVisible(true);
//         if (timeout > 0) {
//           setTimeout(() => setVisible(false), timeout);
//         }
//       }, delay);

//       return () => clearTimeout(showTimer);
//     }
//   }, [formData?.popUpAnimations]);

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const userMessage = {
//         id: messages.length + 1,
//         text: newMessage,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };

//       setMessages([...messages, userMessage]);
//       setNewMessage("");
//       setIsTyping(true);

//       // Simulate bot response
//       setTimeout(() => {
//         setIsTyping(false);
//         const botResponse = {
//           id: messages.length + 2,
//           text: "Thanks for your message! I'll help you with that.",
//           sender: "bot",
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
//         setMessages(prev => [...prev, botResponse]);
//       }, 1500);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-50 font-sans">
//       {/* Popup Animation */}
//       {visible && formData?.allowPopUpAnimationModal && (
//         <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-xl shadow-xl p-4 max-w-xs z-50 transform animate-bounce">
//           <p className="text-sm text-gray-700 mb-2">
//             {formData?.popUpAnimations?.popUpAnimationText}
//           </p>
//           <button 
//             onClick={() => setVisible(false)} 
//             className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
//           >
//             Got it
//           </button>
//         </div>
//       )}



//         {/* Chat Bubble */}
//        <button
//          onClick={toggleChat}
//          className="bg-black text-white p-2 rounded-full shadow-lg flex items-center justify-center space-x-2 relative"
//         //  style={{
//         //     width: formData?.bubbleSize === 'small' ? '40px' : formData?.bubbleSize === 'large' ? '60px' : '50px',
//         //     height: formData?.bubbleSize === 'small' ? '40px' : formData?.bubbleSize === 'large' ? '60px' : '50px',
//         //     borderRadius: formData?.bubbleShape === 'square' ? '8px' : '',  Circle or Square
//         //     backgroundColor: formData?.headingBgColor,
//         //     bottom: formData?.position?.includes("bottom") ? "20px" : "auto",
//         //     top: formData?.position?.includes("top") ? "20px" : "auto",
//         //     left: formData?.position?.includes("left") ? "20px" : "auto",
//         //     right: formData?.position?.includes("right") ? "20px" : "auto",

//         //  }}
//        >
//          {formData?.statusBubbleIcon && <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
//          {formData?.statusBubbleText && <span className="text-xs">Offline</span>}
//          {/* Custom Icon (SVG or Image) */}
//          {formData?.bubbleIcon ? (
//            formData?.bubbleIcon.startsWith("<svg") ? (
//              <div className="text-3xl" dangerouslySetInnerHTML={{ __html: formData?.bubbleIcon }} />
//            ) : (
//              <img src={formData?.bubbleIcon} alt="Custom Icon" className="w-3 h-3" />
//            )
//          ) : (

//            <IoChatbubble className="text-3xl" />
//          )}
//          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" > <path d="M8 15c-3.866 0-7-2.91-7-6.5S4.134 2 8 2s7 2.91 7 6.5c0 1.228-.344 2.37-.928 3.328A6.992 6.992 0 0 1 8 15z" /> <circle cx="8" cy="10.5" r="1.5" /> <circle cx="5" cy="10.5" r="1.5" /> <circle cx="11" cy="10.5" r="1.5" /> </svg> */}
//        </button>

//       {/* Chat Widget */}
//       {isOpen && (
//         <div 
//           className="fixed bottom-5 right-5 bg-white rounded-2xl shadow-2xl text-sm z-50 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-bottom-5"
//           style={{
//             width: '384px',
//             height: window.innerWidth < 768 ? '500px' : '600px',
//             maxHeight: '90vh'
//           }}
//         >
//           {/* Header */}
//           <div className="bg-gray-900 text-white p-4 rounded-t-2xl relative">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                   <div className="relative">
//                     <img 
//                       src={formData?.widget_image} 
//                       alt="Assistant" 
//                       className="w-10 h-10 rounded-full border-2 border-white/20" 
//                     />
//                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-gray-900"></div>
//                   </div>
//                 )}
//                 <div>
//                   <h2 className="font-semibold">{formData?.name || 'Assistant'}</h2>
//                   <p className="text-xs text-gray-300 flex items-center">
//                     <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
//                     Online now
//                   </p>
//                 </div>
//               </div>
//               <button 
//                 onClick={toggleChat} 
//                 className="text-gray-300 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
//               >
//                 <IoClose className="text-xl" />
//               </button>
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="flex-1 overflow-hidden" style={{ height: 'calc(100% - 140px)' }}>
//             {/* Home Tab */}
//             {activeTab === "home" && formData?.homeTab && (
//               <div className="h-full overflow-y-auto p-4 space-y-4 pb-20">

// {/* let the home page or home tab have this of header that will be long a bit , note only the home tab alone , but other tabs should be average,*/}
//                   <div className="flex flex-col z-10 rounded-t-lg p-4 bg-black text-white" >
//                    {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                      <img src={formData?.widget_image} alt="Chatbot" className="w-10 h-10 rounded-full" />
//                    )}
//                    <div className="text-3xl mb-2">{formData?.name || 'Hi Sophie 👋'}</div>
//                    <div className="w-60 text-gray-200  mb-1">{actionText}</div>
//                  </div>
// {/* let the home page or home tab have this of header that will be long a bit , note only the home tab alone*/}

//                 {/* Welcome Section */}
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
//                   <div className="flex items-center space-x-3 mb-3">
//                     <div className="flex -space-x-2">
//                       <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                       <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                       <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-600">Our usual reply time</p>
//                       <p className="text-sm font-semibold text-gray-800 flex items-center">
//                         <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
//                         A few minutes
//                       </p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => switchTab("chat")}
//                     className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
//                   >
//                     <span>Send us a message</span>
//                     <IoSend className="text-sm transform rotate-0" />
//                   </button>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-gray-800 text-sm">Quick Actions</h3>
//                   {formData?.actionButtons?.map((button, index) => (
//                     <a key={index} href={button.link || "#"} className="block">
//                       <div className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
//                         <span className="text-sm text-gray-700">{button.text || "Default Label"}</span>
//                         <IoChevronDown className="text-gray-400 transform -rotate-90" />
//                       </div>
//                     </a>
//                   ))}
//                 </div>

//                 {/* FAQ Section */}
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-gray-800 text-sm">Frequently Asked</h3>
//                   <div className="space-y-2">
//                     {formData?.actionFaq?.map((faq, index) => (
//                       <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200">
//                         <summary className="flex cursor-pointer list-none items-center justify-between p-3 font-medium text-sm">
//                           <span className="text-gray-700">{faq.question}</span>
//                           <span className="transition group-open:rotate-180">
//                             <IoChevronDown className="text-gray-400" />
//                           </span>
//                         </summary>
//                         <div className="px-3 pb-3">
//                           <p className="text-xs text-gray-600">{faq.answer}</p>
//                         </div>
//                       </details>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Chat Tab */}
//             {activeTab === "chat" && formData?.chatbotTab && (
//               <div className="flex flex-col h-full">
//                 {/* Messages Area */}
//                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                   {messages.map((message) => (
//                     <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                       <div className={`max-w-xs px-4 py-2 rounded-2xl ${
//                         message.sender === 'user' 
//                           ? 'bg-gray-900 text-white rounded-br-md' 
//                           : 'bg-gray-100 text-gray-800 rounded-bl-md'
//                       }`}>
//                         <p className="text-sm">{message.text}</p>
//                         <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
//                           {message.timestamp}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Typing Indicator */}
//                   {isTyping && (
//                     <div className="flex justify-start">
//                       <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
//                         <div className="flex space-x-1">
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Suggested Messages */}
//                 <div className="p-4 border-t border-gray-100">
//                   <div className="flex space-x-2 overflow-x-auto pb-2">
//                     {formData?.suggestedMessages?.map((message, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setNewMessage(message)}
//                         className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors"
//                       >
//                         {message}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Input Area */}
//                 <div className="p-4 border-t border-gray-100 bg-white">
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="text"
//                       value={newMessage}
//                       onChange={(e) => setNewMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Type your message..."
//                       className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
//                     />
//                     {formData?.allowFileAttachments && (
//                       <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <IoFileTrayFull className="text-lg" />
//                       </button>
//                     )}
//                     <button
//                       onClick={handleSendMessage}
//                       disabled={!newMessage.trim()}
//                       className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed"
//                     >
//                       <IoSend className="text-sm" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Live Chat Tab */}
//             {activeTab === "livechat" && formData?.livechatTab && (
//               <div className="h-full flex flex-col">
//                 <div className="flex-1 p-4 flex items-center justify-center">
//                   <div className="text-center space-y-4">
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//                       <IoPersonOutline className="text-2xl text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-800 mb-2">Live Chat Support</h3>
//                       <p className="text-sm text-gray-600 mb-4">{formData?.LivechatInitialMessage}</p>
//                       <p className="text-xs text-gray-500 mb-4">{formData?.ConnectionRequestQuestion}</p>
//                       <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-colors">
//                         Connect with Agent
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Bottom Navigation */}
//           {formData?.modernStructure && (
//             <div className="bg-white border-t border-gray-100 p-2">
//               <div className="flex justify-around items-center">
//                 {formData?.homeTab && (
//                   <button
//                     onClick={() => switchTab("home")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
//                       activeTab === "home" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <IoHome className="text-lg mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.HomeTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.chatbotTab && (
//                   <button
//                     onClick={() => switchTab("chat")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
//                       activeTab === "chat" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <IoChatbubble className="text-lg mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.BotTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.livechatTab && (
//                   <button
//                     onClick={() => switchTab("livechat")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
//                       activeTab === "livechat" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <IoPersonOutline className="text-lg mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.LivechatTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//               </div>

//               {/* Powered by */}
//               <div className="text-center mt-2 pt-2 border-t border-gray-100">
//                 <p className="text-xs text-gray-400">
//                   Powered by <span className="text-orange-500 font-medium">Bucxai</span>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BothModernWidget;

// import React, { useState, useEffect } from "react";
// import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";

// const BothModernWidget = ({
//   formData = {
//     name: "Assistant",
//     initialMessage: "Hi there! How can I help you today?",
//     actionText: "Let's chat",
//     callToActionText: "Start Chat",
//     homeTab: true,
//     chatbotTab: true,
//     livechatTab: true,
//     modernStructure: true,
//     allowWidgetDisplayPicture: true,
//     widget_image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
//     headingBgColor: "#1f2937",
//     containerBgColor: "#ffffff",
//     botBgColor: "#f3f4f6",
//     textColor: "#374151",
//     HomeTabLabel: "Home",
//     BotTabLabel: "Chat",
//     LivechatTabLabel: "Live Chat",
//     HideTabIcon: false,
//     HideTabLabel: false,
//     actionButtons: [
//       { text: "View Pricing", link: "#pricing" },
//       { text: "Contact Support", link: "#support" },
//       { text: "Documentation", link: "#docs" }
//     ],
//     actionFaq: [
//       { question: "How does billing work?", answer: "We offer flexible billing options including monthly and annual plans." },
//       { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time with no penalties." }
//     ],
//     suggestedMessages: ["I need help", "Pricing info", "Technical support", "General inquiry"],
//     allowPopUpAnimationModal: true,
//     popUpAnimations: {
//       popUpAnimationText: "👋 Need help? We're here to assist you!",
//       popUpDelay: 2000,
//       popUpTimeout: 5000
//     },
//     LivechatInitialMessage: "Connect with our live support team",
//     ConnectionRequestQuestion: "Want to chat with a human agent?",
//     allowLeadsCollection: true,
//     allowTicketCollection: true,
//     allowFileAttachments: true
//   },
//   toggleChat,
//   isOpen = false,
//   widgetId = "widget-1",
//   actionText = "Let's chat",
//   statusBubbleIcon = true,
//   statusBubbleText = true,
// }) => {
//   const [activeTab, setActiveTab] = useState("home");
//   const [visible, setVisible] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showLeadsForm, setShowLeadsForm] = useState(false);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [showConnectionModal, setShowConnectionModal] = useState(false);
//   const [showLoadingModal, setShowLoadingModal] = useState(false);
//   const [showConnectionFailedModal, setShowConnectionFailedModal] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connectionStatus, setConnectionStatus] = useState("");

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: formData?.initialMessage || "Hi there! How can I help you today?",
//       sender: "bot",
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     }
//   ]);
//   const [newMessage, setNewMessage] = useState("");

//   // Form states
//   const [leadsForm, setLeadsForm] = useState({
//     fullname: "",
//     email: "",
//     message: ""
//   });

//   const [ticketForm, setTicketForm] = useState({
//     subject: "",
//     description: "",
//     priority: "medium",
//     category: "general",
//     attachment: null
//   });

//   const [connectionForm, setConnectionForm] = useState({
//     name: "",
//     title: "",
//     message: ""
//   });

//   const loadingMessages = [
//     "Connecting you to an agent...",
//     "Finding the best agent for you...",
//     "Please wait a moment...",
//     "Almost there...",
//     "Establishing connection..."
//   ];

//   const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

//   const switchTab = (tab) => {
//     setActiveTab(tab);
//     setShowSettings(false);
//   };

//   useEffect(() => {
//     const delay = formData?.popUpAnimations?.popUpDelay || 0;
//     const timeout = formData?.popUpAnimations?.popUpTimeout || 0;

//     if (delay > 0) {
//       const showTimer = setTimeout(() => {
//         setVisible(true);
//         if (timeout > 0) {
//           setTimeout(() => setVisible(false), timeout);
//         }
//       }, delay);

//       return () => clearTimeout(showTimer);
//     }
//   }, [formData?.popUpAnimations]);

//   // Animate loading messages
//   useEffect(() => {
//     if (showLoadingModal) {
//       const interval = setInterval(() => {
//         setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
//       }, 2000);
//       return () => clearInterval(interval);
//     }
//   }, [showLoadingModal]);

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const userMessage = {
//         id: messages.length + 1,
//         text: newMessage,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };

//       setMessages([...messages, userMessage]);
//       setNewMessage("");
//       setIsTyping(true);

//       setTimeout(() => {
//         setIsTyping(false);
//         const botResponse = {
//           id: messages.length + 2,
//           text: "Thanks for your message! I'll help you with that.",
//           sender: "bot",
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
//         setMessages(prev => [...prev, botResponse]);
//       }, 1500);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleLeadsFormSubmit = (e) => {
//     e.preventDefault();
//     // Process leads form
//     console.log("Leads form submitted:", leadsForm);
//     setShowLeadsForm(false);
//     setLeadsForm({ fullname: "", email: "", message: "" });
//     // Show success message
//     alert("Thank you! We'll get back to you soon.");
//   };

//   const handleTicketFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Ticket form submitted:", ticketForm);
//     setShowTicketForm(false);
//     setTicketForm({ subject: "", description: "", priority: "medium", category: "general", attachment: null });
//     alert("Ticket created successfully! We'll review it shortly.");
//   };

//   const handleConnectionRequest = (e) => {
//     e.preventDefault();
//     setShowConnectionModal(false);
//     setShowLoadingModal(true);
//     setIsConnecting(true);
//     setConnectionStatus("Connecting...");

//     // Simulate connection attempt for 1 minute
//     const connectionTimer = setTimeout(() => {
//       setShowLoadingModal(false);
//       setShowConnectionFailedModal(true);
//       setIsConnecting(false);
//       setConnectionStatus("");
//     }, 60000); // 1 minute

//     // Store timer for potential cancellation
//     window.connectionTimer = connectionTimer;
//   };

//   const stopConnectionRequest = () => {
//     if (window.connectionTimer) {
//       clearTimeout(window.connectionTimer);
//     }
//     setShowLoadingModal(false);
//     setIsConnecting(false);
//     setConnectionStatus("");
//   };

//   const continueInBackground = () => {
//     setShowLoadingModal(false);
//     setConnectionStatus("Connecting...");
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setTicketForm(prev => ({ ...prev, attachment: file }));
//     }
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-50 font-sans">
//       {/* Popup Animation */}
//       {visible && formData?.allowPopUpAnimationModal && (
//         <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-xl shadow-xl p-4 max-w-xs z-50 transform animate-bounce">
//           <p className="text-sm text-gray-700 mb-2">
//             {formData?.popUpAnimations?.popUpAnimationText}
//           </p>
//           <button 
//             onClick={() => setVisible(false)} 
//             className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
//           >
//             Got it
//           </button>
//         </div>
//       )}

//       {/* Chat Bubble */}
//       <button
//         onClick={toggleChat}
//         className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 relative hover:bg-gray-800 transition-all duration-200"
//       >
//         {formData?.statusBubbleIcon && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
//         {formData?.statusBubbleText && <span className="text-xs">Online</span>}
//         <MessageCircle className="text-2xl" />
//       </button>


//       {/* Chat Widget */}
//       {isOpen && (
//         <div 
//           className="fixed bottom-5 right-5 bg-white rounded-2xl shadow-2xl text-sm z-50 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-bottom-5"
//           style={{
//             width: '384px',
//             height: window.innerWidth < 768 ? '760px' : '800px',
//             maxHeight: '90vh'
//           }}
//            >
//           {/* Header */}
//           <div className="bg-gray-900 text-white p-4 rounded-t-2xl relative">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                   <div className="relative">
//                     <img 
//                       src={formData?.widget_image} 
//                       alt="Assistant" 
//                       className="w-10 h-10 rounded-full border-2 border-white/20" 
//                     />
//                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-gray-900"></div>
//                   </div>
//                 )}
//                 <div>
//                   <h2 className="font-semibold">{formData?.name || 'Assistant'}</h2>
//                   <p className="text-xs text-gray-300 flex items-center">
//                     <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
//                     {isConnecting ? connectionStatus : "Online now"}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="relative">
//                   <button 
//                     onClick={() => setShowSettings(!showSettings)}
//                     className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
//                   >
//                     <MoreHorizontal className="w-5 h-5" />
//                   </button>

//                   {/* Settings Dropdown */}
//                   {showSettings && (
//                     <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-10">
//                       <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
//                         <Star className="w-4 h-4" />
//                         <span>Rate Us</span>
//                       </button>
//                       <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
//                         <Globe className="w-4 h-4" />
//                         <span>Language</span>
//                       </button>
//                       <hr className="my-2 border-gray-200" />
//                       <button 
//                         onClick={() => {
//                           setShowSettings(false);
//                           setShowTicketForm(true);
//                         }}
//                         className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
//                       >
//                         <FileText className="w-4 h-4" />
//                         <span>Create Ticket</span>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//                 <button 
//                   onClick={toggleChat} 
//                   className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="flex-1 overflow-hidden" style={{ height: 'calc(100% - 140px)' }}>
//             {/* Home Tab */}
//             {activeTab === "home" && formData?.homeTab && (
//               <div className="h-full overflow-y-auto">
//                 {/* Extended Home Header */}
//                 <div className="bg-black text-white p-6">
//                   <div className="flex items-center space-x-4 mb-4">
//                     {formData?.allowWidgetDisplayPicture && formData?.widget_image && (
//                       <img src={formData?.widget_image} alt="Assistant" className="w-12 h-12 rounded-full border-2 border-white/30" />
//                     )}
//                     <div>
//                       <h1 className="text-2xl font-bold mb-1">{formData?.name || 'Hi Sophie 👋'}</h1>
//                       <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
//                         {actionText || "Welcome! We're here to help you with anything you need. Let's get started!"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 space-y-4 pb-20">
//                   {/* Welcome Section */}
//                   <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
//                     <div className="flex items-center space-x-3 mb-3">
//                       <div className="flex -space-x-2">
//                         <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                         <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                         <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=32&h=32&fit=crop&crop=face" alt="Team" />
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-600">Our usual reply time</p>
//                         <p className="text-sm font-semibold text-gray-800 flex items-center">
//                           <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
//                           A few minutes
//                         </p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => switchTab("chat")}
//                       className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
//                     >
//                       <span>Send us a message</span>
//                       <Send className="w-4 h-4" />
//                     </button>
//                   </div>

//                   {/* Quick Actions */}
//                   <div className="space-y-2">
//                     <h3 className="font-semibold text-gray-800 text-sm">Quick Actions</h3>
//                     {formData?.actionButtons?.map((button, index) => (
//                       <a key={index} href={button.link || "#"} className="block">
//                         <div className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
//                           <span className="text-sm text-gray-700">{button.text || "Default Label"}</span>
//                           <ChevronDown className="w-4 h-4 text-gray-400 transform -rotate-90" />
//                         </div>
//                       </a>
//                     ))}
//                     <button
//                       onClick={() => setShowLeadsForm(true)}
//                       className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
//                     >
//                       <span className="text-sm text-gray-700">Get in Touch</span>
//                       <Mail className="w-4 h-4 text-gray-400" />
//                     </button>
//                   </div>

//                   {/* FAQ Section */}
//                   <div className="space-y-2">
//                     <h3 className="font-semibold text-gray-800 text-sm">Frequently Asked</h3>
//                     <div className="space-y-2">
//                       {formData?.actionFaq?.map((faq, index) => (
//                         <details key={index} className="group bg-gray-50 rounded-lg border border-gray-200">
//                           <summary className="flex cursor-pointer list-none items-center justify-between p-3 font-medium text-sm">
//                             <span className="text-gray-700">{faq.question}</span>
//                             <span className="transition group-open:rotate-180">
//                               <ChevronDown className="w-4 h-4 text-gray-400" />
//                             </span>
//                           </summary>
//                           <div className="px-3 pb-3">
//                             <p className="text-xs text-gray-600">{faq.answer}</p>
//                           </div>
//                         </details>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Chat Tab */}
//             {activeTab === "chat" && formData?.chatbotTab && (
//               <div className="flex flex-col h-full">
//                 {/* Messages Area */}
//                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                   {messages.map((message) => (
//                     <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                       <div className={`max-w-xs px-4 py-2 rounded-2xl ${
//                         message.sender === 'user' 
//                           ? 'bg-gray-900 text-white rounded-br-md' 
//                           : 'bg-gray-100 text-gray-800 rounded-bl-md'
//                       }`}>
//                         <p className="text-sm">{message.text}</p>
//                         <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
//                           {message.timestamp}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   {/* Typing Indicator */}
//                   {isTyping && (
//                     <div className="flex justify-start">
//                       <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
//                         <div className="flex space-x-1">
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Suggested Messages */}
//                 <div className="p-4 border-t border-gray-100">
//                   <div className="flex space-x-2 overflow-x-auto pb-2">
//                     {formData?.suggestedMessages?.map((message, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setNewMessage(message)}
//                         className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors"
//                       >
//                         {message}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Input Area */}
//                 <div className="p-4 border-t border-gray-100 bg-white">
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="text"
//                       value={newMessage}
//                       onChange={(e) => setNewMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Type your message..."
//                       className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
//                     />
//                     {formData?.allowFileAttachments && (
//                       <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <FileText className="w-5 h-5" />
//                       </button>
//                     )}
//                     <button
//                       onClick={handleSendMessage}
//                       disabled={!newMessage.trim()}
//                       className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors disabled:cursor-not-allowed"
//                     >
//                       <Send className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Live Chat Tab */}
//             {activeTab === "livechat" && formData?.livechatTab && (
//               <div className="h-full flex flex-col">
//                 <div className="flex-1 p-4 flex items-center justify-center">
//                   <div className="text-center space-y-4">
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//                       <Phone className="w-8 h-8 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-800 mb-2">Live Chat Support</h3>
//                       <p className="text-sm text-gray-600 mb-4">{formData?.LivechatInitialMessage}</p>
//                       <p className="text-xs text-gray-500 mb-4">{formData?.ConnectionRequestQuestion}</p>
//                       <button 
//                         onClick={() => setShowConnectionModal(true)}
//                         className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-colors flex items-center space-x-2 mx-auto"
//                       >
//                         <Phone className="w-4 h-4" />
//                         <span>Connect with Agent</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Bottom Navigation */}
//           {formData?.modernStructure && (
//             <div className="bg-white border-t border-gray-100 p-2">
//               <div className="flex justify-around items-center">
//                 {formData?.homeTab && (
//                   <button
//                     onClick={() => switchTab("home")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
//                       activeTab === "home" ? "bg-gray-900 text-white shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <Home className="w-5 h-5 mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.HomeTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.chatbotTab && (
//                   <button
//                     onClick={() => switchTab("chat")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
//                       activeTab === "chat" ? "bg-gray-900 text-white shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <MessageCircle className="w-5 h-5 mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.BotTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//                 {formData?.livechatTab && (
//                   <button
//                     onClick={() => switchTab("livechat")}
//                     className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
//                       activeTab === "livechat" ? "bg-gray-900 text-white shadow-sm" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {!formData?.HideTabIcon && <User className="w-5 h-5 mb-1" />}
//                     {!formData?.HideTabLabel && (
//                       <span className="text-xs">{formData?.LivechatTabLabel}</span>
//                     )}
//                   </button>
//                 )}
//               </div>

//               {/* Powered by */}
//               <div className="text-center mt-2 pt-2 border-t border-gray-100">
//                 <p className="text-xs text-gray-400">
//                   Powered by <span className="text-orange-500 font-medium">Bucxai</span>
//                 </p>
//               </div>
//             </div>
//           )}



//       {/* Modals */}
//       {/* Leads Form Modal */}
//       {showLeadsForm && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
//             <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Get in Touch</h2>
//                 <button onClick={() => setShowLeadsForm(false)} className="text-gray-300 hover:text-white">
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-300 text-sm mt-2">Let us know how we can help you</p>
//             </div>
//             <form onSubmit={handleLeadsFormSubmit} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                 <input
//                   type="text"
//                   required
//                   value={leadsForm.fullname}
//                   onChange={(e) => setLeadsForm(prev => ({ ...prev, fullname: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                 <input
//                   type="email"
//                   required
//                   value={leadsForm.email}
//                   onChange={(e) => setLeadsForm(prev => ({ ...prev, email: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
//                 <textarea
//                   rows={3}
//                   value={leadsForm.message}
//                   onChange={(e) => setLeadsForm(prev => ({ ...prev, message: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
//                   placeholder="Tell us more about how we can help..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Ticket Form Modal */}
//       {showTicketForm && (
//         <div className=" inset-0 bg-black bg-opacity-50 z-[60] flex items-center absolute justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5 max-h-[90vh] overflow-y-auto">
//             <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Create Support Ticket</h2>
//                 <button onClick={() => setShowTicketForm(false)} className="text-gray-300 hover:text-white">
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-300 text-sm mt-2">Describe your issue and we'll help you out</p>
//             </div>
//             <form onSubmit={handleTicketFormSubmit} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
//                 <input
//                   type="text"
//                   required
//                   value={ticketForm.subject}
//                   onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   placeholder="Brief description of your issue"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                   <select
//                     value={ticketForm.category}
//                     onChange={(e) => setTicketForm(prev => ({ ...prev, category: e.target.value }))}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="general">General</option>
//                     <option value="technical">Technical</option>
//                     <option value="billing">Billing</option>
//                     <option value="feature">Feature Request</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
//                   <select
//                     value={ticketForm.priority}
//                     onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="low">Low</option>
//                     <option value="medium">Medium</option>
//                     <option value="high">High</option>
//                     <option value="urgent">Urgent</option>
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
//                 <textarea
//                   rows={4}
//                   required
//                   value={ticketForm.description}
//                   onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
//                   placeholder="Provide detailed information about your issue..."
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Attachment (Optional)</label>
//                 <div className="relative">
//                   <input
//                     type="file"
//                     onChange={handleFileUpload}
//                     className="hidden"
//                     id="file-upload"
//                     accept="image/*,.pdf,.doc,.docx"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors flex items-center space-x-2"
//                   >
//                     <Upload className="w-5 h-5 text-gray-400" />
//                     <span className="text-gray-600">
//                       {ticketForm.attachment ? ticketForm.attachment.name : "Choose file..."}
//                     </span>
//                   </label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
//               >
//                 Create Ticket
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Connection Request Modal */}
//       {showConnectionModal && (
//         <div className="inset-0 bg-black bg-opacity-50 z-[60] flex items-center absolute justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-5">
//             <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Connect with Agent</h2>
//                 <button onClick={() => setShowConnectionModal(false)} className="text-gray-300 hover:text-white">
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-300 text-sm mt-2">Fill out the form to connect with a live agent</p>
//             </div>
//             <form onSubmit={handleConnectionRequest} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
//                 <input
//                   type="text"
//                   required
//                   value={connectionForm.name}
//                   onChange={(e) => setConnectionForm(prev => ({ ...prev, name: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Title/Subject *</label>
//                 <input
//                   type="text"
//                   required
//                   value={connectionForm.title}
//                   onChange={(e) => setConnectionForm(prev => ({ ...prev, title: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   placeholder="What's this about?"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                 <textarea
//                   rows={3}
//                   required
//                   value={connectionForm.message}
//                   onChange={(e) => setConnectionForm(prev => ({ ...prev, message: e.target.value }))}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
//                   placeholder="Describe your reason for connecting..."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
//               >
//                 Send Request
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Loading Modal */}
//       {showLoadingModal && (
//         <div className="inset-0 bg-black bg-opacity-50 z-[70] flex items-center absolute justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform animate-in slide-in-from-bottom-5">
//             <div className="p-8 text-center">
//               <Loader2 className="w-12 h-12 animate-spin mx-auto text-green-600 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Connecting...</h3>
//               <p className="text-sm text-gray-600 mb-6 min-h-[40px] flex items-center justify-center">
//                 <span className="animate-pulse">{loadingMessages[currentLoadingMessage]}</span>
//               </p>
//               <div className="space-y-2">
//                 <button
//                   onClick={continueInBackground}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Continue
//                 </button>
//                 <button
//                   onClick={stopConnectionRequest}
//                   className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Stop Request
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Connection Failed Modal */}
//       {showConnectionFailedModal && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform animate-in slide-in-from-bottom-5">
//             <div className="p-8 text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <X className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Agent Unavailable</h3>
//               <p className="text-sm text-gray-600 mb-6">
//                 Our live chat agents are currently offline or unavailable. Please try again later or leave us a message.
//               </p>
//               <div className="space-y-2">
//                 <button
//                   onClick={() => {
//                     setShowConnectionFailedModal(false);
//                     setShowLeadsForm(true);
//                   }}
//                   className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Leave a Message
//                 </button>
//                 <button
//                   onClick={() => setShowConnectionFailedModal(false)}
//                   className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//         </div>
//       )}
//     </div>
//   );
// };

//  export default BothModernWidget;

import React, { useState, useEffect } from "react";
import { MessageCircle, FileText, X, Send, ChevronDown, Home, User, MoreHorizontal, Star, Globe, Loader2, Upload, Phone, Mail } from "lucide-react";
import ConnectionFailedModal from "./BothModern/ConnectionFailedModal";
import PopupAnimation from "./BothModern/PopupAnimation";
import ChatBubble from "./BothModern/ChatBubble";
import WidgetHeader from "./BothModern/WidgetHeader";
import HomeTab from "./BothModern/HomeTab";
import ChatTab from "./BothModern/chatTab";
import LivechatTab from "./BothModern/LivechatTab";
import BottomNav from "./BothModern/BottomNav";
import LeadsFormModal from "./BothModern/LeadsFormModal";
import TicketFormModal from "./BothModern/TicketFormModal";
import ConnectionRequestModal from "./BothModern/connectionRequestModal";
import LoadingModal from "./BothModern/LoadingModal";
import PoweredBy from "./BothModern/poweredBy";
import ErrorHandler from "./BothModern/ErrorHandler";
import AcceptedModal from "./BothModern/AcceptedModal";
import useWebSocket from "../hooks/useWebSocket";




const BothModernWidget = ({
  formData = {
    name: "Assistant",
    initialMessage: "Hi there! How can I help you today?",
    actionText: "Let's chat",
    callToActionText: "Start Chat",
    homeTab: true,
    chatbotTab: true,
    livechatTab: true,
    modernStructure: true,
    allowWidgetDisplayPicture: true,
    widget_image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    headingBgColor: "#1f2937",
    containerBgColor: "#ffffff",
    botBgColor: "#f3f4f6",
    textColor: "#374151",
    HomeTabLabel: "Home",
    BotTabLabel: "Chat",
    LivechatTabLabel: "Live Chat",
    HideTabIcon: false,
    HideTabLabel: false,
    actionButtons: [
      { text: "View Pricing", link: "#pricing" },
      { text: "Contact Support", link: "#support" },
      { text: "Documentation", link: "#docs" }
    ],
    actionFaq: [
      { question: "How does billing work?", answer: "We offer flexible billing options including monthly and annual plans." },
      { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time with no penalties." }
    ],
    suggestedMessages: ["I need help", "Pricing info", "Technical support", "General inquiry"],
    allowPopUpAnimationModal: true,
    popUpAnimations: {
      popUpAnimationText: "👋 Need help? We're here to assist you!",
      popUpDelay: 2000,
      popUpTimeout: 5000
    },
    LivechatInitialMessage: "Connect with our live support team",
    ConnectionRequestQuestion: "Want to chat with a human agent?",
    allowLeadsCollection: true,
    allowTicketCollection: true,
    allowFileAttachments: true
  },
  toggleChat,
  isOpen = false,
  widgetId = "widget-1",
  actionText = "Let's chat",
  statusBubbleIcon = true,
  statusBubbleText = true,
  error = null, // New prop for error handling
  loading = false,   // 👈 add loader prop
  onRetryConnection,
  userDetails,
  visitorId,
  leadDataExists
}) => {
  const [activeTab, setActiveTab] = useState("home");
  const [visible, setVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLeadsForm, setShowLeadsForm] = useState(true);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showConnectionFailedModal, setShowConnectionFailedModal] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("");
  const [isLiveChatConnected, setIsLiveChatConnected] = useState(false);
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

const toggleExpand = () => setIsExpanded((prev) => !prev);


  const [messages, setMessages] = useState([
    {
      id: 1,
      text: formData?.initialMessage || "Hi there! How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const [liveMessages, setLiveMessages] = useState([
    {
      id: 1,
      text: "Hello! An agent is connected. How can I assist you?",
      sender: "agent",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newLiveMessage, setNewLiveMessage] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);

  // Form states
  const [leadsForm, setLeadsForm] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const [ticketForm, setTicketForm] = useState({
    subject: "",
    description: "",
    priority: "medium",
    category: "general",
    attachment: null
  });

  const [connectionForm, setConnectionForm] = useState({
    name: "",
    title: "",
    message: ""
  });

  const loadingMessages = [
    "Connecting you to an agent...",
    "Finding the best agent for you...",
    "Please wait a moment...",
    "Almost there...",
    "Establishing connection..."
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const widgetName = userDetails?.name || formData.name;

  // Use the WebSocket hook
  
  const { isReceiverUserOnline, isRequestConnecting, sendWebSocketMessage, handleConnectionRequest, stopConnectionAttempt, } =  //receiving
    useWebSocket({ widgetId,userDetails,isOpen,
    // onOnlineStatus: (status) => {
    //   setIsReceiverUserOnline(status);
    //   // Update connectionStatus or other UI if needed
    // }, 
    onConnectionAccepted: () => {
      setIsChatEnabled(true);
      setIsLiveChatConnected(true);
      setShowAcceptedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onRejection: () => {
      setIsChatEnabled(false);
      setShowRejectedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onIncomingMessage: (newMsg) => {
      setIsChatEnabled(true);
      setLiveMessages((prev) => [...prev, newMsg]);
    },
    onTyping: (isTyping) => setIsAgentTyping(isTyping),
    onError: () => {
      setShowConnectionFailedModal(true);
      setShowLoadingModal(false);
      setIsConnecting(false);
      setConnectionStatus("");
    },
    onConnecting: (isConnecting) => {
      setIsConnecting(isConnecting);
      setConnectionStatus(isConnecting ? "Connecting..." : "");
    },
    visitorId
  });

  // Utility functions (localStorage, etc.) - move to a utils file if shared
  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  const cleanUpData = (data) => {
    return data.map(entry => {
      return {
        id: entry.id === "null" ? null : entry.id,
        type: entry.type,
        message: entry.message
      };
    });
  };

  const setLocalStorageWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getLocalStorageWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  };

  const saveLiveChatToLocalStorage = () => {
    const chatData = liveMessages.map(msg => ({
      id: msg.id === "null" ? null : msg.id,
      type: msg.sender === "user" ? "sender" : "receiver",
      message: msg.text
    }));
    const sixtyDaysInMilliseconds = 60 * 24 * 60 * 60 * 1000;
    setLocalStorageWithExpiry("livechatData", cleanUpData(chatData), sixtyDaysInMilliseconds);
  };

  useEffect(() => {
    saveLiveChatToLocalStorage();
  }, [liveMessages]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setShowSettings(false);
  };

  useEffect(() => {
    const delay = formData?.popUpAnimations?.popUpDelay || 0;
    const timeout = formData?.popUpAnimations?.popUpTimeout || 0;

    if (delay > 0) {
      const showTimer = setTimeout(() => {
        setVisible(true);
        if (timeout > 0) {
          setTimeout(() => setVisible(false), timeout);
        }
      }, delay);

      return () => clearTimeout(showTimer);
    }
  }, [formData?.popUpAnimations]);

  // Animate loading messages
  useEffect(() => {
    if (showLoadingModal) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showLoadingModal]);

  // Auto-switch after 5 seconds if accepted modal is shown
  useEffect(() => {
    if (showAcceptedModal) {
      const autoSwitchTimer = setTimeout(() => {
        setShowAcceptedModal(false);
        switchTab("livechat");
      }, 5000);
      return () => clearTimeout(autoSwitchTimer);
    }
  }, [showAcceptedModal]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll help you with that.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

  const handleSendLiveMessage = () => {
    if (newLiveMessage.trim()) {
      const userMessage = {
        id: liveMessages.length + 1,
        text: newLiveMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setLiveMessages([...liveMessages, userMessage]);
      setNewLiveMessage("");
      setIsAgentTyping(true);

      setTimeout(() => {
        setIsAgentTyping(false);
        const agentResponse = {
          id: liveMessages.length + 2,
          text: "Got it! Let me assist you with that.",
          sender: "agent",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setLiveMessages(prev => [...prev, agentResponse]);
      }, 1500);
    }
  };

  // const handleSendLiveMessage = () => {
  //   if (newLiveMessage.trim() && isChatEnabled) {
  //     const userMessage = {
  //       id: liveMessages.length + 1,
  //       text: newLiveMessage,
  //       sender: "user",
  //       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  //     };

  //     setLiveMessages([...liveMessages, userMessage]);
  //     sendWebSocketMessage({
  //       from_user: userDetails?.user_id || 'visitor',
  //       to_user: userDetails?.receiver_id || 'agent',
  //       message_text: newLiveMessage
  //     });
  //     setNewLiveMessage("");
  //   }
  // };

  useEffect(() => {
    if (newLiveMessage.trim() && isChatEnabled) {
      sendWebSocketMessage({
        from_user: userDetails?.user_id || 'visitor',
        to_user: userDetails?.receiver_id || 'agent',
        typing: true
      });
    }
  }, [newLiveMessage, sendWebSocketMessage, isChatEnabled]);

  const handleLiveKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendLiveMessage();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // const handleLeadsFormSubmit = (e) => {
  //   e.preventDefault();
  //   // Process leads form
  //   console.log("Leads form submitted:", leadsForm);
  //   setShowLeadsForm(false);
  //   setLeadsForm({ fullname: "", email: "", message: "" });
  //   // Show success message
  //   alert("Thank you! We'll get back to you soon.");
  // };

  

  const handleTicketFormSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket form submitted:", ticketForm);
    setShowTicketForm(false);
    setTicketForm({ subject: "", description: "", priority: "medium", category: "general", attachment: null });
    alert("Ticket created successfully! We'll review it shortly.");
  };

  // const handleConnectionRequest = (e) => {
  //   e.preventDefault();
  //   setShowConnectionModal(false);
  //   setShowLoadingModal(true);
  //   setIsConnecting(true);
  //   setConnectionStatus("Connecting...");

  //   // Simulate connection attempt for 1 minute
  //   const connectionTimer = setTimeout(() => {
  //     setShowLoadingModal(false);
  //     setShowConnectionFailedModal(true);
  //     setIsConnecting(false);
  //     setConnectionStatus("");
  //   }, 600); // 1 minute

  //   // Store timer for potential cancellation
  //   window.connectionTimer = connectionTimer;
  // };

  const handleConnectionRequestButton = (e) => {
    e.preventDefault();
    setShowConnectionModal(false);
    setShowLoadingModal(true);
    setIsConnecting(true);
    setConnectionStatus("Connecting...");
    handleConnectionRequest(connectionForm);

    // Simulate successful connection after 3 seconds
    const connectionTimer = setTimeout(() => {
      setShowLoadingModal(false);
      setShowAcceptedModal(true);
      setIsLiveChatConnected(true);
      setIsConnecting(false);
      setConnectionStatus("");
    }, 3000); // Changed to 3 seconds for demo

    // Store timer for potential cancellation
    window.connectionTimer = connectionTimer;
  };

  const stopConnectionRequest = () => {
    if (window.connectionTimer) {
      clearTimeout(window.connectionTimer);
    }
    setShowLoadingModal(false);
    setIsConnecting(false);
    setConnectionStatus("");
  };

  const continueInBackground = () => {
    setShowLoadingModal(false);
    setConnectionStatus("Connecting...");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTicketForm(prev => ({ ...prev, attachment: file }));
    }
  };

  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    if (onRetryConnection) {
      await onRetryConnection();
    } else {
      // Default retry behavior - reload page
      window.location.reload();
    }
    setIsRetrying(false);
  };

  // New RejectedModal (similar to AcceptedModal)
  const RejectedModal = () => {
    if (!showRejectedModal) return null;
    return (
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
          <h3 className="text-lg font-bold mb-2">Connection Rejected</h3>
          <p className="text-gray-600 mb-4"><b>{widgetName}</b> rejected your request.</p>
          <button
            onClick={() => setShowRejectedModal(false)}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  // Image Preview Modal
  const ImagePreviewModal = () => {
    if (!previewImage) return null;
    return (
       <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
        <div className="relative">
          <img src={previewImage} alt="Preview" className="max-w-full max-h-screen rounded-lg" />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };

  console.log('leads',leadDataExists);

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      <PopupAnimation visible={visible} formData={formData} setVisible={setVisible} />

      <ChatBubble
        toggleChat={toggleChat}
        formData={formData}
        actionText={actionText}
        statusBubbleIcon={statusBubbleIcon}
        statusBubbleText={statusBubbleText}
      />

      {isOpen && (
        // <div
        //   className="fixed bottom-5 right-5 bg-white rounded-2xl shadow-2xl text-sm z-50 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-bottom-5 flex flex-col"
        //   style={{
        //     width: '384px',
        //     height: window.innerWidth < 768 ? '600px' : '700px',
        //     maxHeight: '90vh'
        //   }}>
        <div
  className="fixed bottom-5 right-5 bg-white rounded-2xl shadow-2xl text-sm z-50 overflow-hidden transition-all duration-300 transform animate-in slide-in-from-bottom-5 flex flex-col"
  style={{
    // width: isExpanded ? "70vw" : "384px",
    width: isExpanded 
  ? (window.innerWidth < 768 ? "95vw" : "30vw") 
  : "384px",

    height: isExpanded ? "90vh" : (window.innerWidth < 768 ? "600px" : "700px"),
    maxHeight: "95vh",
    maxWidth: "95vw",
  }}
>


          {error && (
            <ErrorHandler
              error={error}
              widgetId={widgetId}
              onRetry={handleRetry}
              onClose={toggleChat}
            />
          )}


          {loading ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 text-sm">Loading chat widget...</p>
            </div>
          ) : (
            <>

              {activeTab === "home" && formData?.homeTab && (
                <WidgetHeader
                  formData={formData}
                  isConnecting={isConnecting}
                  connectionStatus={connectionStatus}
                  showSettings={showSettings}
                  setShowSettings={setShowSettings}
                  setShowTicketForm={setShowTicketForm}
                  toggleChat={toggleChat}
                  messages={messages}
                  actionText={actionText}
                  isReceiverUserOnline={isReceiverUserOnline}
                  toggleExpand={toggleExpand}
                  isExpanded={isExpanded}
                />
              )}

              {/* <div className="flex-1 overflow-hidden" style={{ height: 'calc(100% - 140px)' }}> */}
              <div className="flex-1 overflow-hidden" style={{ height: activeTab === "home" ? 'calc(100% - 140px)' : '100%' }}>
                {activeTab === "home" && formData?.homeTab && (
                  <HomeTab
                    formData={formData}
                    actionText={actionText}
                    switchTab={switchTab}
                    setShowLeadsForm={setShowLeadsForm}
                  />
                )}

                {activeTab === "chat" && formData?.chatbotTab && (
                  <ChatTab
                    messages={messages}
                    isTyping={isTyping}
                    formData={formData}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                    handleKeyPress={handleKeyPress}
                    switchTab={switchTab}
                  />
                )}

                {activeTab === "livechat" && formData?.livechatTab && (
                  <LivechatTab
                    liveMessages={liveMessages}
                    isAgentTyping={isAgentTyping}
                    formData={formData}
                    newLiveMessage={newLiveMessage}
                    setNewLiveMessage={setNewLiveMessage}
                    handleSendLiveMessage={handleSendLiveMessage}
                    handleLiveKeyPress={handleLiveKeyPress}
                    switchTab={switchTab}
                    setShowConnectionModal={setShowConnectionModal}
                    setShowConnectionFailedModal={setShowConnectionFailedModal}
                    isLiveChatConnected={isLiveChatConnected}
                    isChatEnabled={isChatEnabled}
                    setPreviewImage={setPreviewImage}
                    isReceiverUserOnline={isReceiverUserOnline}
                  />
                )}
              </div>

              {activeTab === "home" && formData?.homeTab && (
                <BottomNav
                  formData={formData}
                  activeTab={activeTab}
                  switchTab={switchTab}
                />
              )}


              <LeadsFormModal
                leadDataExists={leadDataExists}
                userDetails={userDetails}
                showLeadsForm={showLeadsForm}
                setShowLeadsForm={setShowLeadsForm}
                leadsForm={leadsForm}
                setLeadsForm={setLeadsForm}
                visitorId={visitorId}
                widgetId={widgetId}
                // handleLeadsFormSubmit={handleLeadsFormSubmit}
              />

              <TicketFormModal
                showTicketForm={showTicketForm}
                setShowTicketForm={setShowTicketForm}
                ticketForm={ticketForm}
                setTicketForm={setTicketForm}
                handleTicketFormSubmit={handleTicketFormSubmit}
                handleFileUpload={handleFileUpload}
              />

              <ConnectionRequestModal
                showConnectionModal={showConnectionModal}
                setShowConnectionModal={setShowConnectionModal}
                connectionForm={connectionForm}
                setConnectionForm={setConnectionForm}
                handleConnectionRequestButton={handleConnectionRequestButton}
              />

              <LoadingModal
                showLoadingModal={showLoadingModal}
                loadingMessages={loadingMessages}
                currentLoadingMessage={currentLoadingMessage}
                continueInBackground={continueInBackground}
                stopConnectionRequest={stopConnectionRequest}
              />

              <ConnectionFailedModal
                showConnectionFailedModal={showConnectionFailedModal}
                setShowConnectionFailedModal={setShowConnectionFailedModal}
                setShowLeadsForm={setShowLeadsForm}
                setShowTicketForm={setShowTicketForm}
              />

              <AcceptedModal
                showAcceptedModal={showAcceptedModal}
                setShowAcceptedModal={setShowAcceptedModal}
                switchTab={switchTab}
              />

              <RejectedModal />
              <ImagePreviewModal />


            </>
          )}
        </div>
      )}

    </div>
  );
};

export default BothModernWidget;

