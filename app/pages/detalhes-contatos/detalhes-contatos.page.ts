import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosContatosService } from 'src/app/service/dados-contatos.service';


@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})
export class DetalhesContatosPage implements OnInit {
  
  public contatoSelecionado : any
  public modoDeEdicao = false

  constructor(
    private route : ActivatedRoute,
    private contatos : DadosContatosService
  ) { }

  IniciarEdicao(){
    this.modoDeEdicao = true

  }

  EncerrarEdicao(){
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.modoDeEdicao = false
    } else {
      this.contatos.recebeDados(this.contatoSelecionado)
      this.modoDeEdicao = false
    }
  }

  deletarProduto(){
    this.contatos.deletaDados(this.contatoSelecionado)
  }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.contatoSelecionado = this.contatos.enviarDadosId(id)
    }else{
     this.contatoSelecionado = {id, nome:"", telefone: 0.0}
     this.modoDeEdicao = true 
    }
   
  }
  

}
