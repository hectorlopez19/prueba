export const CHANGE_MAIL = 'CHANGE_MAIL';

export const change_mail_action = (mail) => {
	return {
		type: CHANGE_MAIL,
		payload: mail
	}
}