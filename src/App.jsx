import MailContent from './components/MailContent'
import MailList from './components/MailList'

import { useDispatch } from 'react-redux';
import { new_mail_action } from './redux/actions/mailListAction';
import mailData from './constants/mail-data.json'

import './scss/app.scss'

const App = () => {

	const dispatch = useDispatch()
	let lastId = 1;
	setInterval(() => {
		mailData.forEach((mail) => {
			lastId++
			const newMail = {
				id: lastId,
				...mail
			}
			dispatch(new_mail_action(newMail))
		})
	}, 5000)

	return (
		<div className='main'>
			<MailList />
			<MailContent />
		</div>
	)
}

export default App