import { useDispatch, useSelector } from "react-redux"
import { change_mail_action } from "../redux/actions/activeMailAction";
import { change_isreaded_mail_action } from "../redux/actions/mailListAction";

const MailPreview = ({ mail }) => {
	const dispatch = useDispatch();
	const activeMailbox = useSelector((state) => state.active_mailbox)
	const activeMail = useSelector((state) => state.active_mail)

	return (
		<div
			className={`mail-preview ${activeMail != null ? mail.id === activeMail.id ? 'mail-active' : '' : ''}`}
			onClick={ () => {
				mail.isReaded = true
				if(activeMailbox !== 'trash') {
					dispatch(change_isreaded_mail_action(mail))
				}
				dispatch(change_mail_action(mail))
			}}
		>
			<div className="indicators">
				<div className={`active-indicator ${activeMail != null ? mail.id === activeMail.id ? 'active' : '' : ''}`}></div>
				<div className={`unread-indicator ${!mail.isReaded ? 'active' : ''}`}></div>
			</div>
			<div className="preview-content">
				<div className="preview-sender-info">
					<div className="preview-sender">
						<div className="avatar"><img src={mail.avatar} alt="" /></div>
						<p>{mail.from.slice(mail.from.indexOf('@') + 1, mail.from.length)}</p>
					</div>
					<p className="date">{mail.date}</p>
				</div>
				<div className="subject">
					<p>{mail.subject}</p>
				</div>
				<div className="preview-content"><p>{mail.body.length > 40 ? `${mail.body.slice(0, 40)}...` : mail.body}</p></div>
			</div>
		</div>
	)
}

export default MailPreview