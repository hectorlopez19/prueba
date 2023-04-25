import trashIcon from '../img/trash-icon.svg'
import spamIcon from '../img/spam-icon.svg'

import { useDispatch, useSelector } from "react-redux"
import { add_to_spam_action, change_isreaded_mail_action, delete_mail_action } from '../redux/actions/mailListAction'

const MailContent = () => {
	const activeMail = useSelector((state) => state.active_mail)
	const dispatch = useDispatch()

	if (activeMail != null) {
		return (
			<div className="mail-content">
				<div className="actions-bar">
					<h2 className="subject">{activeMail.subject}</h2>
					<div className="mail-actions">
						<div className="mail-action mark-as-unread"
							onClick={() => {
								activeMail.isReaded = false
								dispatch(change_isreaded_mail_action(activeMail))
							}}></div>
						<div className="mail-action" onClick={() => { dispatch(delete_mail_action(activeMail)) }}><img src={trashIcon} alt="trash-icon" /></div>
						<div className="mail-action" onClick={() => { dispatch(add_to_spam_action(activeMail)) }}><img src={spamIcon} alt="spam-icon" /></div>
					</div>
				</div>
				<div className="content-container">
					<div className="sender-info">
						<h3 className="sender">{`${activeMail.from.slice(activeMail.from.indexOf('@') + 1, activeMail.from.length)} `}<a href="#">&lt;{activeMail.from}&gt;</a></h3>
						<p className="date">{activeMail.date}</p>
					</div>
					<div className="mail-body">
						<p>{activeMail.body}</p>
						<div className="attachements">
							{activeMail.attachements.map((attachement, index) => <div className="attachement" key={index}>
								<a href={attachement.file}><img src={attachement.file} alt={attachement.name} /></a>
								<p>{attachement.name}</p>
							</div>)}
						</div>
					</div>
				</div>
			</div>
		)
	}

	else {
		return <div className="mail-content"></div>
	}
}

export default MailContent