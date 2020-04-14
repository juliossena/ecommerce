import Axios from 'axios';
import * as Constants from '../constantes/constants';
import Security from '../autenticacao/security';

const PREFIXOS_EXIBIR_MENSAGEM = ['[0127]', '[0128]'];
export default class Conecta {
  static deveExibirMensagem(mensagem) {
    return PREFIXOS_EXIBIR_MENSAGEM.some(prefixo => mensagem.includes(prefixo));
  }

  static chamada(url, metodo, body) {
    let resposta;
    let config = {};
    try {
      config = {
        headers: {
          Authorization: Security.getTokenValue(),
          'Content-Type': 'application/json',
        },
      };
    } catch (e) {
      config = {};
    }

    switch (metodo) {
      case Constants.GET:
        resposta = Axios.get(url, config);
        break;
      case Constants.POST:
        resposta = Axios.post(url, body, config);
        break;
      case Constants.DELETE:
        resposta = Axios.delete(url, config);
        break;
      case Constants.PUT:
        resposta = Axios.put(url, body, config);
        break;
      default:
        resposta = 'Método HTTP usado para conectar a API é inválido.';
    }

    return resposta;
  }

  static async conecta(url, metodo, body) {
    return Conecta.chamada(url, metodo, body).catch((error) => {
      if (error.response) {
        throw new Error(Constants.EXCEPTION_ERRO_CONEXAO);
      }
    });
  }
}

export async function ConectarApiPost(url, body) {
  return Conecta.conecta(url, Constants.POST, body);
}

export async function ConectarApiPUT(url, body) {
  return Conecta.conecta(url, Constants.PUT, body);
}

export async function ConectarApiGet(url) {
  return Conecta.conecta(url, Constants.GET);
}

export async function ConectarApiDelete(url) {
  return Conecta.conecta(url, Constants.DELETE);
}
