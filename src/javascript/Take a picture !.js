/* 
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"] 
// Should return ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

["2016.img1"]
// Should return ["2016.img1","2016.img2"]
*/

function sortPhotos(pics) {
  const sortedPhotos = pics.sort((a, b) => {
    const [aYear, aImg] = a.split(".");
    const [bYear, bImg] = b.split(".");
    const numA = aImg.match(/\d/g).join("");
    const numB = bImg.match(/\d/g).join("");
    return aYear - bYear || numA - numB;
  });

  const [year, imgNum] = sortedPhotos.at(-1).split(".");
  const lastImg = `${year}.img${Number(imgNum.match(/\d/g).join("")) + 1}`;
  sortedPhotos.push(lastImg);
  return sortedPhotos.slice(-6);
}
