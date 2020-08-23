const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

/* eslint-disable */
const upload = (file: string): Promise<any> => {
  console.log('uploading...');
  const publicPath = path.resolve(__dirname, '../../../public/images', file);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(publicPath, {
      use_filename: true,
      folder: 'kaosjapan'
    }, (err, url) => {
      if (err) return reject(err);
      return resolve(url);
    })
  });
}
/* eslint-disable */

export default upload;
