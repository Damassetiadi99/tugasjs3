const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["januari", "februari","maret","april","mei","juni","juli" ,"agustus", "september", "november", "desember"];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error("Sorry, data tidak ditemukan"), []);
        }
    }, 4000);
};
getMonth((error,result)=>{
    if(error){
        console.log(error.message)
    } else {
        result.map((pilihBulan)=>{
            console.log(pilihBulan)
        })
    }
  })
