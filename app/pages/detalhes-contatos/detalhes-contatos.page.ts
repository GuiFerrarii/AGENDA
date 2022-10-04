import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosContatosService } from 'src/app/service/dados-contatos.service';
import { AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})
export class DetalhesContatosPage implements OnInit {
  cliente={}
  clienteForm : FormGroup
  
  
  public contatoSelecionado : any
  public modoDeEdicao = false
  
  constructor(
    private route : ActivatedRoute,
    private contatos : DadosContatosService,
    public alertController : AlertController,
    private formBuilder : FormBuilder
    
  ) { }

  // enviar(){
  //   if (this.clienteForm.invalid || this.clienteForm.pending){
  //     return
  //   }else{
  //     console.log(this.cliente)
  //   }
  // }

  
  IniciarEdicao(){
    this.modoDeEdicao = true

  }

  enviar(){
    if (this.clienteForm.invalid || this.clienteForm.pending){
      return
    }
  }
  EncerrarEdicao(){
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      if (this.clienteForm.invalid)return
      this.modoDeEdicao = false
    } else {
      this.contatos.recebeDados(this.contatoSelecionado)
      this.modoDeEdicao = false
    }
  }

  async showOptions() {
    const alert = await this.alertController.create({
      header: "Confirmar",
      message: "Deseja mesmo excluir esse contato?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel",
          handler: () => {
            console.log("Declined the offer");
            
            
          },
        },
        {
          text: "Sim",
          handler: () => {
            console.log("Accepted the offer");
            this.deletarProduto()
          },
        },
      ],
    });
  
    await alert.present();
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
   
  

  this.clienteForm=this.formBuilder.group({
    nome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    sobrenome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    email : ['', Validators.compose([Validators.required, Validators.email])],
    telefone : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15)])],
    tipo_tel : ['']
    
  })

  }

} 

