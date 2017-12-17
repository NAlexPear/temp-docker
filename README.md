# temp-docker
A quick repo demonstrating inconsistent behavior in `temp` in Docker

## Summary:

When working with the `temp` module in Webpack through Docker, "temporary" files were persisted to the working directory on each Webpack compilation. This repo demonstrates that unexpected behavior.


## To Test:

0. Comment out [line 16 of `loader.js`](https://github.com/NAlexPear/temp-docker/blob/master/loader.js#L16)
1. Run `npm install && npm start` outside of Docker first to confirm that the Webpack Dev Server is working correctly, without leaking any files to the working directory.
2. Run `docker-compose up` to see that the compiled files are not deleted on process exit inside a docker container.
3. Un-comment [line 16 of `loader.js`](https://github.com/NAlexPear/temp-docker/blob/master/loader.js#L16)
4. Repeat step 2 to see that compiled `temp` files are now removed explicitly at the appropriate time (before appearing in the bound volume/file system)
