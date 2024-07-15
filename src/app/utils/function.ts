import { useEffect, useState } from 'react';
import libavifModule from "../libs/libavif"

export const convertToFormat = (file: any, mimeType: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      const img: any = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(new File([blob], `${file.name.split('.').slice(0, -1).join('.')}.${mimeType.split('/')[1]}`, { type: mimeType }));
          } else {
            reject(new Error(`Conversion to ${mimeType} failed`));
          }
        }, mimeType);
      };
    };
    reader.onerror = (error) => reject(error);
  });
};


export const formatFileSize = (bytes: any, decimalPoint: any) => {
  if (bytes == 0) return '0 Bytes';
  var k = 1000,
    dm = decimalPoint || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


export const useBrowser = () => {
  const [browser, setBrowser] = useState('Unknown');

  useEffect(() => {
    const test = (regexp:any) => regexp.test(window.navigator.userAgent);
    let detectedBrowser;

    switch (true) {
      case test(/edg/i):
        detectedBrowser = 'Microsoft Edge';
        break;
      case test(/trident/i):
        detectedBrowser = 'Microsoft Internet Explorer';
        break;
      case test(/firefox|fxios/i):
        detectedBrowser = 'Mozilla Firefox';
        break;
      case test(/opr\//i):
        detectedBrowser = 'Opera';
        break;
      case test(/ucbrowser/i):
        detectedBrowser = 'UC Browser';
        break;
      case test(/samsungbrowser/i):
        detectedBrowser = 'Samsung Browser';
        break;
      case test(/chrome|chromium|crios/i):
        detectedBrowser = 'Google Chrome';
        break;
      case test(/safari/i):
        detectedBrowser = 'Apple Safari';
        break;
      default:
        detectedBrowser = 'Other';
    }

    setBrowser(detectedBrowser);
  }, []);

  return browser;
};

// export const convertJpegToAvif = async (file: File) => {
//   const img = await loadImage(file);
//   const canvas = document.createElement('canvas');
//   canvas.width = img.width;
//   canvas.height = img.height;
//   const ctx:CanvasRenderingContext2D | null = canvas.getContext('2d');
//   ctx?.drawImage(img, 0, 0);

//   const imageData:any = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//   const avifArrayBuffer = await encodeAvif(imageData);
//   return new Blob([avifArrayBuffer], { type: 'image/avif' });
// };

// const loadImage = (file: File) => {
//   return new Promise<HTMLImageElement>((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const img = new Image();
//       img.onload = () => resolve(img);
//       img.onerror = reject;
//       img.src = reader.result as string;
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };

// const encodeAvif = async (imageData: ImageData) => {
//   const module = await libavifModule();

//   // Ensure _malloc and other functions are callable
//   if (typeof module._malloc !== 'function') {
//     throw new Error('WebAssembly module not properly instantiated');
//   }

//   const width = imageData.width;
//   const height = imageData.height;
//   const rgbaData = imageData.data;

//   const rgbaPtr = module._malloc(rgbaData.length * rgbaData.BYTES_PER_ELEMENT);
//   module.HEAPU8.set(rgbaData, rgbaPtr);

//   const avifPtrPtr = module._malloc(4);
//   const avifSizePtr = module._malloc(4);

//   const result = module._encode_avif(rgbaPtr, width, height, avifPtrPtr, avifSizePtr);
//   if (result !== 0) {
//     module._free(rgbaPtr);
//     module._free(avifPtrPtr);
//     module._free(avifSizePtr);
//     throw new Error('Failed to encode AVIF');
//   }

//   const avifPtr = module.getValue(avifPtrPtr, 'i32');
//   const avifSize = module.getValue(avifSizePtr, 'i32');

//   const avifData = new Uint8Array(module.HEAPU8.buffer, avifPtr, avifSize);

//   const avifArrayBuffer = avifData.slice().buffer;

//   module._free(rgbaPtr);
//   module._free(avifPtrPtr);
//   module._free(avifSizePtr);
//   module._free(avifPtr);

//   return avifArrayBuffer;
// };