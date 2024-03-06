import {RootState} from '@redux/configure-store.ts';


 export const getWindowWidth = (state: RootState) => state.common.windowWidth
 export const accessToken = (state: RootState) => state.auth.accessToken




