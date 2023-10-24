
import axois from './api';

// --------Get Student-------

export async function getStudent() {
 const {data} = await axois.get("/")
 return data;
}
