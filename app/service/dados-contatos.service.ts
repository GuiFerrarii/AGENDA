import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosContatosService {

  private contatos = [
    {id: 1, nome:'Ana', telefone: 12345678, DDD:35},
    {id: 2, nome:'Lucas', telefone: 87654321, DDD:31},
    {id: 3, nome:'Bruna', telefone: 11111111, DDD:37},
    {id: 4, nome:'Nathan', telefone: 22222222, DDD:38}
  ]

  constructor() { }
  
  enviarTodosDados(){
    return this.contatos
  }

  enviarDadosId(id : number){
    const contatoSelecionado = this.contatos.filter(contato => contato.id === id)
    return contatoSelecionado[0]
  }

  recebeDados(enviarDadosId : any ){
    enviarDadosId.id = this.contatos.length + 1
    this.contatos.push(enviarDadosId)
  }

  deletaDados(enviarDadosId : any){
    this.contatos.splice(this.contatos.indexOf(enviarDadosId), 1)
  }
}
