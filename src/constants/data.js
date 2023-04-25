import mailData from './mail-data.json'

export const data = {
	inbox: mailData.map((mail, index) => {
		return { id: index, ...mail }
	}),
	trash: [],
	spam: []
}