const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

async function main() {
  const database = [];
  for (var pagess = 1; pagess <= 18; pagess++) {
    const name = [];
    const anchor = [];
    const img = [];
    const page_string = `https://www.freeonlinegames.com/tag/arcade-games/${pagess}`;
    const html = await request.get(page_string);
    const $ = await cheerio.load(html);

    // for (var j = 1; j <= 2; j++) {
    for (var i = 1; i <= 60; i++) {
      const temp = `#tag-games > a:nth-child(${i}) > div`;
      const text = $(temp).each((index, element) => {
        name.push($(element).text());
      });
    }
    // }

    for (var i = 1; i <= 60; i++) {
      const temp = `#tag-games > a:nth-child(${i})`;
      const text = $(temp).each((index, element) => {
        anchor.push(element.attribs.href);
      });
    }

    // for (var j = 1; j <= 2; j++) {
    for (var i = 1; i <= 60; i++) {
      const temp = `#tag-games > a:nth-child(${i}) > img`;
      const text = $(temp).each((index, element) => {
        img.push(element.attribs.src);
      });
    }
    // }

    for (var i = 0; i < name.length; i++) {
      const game = {};
      game.website = "https://www.freeonlinegames.com/";
      game.name = name[i];
      game.href_link = game.website + anchor[i];
      game.img_link = game.website + img[i];
      game.category = "Arcade";
      database.push(game);
    }
  }
  fs.writeFile("data13.json", JSON.stringify(database), function (err) {
    if (err) throw err;
    console.log("complete");
  });
}
main();
