import { Usuario } from './acesso/usario.model';
import * as firebase from 'firebase';

export class Autenticacao {
    public cadastrarUsuario(usuario: Usuario) {
        console.log('Chegamos até o serviço.', usuario);

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                console.log(resposta);
             })
        .catch((error: Error) => {
            console.log(error);
        });
    }
}
