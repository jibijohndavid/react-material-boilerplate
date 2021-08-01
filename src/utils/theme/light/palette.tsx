import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#263883',
    light: '#8b8fe6',
    main: '#1F4DB9',
  },
  secondary: {
    contrastText: white,
    dark: '#b96568',
    light: '#ffc5c7',
    main: '#FF9300',
  },
  success: {
    contrastText: white,
    main: '#47C796',
  },
  info: {
    contrastText: white,
    main: colors.blue[600],
  },
  warning: {
    contrastText: white,
    main: colors.orange[600],
  },
  error: {
    contrastText: white,
    main: '#F04545',
  },
  text: {
    primary: '#333333',
    secondary: '#696969',
    link: colors.blue[600],
  },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  icon: '#91A1BB',
  divider: '#E1E4EA',
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
