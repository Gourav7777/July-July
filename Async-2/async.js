// let promise = new Promise((res, rej)=>{

//        let data = "100 rupees"
//        let err = "Nothing"

//       res(data)
//        rej(err)
// })

// console.log(promise);

// promise
// .then((data)=>{

//      console.log(data);

// })
// .catch((err)=>{

//       console.log(err);

// })
// .finally(()=>{
//     console.log("I will run always")
// })

function boilWater() {
  return new Promise((res, rej) => {
    console.log("Water starts boiling");

    setTimeout(() => {
      res("hotwater is ready");
    }, 5000);
  });
}

function prepareTea(hotwater) {
  return new Promise((res, rej) => {
    console.log(`${hotwater} and tea starts preparing `);

    setTimeout(() => {
    //   res("tea is ready");

      rej("pani thnda ho gyaaa")
    }, 5000);
  });
}

function serveTea(tea) {
  console.log(tea);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("served tea");
    }, 5000);
  });
}

boilWater()
  .then((data) => {


    return prepareTea(data);
  })
  .then((t) => {


    return serveTea(t);
  })
  .then((d) => {
    console.log(d);
  })
  .catch((err)=>{

    console.log(err)
  })
  .finally(()=>{
    console.log("chai ksee legii")
  })
