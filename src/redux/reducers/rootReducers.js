import { combineReducers } from "redux";
import mail_list from './mailListReducer';
import active_mailbox from './activeMailboxReducer'
import active_mail from './activeMailReducer';

const rootReducers = combineReducers({
	mail_list,
	active_mailbox,
	active_mail
})

export default rootReducers;