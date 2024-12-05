import commonAPI from "./commonApi";
import SERVER_URL from "./server_url";


export const addEvent = async (evnt) => {
    return await commonAPI("POST", `${SERVER_URL}/allEvents` ,evnt)
}

export const getEvent =async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/allEvents`, "")
}

export const deletEvent = async (evnt)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allEvents/${evnt}`,{})
}