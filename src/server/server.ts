function runServer(app):void {
    const port:string | number = process.env.PORT || 3000;

    try {
        let server = app.listen(port, ():void => {
            console.log("app listening at http://host", server.address().address, port);
        })
    } catch (e) {
        console.log('server error:', e);
    }
}

module.exports = runServer;