import { createTheme } from '@material-ui/core/styles';

import typography from '../typography';
import palette from './palette';

const theme = createTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
