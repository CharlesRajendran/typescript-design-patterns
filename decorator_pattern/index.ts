abstract class CableTv {
    public description:string;

    public abstract getSubscriptionCost(): number;
}

class StarTV extends CableTv {
    public description:string = "Star TV";

    public getSubscriptionCost(): number {
        return 500;
    }
}

class SunTV extends CableTv {
    public description:string = "Star TV";

    public getSubscriptionCost(): number {
        return 1000;
    }
}

abstract class TvOptions extends CableTv {
    decoratedTvChannel: CableTv;
    public abstract getDescription(): string;
    public abstract getSubscriptionCost(): number;
} 

class SportsSubscription extends TvOptions {
    constructor(tv: CableTv) {
        super();
        this.decoratedTvChannel = tv;
    }

    public getDescription(): string {
        return this.decoratedTvChannel + ", Added Sports Channel";
    }

    public getSubscriptionCost(): number {
        return this.decoratedTvChannel.getSubscriptionCost() + 300;
    }
}


class HindiSubscription extends TvOptions {
    constructor(tv: CableTv) {
        super();
        this.decoratedTvChannel = tv;
    }

    public getDescription(): string {
        return this.decoratedTvChannel + ", Added Hindi Channel";
    }

    public getSubscriptionCost(): number {
        return this.decoratedTvChannel.getSubscriptionCost() + 400;
    }
}

let starTv = new StarTV();
console.log(`Basic TV cost : ${ starTv.getSubscriptionCost() }`);
starTv = new SportsSubscription(starTv);
console.log(`Sports TV cost : ${ starTv.getSubscriptionCost() }`);
starTv = new HindiSubscription(starTv);
console.log(`Hindi TV cost : ${ starTv.getSubscriptionCost() }`);