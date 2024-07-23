import crypto from "crypto";
const mitt = require("mitt");

const emitter: Emitter = mitt();

interface Request {
    body: any;
    headers: { [x: string]: any };
}

interface Response {
    sendStatus: (status: number) => void;
}

interface Event {
    event: string;
    data: any;
}

interface Emitter {
    on: (event: string, handler: (data: any) => void) => void;
    off: (event: string, handler: (data: any) => void) => void;
    emit: (event: string, data: any) => void;
}

class Events {
    webhook_secret: string;
    private emitter: Emitter = mitt();

    constructor(webhook_secret: string) {
        this.webhook_secret = webhook_secret;
        this.emitter = mitt();
    }

    middleware(req: Request, res: Response) {
        res.sendStatus(200);
        // Validate request
        const hash = crypto
            .createHmac("sha512", this.webhook_secret)
            .update(JSON.stringify(req.body))
            .digest("hex");
        if (hash === req.headers["X-Bloc-Webhook"]) {
            // Retrieve the request's body
            const event: Event = req.body;
            this.emitter.emit(event.event, event.data);
        }
    }

    on = this.emitter.on;
    off = this.emitter.off;
}

export = Events;

Events.prototype.middleware = function(req: { body: any; headers: { [x: string]: any; }; }, res: { sendStatus: (arg0: number) => void; }) {
    res.sendStatus(200);
    var hash = crypto
        .createHmac("sha512", this.webhook_secret)
        .update(JSON.stringify(req.body))
        .digest("hex");
    if (hash == req.headers["X-Bloc-Webhook"]) {
        var event = req.body;
        emitter.emit(event.event, event.data);
    }
};

// Extend emitter
Events.prototype.on = emitter.on;
Events.prototype.off = emitter.off;

module.exports = Events;