import MailPreview from "./MailPreview"

import inboxIcon from '../img/inbox-icon.svg'
import trashIcon from '../img/trash-icon.svg'
import spamIcon from '../img/spam-icon.svg'

import { useDispatch, useSelector } from "react-redux"
import { change_mailbox_action } from "../redux/actions/activeMailboxAction"

const MailList = () => {
	const dispatch = useDispatch()
	const mailList = useSelector((state) => state.mail_list)
	const activeMailbox = useSelector((state) => state.active_mailbox)
	const mailbox = useSelector((state) => {
		switch(state.active_mailbox) {
			case 'inbox':
				return mailList.inbox
			case 'trash':
				return mailList.trash
			case 'spam':
				return mailList.spam
			default:
				return []
		}
	})

	return (
		<div className="mail-list">
			<nav className="filters">
				<div
					className={`filter ${activeMailbox === 'inbox' ? 'filter-active' : ''}`}
					onClick={() => {
						dispatch(change_mailbox_action('inbox'))
					}}
				>
					<div className="filter-icon"><img src={inboxIcon} alt="" /></div>
					<p className="filter-name">Inbox</p>
				</div>
				<div
					className={`filter ${activeMailbox === 'trash' ? 'filter-active' : ''}`}
					onClick={() => {
						dispatch(change_mailbox_action('trash'))
					}}
				>
					<div className="filter-icon"><img src={trashIcon} alt="" /></div>
					<p className="filter-name">Trash</p>
				</div>
				<div
					className={`filter ${activeMailbox === 'spam' ? 'filter-active' : ''}`}
					onClick={() => {
						dispatch(change_mailbox_action('spam'))
					}}
				>
					<div className="filter-icon"><img src={spamIcon} alt="" /></div>
					<p className="filter-name">Spam</p>
				</div>
			</nav>
			
			<div className="mails">
				{mailbox.map((mail) => (
					<MailPreview key={mail.id} mail={mail} />
				))}
			</div>
		</div>
	)
}



export default MailList