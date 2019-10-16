class NexSleeper {
    constructor(minimumTimeInMicroseconds) {
        this.start = Date.now();
        this.minimumTimeInMicroseconds = minimumTimeInMicroseconds;
    }

    async wait() {
        let sleepTime = this.minimumTimeInMicroseconds - (Date.now() - this.start);
        if (sleepTime > 0) await NexSleeper.sleep(sleepTime);
    }

    static async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports=NexSleeper;
