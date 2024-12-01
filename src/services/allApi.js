import commonAPI from "./commonApi";
import SERVER_URL from "./server_url";


export const addEvent = async (evnt) => {
    return await commonAPI("POST", `${SERVER_URL}/allEvents` ,evnt)
}