export const CHANGE_MAILBOX = 'CHANGE_MAILBOX';

export const change_mailbox_action = (mailbox) => {
	return {
		type: CHANGE_MAILBOX,
		payload: mailbox
	}
}