import {JSONFilePreset} from 'lowdb/node';

const defaultData:{
    posts:{
        id:string;
        title:string;
        content:string;
    }[]
} = {posts:[]}

const db = await JSONFilePreset('db.json',defaultData);

export default db;