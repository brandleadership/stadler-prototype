const DateFormatter = (textToFormat) => {
    // console.log("ButtonUrlRenderer", textToFormat)
    if (!textToFormat) {
        return '';
    }
    const date = new Date(textToFormat);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDay = dd + '.' + mm + '.' + yyyy;

    return formattedDay ?? '';
};

export default DateFormatter;
