# Sidebar and Related Tracks service

> A front-end clone of SoundCloud's sidebar service

## Related Projects

  - https://github.com/sosacloud/comment-service.git
  - https://github.com/sosacloud/music-player-service.git

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> The relatedTracks view displays three tracks and their related information. Although the api can handle a track parameter provided in a call to the api, the relationship logic behind what constitutes a related track has been left undefined and three random tracks are retrieved from the database as a default.

![](sosa.gif)

## API

* > **GET** '/api/track/:id' - Retrieves information for a specific track
* > **GET** '/api/user/:user_name' - Retrieves user information for a specific user
* > **GET** '/api/track/likes/:track_id' - Retrieves ids of users who have liked the specified track
* > **GET** '/api/track/reposts/:track_id' - Retrieves ids of users who have reposted specified track 
* > **GET** '/api/playlists/:track_id' - Retrieves no more than 3 playlists that contain the specified track


## Requirements
* npm, git, MySQL

## Development

### Installing Dependencies

From within the root directory: `npm install`

### Populating the database
**You will need to create your own auth.js file and export it from within /db with host, user, database, and password**
See: [npm mysql](https://www.npmjs.com/package/mysql#establishing-connections)
* Generate fake data: `npm run fake-data`
* Seed the database: `npm run seed`


