import { ActionType } from '../actionsType';

interface LoginAction {
    type: ActionType.LOGIN_START;
}

interface LoginSucessAction {
    type: ActionType.LOGIN_SUCCESS;
    payload: string[];
}

interface LoginErrorAction {
    type: ActionType.LOGIN_FAIL;
    payload: string;
}

export type Action =
| LoginAction
| LoginSucessAction
| LoginErrorAction;