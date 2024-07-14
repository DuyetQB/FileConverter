export const convertToFormat = (file:any, mimeType:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event:any) => {
        const img:any = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx :CanvasRenderingContext2D | null = canvas.getContext('2d');
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


 export const formatFileSize = (bytes:any,decimalPoint:any) => {
    if(bytes == 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }