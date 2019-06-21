let faker = require('faker');
let fs = require('fs');

let rnd = () => Math.floor(Math.random() * 100);


/*    functions for creating fake data for each table */
let createTracksData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.random.words()}, ${faker.internet.userName()}, ${rnd()}, ${rnd()}, ${faker.image.imageUrl()}, ${rnd()}\n`
  }
  return data.slice(0, -1);
}

let createUsersData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.internet.userName()}, ${faker.image.imageUrl()}\n`
  }
  return data.slice(0, -1);
}

let createPlaylistsData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.image.imageUrl()}, ${faker.internet.userName()}, ${rnd()} \n`
  }
  return data.slice(0, -1);
}


/*    Generate the fake data    */
let tracksData = createTracksData(100);
let usersData = createUsersData(100);
let playlistsData = createPlaylistsData(100);

let createData = function () {
  fs.writeFileSync(__dirname + '/tracksData.txt', tracksData);
  fs.writeFileSync(__dirname + '/usersData.txt', usersData);
  fs.writeFileSync(__dirname + '/playlistsData.txt', playlistsData);
};

exports.createData = createData;