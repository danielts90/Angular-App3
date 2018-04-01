import { Usuario } from './acesso/usario.model';
import * as firebase from 'firebase';

export class Autenticacao {
    public cadastrarUsuario(usuario: Usuario) {

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                delete usuario.senha;

                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set( usuario );
             })
        .catch((error: Error) => {
            console.log(error);
        });
    }
}
