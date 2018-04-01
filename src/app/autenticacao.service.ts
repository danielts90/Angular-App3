import { Usuario } from "./acesso/usario.model";

export class Autenticacao{
    public cadastrarUsuario(usuario: Usuario) {
        console.log('Chegamos até o serviço.', usuario);
    }
}