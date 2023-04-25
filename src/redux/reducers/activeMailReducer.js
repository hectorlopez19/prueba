import { CHANGE_MAIL } from "../actions/activeMailAction";

const default_active_mail = null

const active_mail = (state = default_active_mail, action) => {
	switch(action.type) {
		case CHANGE_MAIL: 
			return action.payload;

		default: 
			return state; 
	}
}

export default active_mail;