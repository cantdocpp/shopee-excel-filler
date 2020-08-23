import generateData from '../server/generateData';
import { ws, wb } from '../server/excel';
import upload from '../server/upload';

const write = async (names: Array<string>) => {
  console.log('get to write excel');
  const fileLength = names.length;
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const colors = ['putih', 'hitam', 'navy', 'maroon'];
  const category = 18200;
  let column = 2;

  let i = 0;
  while (i < fileLength) {
    console.log(`start from ${i} image`);
    const integrationCode = 100 + column;
    /* eslint-disable*/
    const image = await upload(names[i]); /* eslint-disable*/
    /* eslint-disable*/
    for (let j = 0; j < colors.length; j += 1) {
      const color = colors[j];
      for (let k = 0; k < sizes.length; k += 1) {
        const size = sizes[k];
        const data = generateData('anime ghibli jepang', size, names[i]);
        const otherImage1 = 'https://cf.shopee.co.id/file/803ac8c59e88326c98fbcb7f4632011a';
        const otherImage2 = 'https://cf.shopee.co.id/file/cdc5b44e2e6c1e0611c8161327dbdab1';

        ws.cell(column, 1)
          .number(category);
        ws.cell(column, 2)
          .string(data.title);
        ws.cell(column, 3)
          .string(data.description);
        ws.cell(column, 5)
          .number(integrationCode);
        ws.cell(column, 6)
          .string('ukuran');
        ws.cell(column, 7)
          .string(size);
        ws.cell(column, 9)
          .string('warna');
        ws.cell(column, 10)
          .string(color);
        ws.cell(column, 11)
          .number(data.price);
        ws.cell(column, 12)
          .number(data.stock);
        ws.cell(column, 14)
          .string(image.url);
        ws.cell(column, 15)
          .string(otherImage1);
        ws.cell(column, 16)
          .string(otherImage2);
        ws.cell(column, 23)
          .number(data.weight);
        
        column += 1;
      }
    }
    /* eslint-disable */
    await wb.write('upload.xlsx'); /* eslint-disable */
    /* eslint-disable */
    i += 1;
  }
};

export default write;
