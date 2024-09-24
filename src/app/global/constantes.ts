import { environment } from "../../environments/environments";

export const CONSTANTES_CORE = {
  config_sockets: { url: environment.wsUrl, options: {} },
  chat: {
    message: 'message',
    new_message: 'new_message'
  }
}

Object.freeze(CONSTANTES_CORE);
