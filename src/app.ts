import './env';
import getAllFileName from './utils/name';
import write from './utils/writeExcel';

const app = async () => {
  console.log('program start');
  const names: Array<string> = await getAllFileName();
  await write(names);
};

app();
