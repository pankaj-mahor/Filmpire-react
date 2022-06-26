
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles/';
     
export const RootDiv = styled('div')(
  () => `
  display:flex;
    height:100%;
`,);
export const Toolbar = styled('div')(
  () => `
    height:70px;
`,);
export const Content = styled('div')(
  () => `
    flexGrow:1;
    padding:2em;
`,);