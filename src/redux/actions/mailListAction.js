export const NEW_MAIL = 'NEW_MAIL';
export const DELETE_MAIL = 'DELETE_MAIL';
export const ADD_TO_SPAM = 'ADD_TO_SPAM';
export const CHANGE_ISREADED_MAIL = 'CHANGE_ISREADED_MAIL'

export const change_isreaded_mail_action = (mail) => {
	return {
		type: CHANGE_ISREADED_MAIL,
		payload: {
			id: mail.id,
			isReaded: mail.isReaded
		}
	}
}

export const new_mail_action = (mail) => {
	return {
		type: NEW_MAIL,
		payload: mail
	}
}

export const delete_mail_action = (mail) => {
	return {
		type: DELETE_MAIL,
		payload: mail
	}
}

export const add_to_spam_action = (mail) => {
	return {
		type: ADD_TO_SPAM,
		payload: mail
	}
}