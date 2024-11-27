export interface IPokemonCard {
    id: number,
    name: string,
    types: ITypeColors[],
    typesDamage: ITypeColors[]
    imagem: string
}

export interface ITypeColors {
    name: string, background: string, color: string 
}