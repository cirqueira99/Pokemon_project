import { IPower } from "./powers.interface";

export interface IPokemon {
    id: string,
    name: string,
    types: IPower[],
    weaknesses: IPower[]
    imagem: string
}