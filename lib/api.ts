import { HNPostsResponse, HNPostDetail } from './types';

export async function getPosts(page:number = 0): Promise<HNPostsResponse | null> {
    try{
        const res = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page');
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}


export async function getPostById(id:string): Promise<HNPostDetail | null> {
    try{
        const res = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}