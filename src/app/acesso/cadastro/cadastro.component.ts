import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../usario.model';
import { Autenticacao } from '../../autenticacao.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();
  public mensagemErro: string;

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'nome_completo': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'nome_usuario': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(private autenticacao: Autenticacao) {
  }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario(): void {

    if ( this.formulario.status === 'VALID' ) {
      let usuario: Usuario = new Usuario(
        this.formulario.value.email,
        this.formulario.value.nome_completo,
        this.formulario.value.nome_usuario,
        this.formulario.value.senha
      );
        this.autenticacao.cadastrarUsuario(usuario)
        .then(() => this.exibirPainelLogin())
        .catch((erro: any) => console.log(erro));
      } else {
        this.formulario.get('email').markAsTouched();
        this.formulario.get('nome_completo').markAsTouched();
        this.formulario.get('nome_usuario').markAsTouched();
        this.formulario.get('senha').markAsTouched();
      }
    }
}
