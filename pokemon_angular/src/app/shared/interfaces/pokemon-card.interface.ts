export interface IPokemonCard {
    id: number,
    name: string,
    types: IType[],
    typesDamage: IType[]
    imagem: string
}

export interface IType {    
    name: string,
    colorBack: string,
    colorFront: string
}

export interface ITypeColors {
    name: string, background: string, color: string 
}