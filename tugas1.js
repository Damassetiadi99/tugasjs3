const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            const cek = dataDay.find((item) => {
                return item.toLowerCase() === day.toLowerCase();

            });
            if (cek) {
                resolve(`hari ini jadwal masuk :${day}`);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};
console.log('perintah 1')
cekHariKerja('Minggu')
    .then((result) => {
        console.log(result); // Output: Senin
    })
    .catch((error) => {
        console.error(error.message); // Output: Error: Hari ini bukan hari kerja
    });
console.log('perintah3')
