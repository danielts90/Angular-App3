import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Autenticacao } from '../../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  public formularioLogin = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public autenticar(): void {
    if (this.formularioLogin.status === 'VALID') {
        this.autenticacao.autenticar(
        this.formularioLogin.value.email,
        this.formularioLogin.value.senha
      );
    } else {
      this.formularioLogin.get('email').markAsTouched();
      this.formularioLogin.get('senha').markAsTouched();
    }
  }

}
