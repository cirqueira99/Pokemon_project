import { IPower } from "./powers.interface";

export interface IPokemonCard {
    id: string,
    name: string,
    types: IPower[],
    weaknesses: IPower[]
    imagem: string
}
