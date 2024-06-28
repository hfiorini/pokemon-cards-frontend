export interface Card {
    id: number;
    name: string;
    type: string;
    attack: number;
    defense: number;
    hp: number;
    weaknesses: string[];
    resistances: string[];
    imageUrl: string;
}

  