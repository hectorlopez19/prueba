import { CHANGE_MAILBOX } from "../actions/activeMailboxAction";

const default_active_mailbox = 'inbox'

const active_mailbox = (state = default_active_mailbox, action) => {
	switch(action.type) {
		case CHANGE_MAILBOX:
			return action.payload;

		default:
			return state;
	}
}

export default active_mailbox;