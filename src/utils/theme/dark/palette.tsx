import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    main: '#3384F3',
  },
  secondary: {
    contrastText: white,
    main: '#FFA850',
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
    primary: '#CFCFCF',
    secondary: '#9A9A9A',
    link: colors.blue[600],
  },
  background: {
    default: '#0D0D0D',
    paper: '#1A1A1A',
  },
  icon: '#91A1BB',
  divider: '#242424',
  contrastThreshold: 3,
  tonalOffset: 0.2,
  pallete: {
    type: 'dark',
  },
};
