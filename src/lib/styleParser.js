function styleParser (str) {

    var stylizedString = str;

    var effects = [
        {
            pattern: /_(.*)_/,
            start: '<em>',
            end: '</em>'
        },
        {
            pattern: /-(.*)-/,
            start: '<del>',
            end: '</del>'
        },
        {
            pattern: /\*(.*)\*/,
            start: '<strong>',
            end: '</strong>'
        }
    ];

    effects.forEach(effect => {
        stylizedString = stylizedString.replace(effect.pattern, `${effect.start}$1${effect.end}`);
    });

    return stylizedString;
}

export default styleParser;