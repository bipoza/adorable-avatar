export const defaultColors = [
    '#81bef1',
    '#ad8bf2',
    '#bff288',
    '#de7878',
    '#a5aac5',
    '#6ff2c5',
    '#f0da5e',
    '#eb5972',
    '#f6be5d',
];

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
export const defaultEyes = range(1, 9).map(item=>'eyes_'+item +'.png');
export const defaultMouth = range(1, 8).map(item=>'mouth_'+item +'.png');
export const defaultNose = range(1, 8).map(item=>'nose_'+item +'.png');
