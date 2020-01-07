import dark from './dark';
import lite from './lite';

const theme = mode => mode === 'dark' ? {...dark} : {...lite};

export default theme;
// #2f3437