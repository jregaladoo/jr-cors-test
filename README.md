# JR HTTP Request

  The idea of this project is to provide a useful tool to test out CORS functionality.


  - HTTP Server

  Remember that CORS will return an `Origin: null` error when running from a browser. A simple way to avaid this is by moving into the project folder and running:

                                    $ python -m SimpleHTTPServer

   (Requires python install)

   - Usage:
        1. Set the `url` and `headers` needed in the `.js` file
        2. Run `index.html` in your web browser under a http server
        3. Open devtools and check COnsole and Network logs

   - [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
