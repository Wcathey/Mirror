import * as deepar from "deepar";
require('dotenv').config()
async function loadDeepAr () {
  const previewElement = document.getElementById("ar-screen");

  let deepAR = null;

  try {
    deepAR = await deepar.initialize({
      licenseKey:process.env.DEEP_AR_SDK_KEY,
      previewElement: previewElement,
      effect: '/src/DeepArSDK/effects/eyeshadow.deepar',
      additionalOptions: {
        cameraConfig: {
          disableDefaultCamera: true
        }
      }

    });
  }
  catch (error) {
    console.error(error);
    return;
  }

  return deepAR;
}

export default loadDeepAr;
