import axios from 'axios';

export const getOompasDetails = async (num) => {

    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${num ? num : '1'}`;
    let dataRes;
    await axios.get(url)
        .then(data => { 
            dataRes = data })
        .catch((error)=> {
            return null
        });

    return dataRes.data;
};