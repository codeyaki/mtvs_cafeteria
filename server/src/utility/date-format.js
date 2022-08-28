exports.dateFormat = (date) => {
	const dateFormat2 = date? date.getFullYear() +
		'-' + ( (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) )+
		'-' + ( (date.getDate()) < 9 ? "0" + (date.getDate()) : (date.getDate()) ) : null;
	return dateFormat2;
}

exports.datetimeFormat = (date) => {
	const datetimeFormat = date? date.getFullYear() +
	'-' + ( (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) ) +
	'-' + ( (date.getDate()) < 9 ? "0" + (date.getDate()) : (date.getDate()) ) +
	' ' + ( (date.getHours()) < 9 ? "0" + (date.getHours()) : (date.getHours()) ) +
	':' + ( (date.getMinutes()) < 9 ? "0" + (date.getMinutes()) : (date.getMinutes()) )+
	':' + ( (date.getSeconds()) < 9 ? "0" + (date.getSeconds()) : (date.getSeconds()) )
	: null;
	return datetimeFormat;
}