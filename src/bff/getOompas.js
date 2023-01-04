import axios from 'axios';
import { useSelector } from 'react-redux';

export const getOompas = async (num) => {

    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${num ? num : '1'}`;
    let dataRes;
    await axios.get(url)
        .then(data => { 
            dataRes = data })
        .catch((error)=> {
            return null
        });

    return dataRes.data;
};
