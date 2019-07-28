import os from '../constants/os';

export const getOS = () => {
  const _os = navigator.userAgent.toLowerCase();

  if (_os.includes(os.ANDROID)) {
    return os.ANDROID;
  } else if (_os.includes(os.IOS)) {
    return os.IOS;
  } else if (_os.includes(os.LINUX)) {
    return os.LINUX;
  } else if (_os.includes(os.WINDOWS)) {
    return os.WINDOWS;
  } else if (_os.includes(os.MAC)) {
    return os.MAC;
  } 
}
