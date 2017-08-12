import {
  cyanA200,
  grey300,
  blue900, lightGreenA700,
  fullWhite,
  redA700
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: blue900,
    primary2Color: lightGreenA700,
    primary3Color: grey300,
    accent1Color: cyanA200,
    accent2Color: redA700,
    accent3Color: cyanA200,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.2),
    alternateTextColor: grey300,
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  }
}