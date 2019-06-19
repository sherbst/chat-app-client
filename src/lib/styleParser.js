function styleParser (str) {

    var stylizedString = str;

    var effects = [
        {
            pattern: /_(.*)_/,
            start: '<span style="text-decoration: underline">',
            end: '</span>'
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
        },
        {
            pattern: /%(.*)%/,
            start: '<em>',
            end: '<em>'
        }
    ];

    effects.forEach(effect => {
        stylizedString = stylizedString.replace(effect.pattern, `${effect.start}$1${effect.end}`);
    });

    return stylizedString;
}

export default styleParser;