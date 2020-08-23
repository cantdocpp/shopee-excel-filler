interface GenerateData {
  title: string,
  description: string,
  price: number,
  stock: number,
  weight: number
}

/* eslint-disable */
const getPrice = (size: string = 'M'): number => {
  if (size === 'M') {
    return 60000;
  } else if (size === 'L') {
    return 60000;
  } else if (size === 'XL') {
    return 65000;
  } else if (size === 'XXL') {
    return 70000;
  }

  return 0;
};
/* eslint-disable */

const generateData = (productType: string, size: string, code: string): GenerateData => {
  const codeWithoutExtension = code.slice(0, -4);
  const data = {
    title: `Kaos distro pria ${productType} T-Shirt casual lengan pendek bahan katun ${codeWithoutExtension}`,
    /* eslint-disable */
    description: 'Tersedia warna navy, hitam, putih, maroon\n' +
                '\n' +
                'Semua baju berbahan katun sehingga adem dan tidak panas saat dipakai, jahitan yang rapih, serta sablon baju yang tidak mudah luntur.\n' +
                '\n' +
                '----------------------------------------------------------------------\n' +
                'Tersedia berbagai macam ukuran\n' +
                'M : 49 cm x 71 cm\n' +
                'L : 51 cm x 73 cm\n' +
                'XL : 54 cm x 75 cm\n' +
                'XXL : 56 cm x 77 cm\n' +
                '----------------------------------------------------------------------\n' +
                'Jika ada pertanyaan atau masalah, silahkan DM terlebih dahulu\n',
    /* eslint-disable */
    price: getPrice(size),
    stock: 1000,
    weight: 150
  }

  return data;
}

export default generateData;
