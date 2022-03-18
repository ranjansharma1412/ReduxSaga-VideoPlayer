import axios from "axios";
import { Alert } from 'react-native'

/**
* @Component APIClient.js
* @Use common fucntion for api calling
* @Params apiConfig
**/
const APIClient = async (apiConfig) => {
    try {
        let response = await axios(apiConfig);
        if (response.status === 200 || response.status === "200") {
            return response.data;
        } else {
            console.log("response", JSON.stringify(response.data))
            Alert.alert("Warning", JSON.stringify(response.data))
        }

    } catch (error) {
        console.log("erroro",error.response)
        if (error.response.status === 404 || error.response.status === "404") {
            Alert.alert("Error", "404 Page not found")
        }else{
            Alert.alert("Error", "Unexpected error")
        }
    }
}

export default APIClient;