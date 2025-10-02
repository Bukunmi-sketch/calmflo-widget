  // import { generateUniqueId } from "./lib";

  
  export const generateUniqueId = () => {
    return 'msg-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  
  // Function to create or retrieve the user ID from cookie
  export const createOrRetrieveUserId = () => {
    const existingUserId = getCookieValue("visitorId");
    if (!existingUserId) {
      const newUserId = generateUniqueId();
      document.cookie = `visitorId=${newUserId}; expires=${getCookieExpiration(60)}; path=/`;

      // document.getElementById("leads-form").classList.remove("hidden");
      //show the lead form
      return newUserId;
    } else {
      return existingUserId;
    }
  };

  // Function to get cookie expiration date
 export  const getCookieExpiration = (days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
  };

  // Function to get the value of the cookie by name
 export const getCookieValue = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  