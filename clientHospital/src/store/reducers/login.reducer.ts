import { Action } from '../action';
import { ActionType } from '../actionsType';

interface UserLogin {
	loading: boolean;
	error: string[] | null;
	user: string[] | null;
}

const initialState = {
	loading: false,
	error: null,
	user: null,
};

const loginreducer = (
	state: UserLogin = initialState,
	action: Action
): UserLogin => {
	switch (action.type) {
        case ActionType.LOGIN_START:
            return { ...state, loading: true, error: null, user:[] };
        case ActionType.LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload };
        case ActionType.LOGIN_FAIL:
            return { ...state, loading: false};
           

		default:
			return state;
	}
};

export default loginreducer;
