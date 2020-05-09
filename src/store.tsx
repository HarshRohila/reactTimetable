import { Plugins } from '@capacitor/core';
import { DAYS } from './constants';

const { Storage } = Plugins;

interface Data {
    [key: string]: {
        isWorkDay: boolean,
        workHours: {
            start: string,
            end: string
        }
    }
}

const getData = async () => {
    const { value } = await Storage.get({ key: DAYS });
    const jsonData: Data = value ? JSON.parse(value) : null;

    return jsonData;
}

const save = 
    (data: Data) => Storage.set({ key: DAYS, value: JSON.stringify(data)});

const store = {
    getData,
    save
}

export default store;