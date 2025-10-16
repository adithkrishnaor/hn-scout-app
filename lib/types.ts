export interface Post{
    id:string;
    created_at:string;
    author:string;
    title:string;
    url:string;
    points:number;
    num_comments:number;
}

// API Response types for Hacker News API
export interface HNPostHit {
    objectID?: string;
    id?: string;
    created_at: string;
    author: string;
    title: string;
    url: string;
    points: number;
    num_comments: number;
}

export interface HNPostsResponse {
    hits: HNPostHit[];
}

export interface HNComment {
    id: string;
    author: string;
    text: string;
}

export interface HNPostDetail {
    id: string;
    title: string;
    author: string;
    url: string;
    points: number;
    children?: HNComment[];
}