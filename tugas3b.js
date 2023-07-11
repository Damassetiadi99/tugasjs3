const Liburan = (day) => {
    if (typeof day !== 'string') {
      return Promise.reject(new Error('inputan harus berupa string'));
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const dataDay = ['sabtu', 'minggu'];
          const cek = dataDay.find((item) => {
            return item.toLowerCase() === day.toLowerCase();
          });
          if (cek) {
            resolve(`Hari ini adalah hari ${day}, dan kita bisa berlibur`);
          } else {
            throw new Error('Maaf, hari ini saya harus bekerja.');
          }
        } catch (error) {
          reject(error);
        }
      }, 3000);
    });
  };
  
  console.log('perintah 1');
  Liburan('sabtu')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
  console.log('perintah 3');