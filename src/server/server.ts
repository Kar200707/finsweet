function runServer(app):void {
    const port:string | number = process.env.PORT || 2000;

    try {
        let server = app.listen(port, ():void => {
            console.log("app listening at http://%s:%s", server.address().address, port);
        })
    } catch (e) {
        console.log('server error:', e);
    }
}

module.exports = runServer;