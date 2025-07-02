import { csv } from 'd3-fetch';

export async function fetch_csv(source:string) {
    return await csv(source)
}