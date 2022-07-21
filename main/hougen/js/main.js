function hougen(language) {
    let message = '';

    if (language === 1) {
        message = 'はいさい';
    } else if (language === 2) {
        message = 'にふぇーでーびる';
    } else if (language === 3) {
        message = 'くゎっちーさびら';
    } else if (language === 4) {
        message = 'くゎっちーさびたん';
    } else {
        message = '想定されていない引数です．';
    }
    console.log(message);

    const p_hougen = document.querySelector('#hougen');
    p_hougen.textContent = message;

    return message;
}
