import { Prodotto } from './prodotto-interface';

export interface List{
    username:string;
    nome:string;
    prodotti:Prodotto[];
    condivisioni:[];
}