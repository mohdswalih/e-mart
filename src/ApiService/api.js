import axios from "axios";

const Base_URL='https://fakestoreapi.com'

export const GetAllProducts= async()=>{
const response=await axios.get(`${Base_URL}/products`)
return response.data;

}
export const GetProductId= async(id)=>{
    const response=await axios.get(`${Base_URL}/products/${id}`)
    return response.data;
    
    }
    export const GetProductimage= async(id)=>{
        const response=await axios.get(`${Base_URL}/products/${id}/image`)
        return response.data;
        
        }
    


