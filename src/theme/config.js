import { createTheme } from '@mui/material/styles';
import IranSansFont from "../fonts/IRANSans.woff2"

 const IranSans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff')  `,
};



export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: IranSans,
  },
});