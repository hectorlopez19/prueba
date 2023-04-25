import { NEW_MAIL, DELETE_MAIL, ADD_TO_SPAM, CHANGE_ISREADED_MAIL } from '../actions/mailListAction'
import {data} from '../../constants/data'

const default_mail_list = data

const mail_list = (state = default_mail_list, action) => {
	switch (action.type) {
		case CHANGE_ISREADED_MAIL:
			const inboxIndex = state.inbox.findIndex((mail) => mail.id === action.payload.id)
			if(inboxIndex !== -1) {
				const newInbox = state.inbox
				newInbox[inboxIndex].isReaded = action.payload.isReaded
				return {
					inbox: newInbox,
					trash: state.trash,
					spam: state.spam
				}
			}
			else {
				const spamIndex = state.spam.findIndex((mail) => mail.id === action.payload.id)
				const newSpam = state.spam
				newSpam[spamIndex].isReaded = action.payload.isReaded
				return {
					inbox: state.inbox,
					trash: state.trash,
					spam: newSpam
				}
			}

		case NEW_MAIL:
			return {
				inbox: [...state.inbox, action.payload],
				trash: state.trash,
				spam: state.spam
			}

		case DELETE_MAIL:
			let indexToDelete = state.inbox.findIndex((mail) => mail.id === action.payload.id)
			if (indexToDelete !== -1) {
				const newInbox = state.inbox
				newInbox.splice(indexToDelete, 1)
				return {
					inbox: newInbox,
					trash: [...state.trash, action.payload],
					spam: state.spam
				}
			}
			else {
				indexToDelete = state.spam.findIndex((mail) => mail.id === action.payload.id)
				if(indexToDelete !== -1) {
					const newSpam = state.spam
					newSpam.splice(indexToDelete, 1)
					return {
						inbox: state.inbox,
						trash: [...state.trash, action.payload],
						spam: newSpam
					}
				}
			}
			break;

		case ADD_TO_SPAM:
			const indexToSpam = state.inbox.findIndex((mail) => mail.id === action.payload.id)
			if(indexToSpam !== -1) {
				const newInbox = state.inbox
				newInbox.splice(indexToSpam, 1)
				return {
					inbox: newInbox,
					trash: state.trash,
					spam: [...state.spam, action.payload]
				}
			}
			break;
			
		default:
			return state
	}
}

export default mail_list;