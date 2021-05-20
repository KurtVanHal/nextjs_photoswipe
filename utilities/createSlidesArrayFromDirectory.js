const { readdir, stat, writeFile } = require('fs/promises');
const { createWriteStream, write } = require('fs');
const sizeOf = require('image-size');
const path = require('path');

const publicDirectory = path.join(process.cwd(), '/../');

const getDirectories = async () => {
  const files = await readdir(path.join(publicDirectory, 'public'));

  let test = ['bla'];
  files.forEach(async (file) => {
    stat(path.join(publicDirectory, 'public', file))
      .then((stats) => {
        if (stats.isDirectory()) {
          return file;
        }
      })
      .then((file) => createArray(file))
      .catch((err) => console.log(err));
  });
  // console.log(stat(path.join(publicDirectory, file)));
};

const createArray = async (file) => {
  if (file != undefined) {
    const array = [];
    const photos = await readdir(path.join(publicDirectory, 'public', file));
    photos.forEach((photo) => {
      const dimensions = sizeOf(
        path.join(publicDirectory, 'public', file, photo),
      );
      array.push({
        src: `${file}/${photo}`,
        w: dimensions.width,
        h: dimensions.height,
        toString: () => {
          return `{src: '/${file}/${photo}', w:  '${dimensions.width}', h: '${dimensions.height}'}`;
        },
      });
    });

    const writeStream = createWriteStream(
      path.join(publicDirectory, `data/${file}.js`),
    );
    writeStream.write('const slides = [');
    array.forEach((imgObject) => {
      writeStream.write(`${imgObject.toString()},`);
    });
    writeStream.write(']; export default slides;');

    writeStream.on('finish', () => {
      console.log('Finished');
    });

    writeStream.on('error', (err) => {
      console.log(err);
    });

    writeStream.end();
  }
};

getDirectories();
