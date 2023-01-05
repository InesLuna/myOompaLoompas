import axios from 'axios';

export const getOompas = async (num) => {

    const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${num ? num : '1'}`;
    return await axios.get(url)
        .then(data => { 
            return data.data;
         })
        .catch((error)=> {
            return null
        });
};
