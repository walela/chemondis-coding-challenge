# Chemondis Coding Challenge
Deployment: https://photobucket-chemondis.vercel.app/

## Task
Consume the JSONPlaceholder Album API and build an ES6 application to view albums and photos.
Use the libraries, frameworks and tools of your choice. The layout and design are up to you.

- Pagination of albums: https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5
- Photos of a specific album: https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=5
- Information on users: https://jsonplaceholder.typicode.com/users

## Album Page
- [x] display the albums in a grid
- [x] use https://via.placeholder.com/150/00ff as album cover image
- [x] use a different image placeholder color for each user
- [x] display the title of the album
- [x] display the username of the album owner
- [x] paginate the albums
- [x] offer 3 choices of how many albums are shown- on a page (20, 30, 50)
- [x] Clicking on an album leads to a photo page
## Photos Page
- [x] display a page title consisting of album owner and album title
- [x] display the photos in a grid
- [x] display the title of the photo
- [x] paginate the photo thumbnails
- [x] offer 3 choices of how many photos are shown on a page (20, 30, 50)
- [x] clicking on a photo thumbnail opens a modal
## Photo Detail Modal
- [x] the modal shows the photo in full size
- [x] also the photos owner, album and title are shown

## Other Requirements
- [x] to run the project via docker
- [x] documentation


# Installation

To run the project, clone the repository and run `yarn install` (or equivalent) and `yarn dev`.

If you have `Docker`, `node` and `yarn` installed, you can also run this project inside a Docker container by
`cd`ing into the parent directory and running:

`docker build -t photo-bucket` to build the image

and then
`docker run -p 3000:3000 -d photo-bucket` to run the application

# Implementation
The project is a standard client-rendered application using:

- React 18 bootstrapped minimally with [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) and [Headless UI](https://headlessui.com/) for utility classes and styling 
- [React Query](https://tanstack.com/query/v4/docs/overview) and Axios for data fetching and caching. RQ also dedupes any duplicate requests
  which improves the performance of the application, and handles retries and errors gracefully.
- [React Router v6](https://reactrouter.com/en/main/start/overview) for client-side routing


Potential improvements include:
- Refactor some state (e.g users) into a global Context 
- Extract utility classes into re-usable classes to improve readability
- Add unit tests