function penjumlahan(angka1, angka2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
          reject(new Error('masukan harus berupa number'));
        } else {
          const result = angka1 + angka2;
          resolve(result);
        }
      }, 3000);
    });
  }
  
  console.log('proses1');
  penjumlahan(4, 5)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
  
  console.log('print3');