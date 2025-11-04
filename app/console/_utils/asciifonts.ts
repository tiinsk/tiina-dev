import figlet from 'figlet';
import standard from 'figlet/fonts/Standard'

figlet.parseFont('Standard', standard);

export const getAsciiFont = (text: string) => {
 return figlet.textSync(text);
};
