export type Param = string | number | boolean;

export type Params = Param[];

export interface Query {
    [key: string]: any;
}

export interface Body {
    [key: string]: any;
}

export interface Headers {
    [key: string]: any;
}

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
export const Methods: {[method in Method]: Method} = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export interface Api {
    path: string;
    desc: string;
    query?: Query;
    body?: Body;
    param?: Params;
    headers?: Headers;
}

export interface ApiGroup {
    [name: string]: Api;
}
