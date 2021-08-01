import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  title: {
    marginBottom: spacing(2),
  },
}));

export default useStyles;
