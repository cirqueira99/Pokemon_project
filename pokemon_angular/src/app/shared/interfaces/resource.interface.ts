
export interface NamedAPIResourceList {
    /** The total number of resources available from this API */
    count: number;
    /** The URL for the next page in the list */
    next: string | null;
    /** The URL for the previous page in the list */
    previous: string | null;
    /** A list of named API resources */
    results: NamedAPIResource[];
}

export interface NamedAPIResource {    
    name: string;    
    url: string;
}
  