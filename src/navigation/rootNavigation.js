import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(props, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(props, params);
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
export function reset(props, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset(props, params);
  }
}
// add other navigation functions that you need and export them
