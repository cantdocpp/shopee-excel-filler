import { readdirSync } from 'fs';

const getAllFileName = (): Array<string> => {
  const images: Array<string> = readdirSync('../public/images/');

  return images;
};

export default getAllFileName;
