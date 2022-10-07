import { Alert } from "react-native";

const api = "https://633c0aecf11701a65f6d8b71.mockapi.io/";

/**
 * @param {String} endpoint 
 * @returns {Promise<JSON>} Response/error object.
 */
export const Get = async function (endpoint) {
    let res = null;

    try {
        const response = await fetch(`${api + endpoint}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Conteny-Type': 'application/json'
            },
        });

        const json = await response.json();
        res = json;
    } catch (error) {
        Alert.alert("Whoops", "Something went wrong while getting the response from the server... Try again in a moment please.")
        console.error(error);
        return error;
    }
    return res;

}