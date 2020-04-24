import { Imagem } from './imagem.model';

export class InfoLocal {

	constructor(
    public latlng: string,
    public nome: string,
    public descricao: string[],
    public imagens: Imagem[]
  ) { }

}
