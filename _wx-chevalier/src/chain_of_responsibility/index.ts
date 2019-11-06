export class Handler {
  private handler?: Handler;
  private req: number;

  constructor(req: number) {
    this.req = req;
  }

  public setHandler(handler: Handler): void {
    this.handler = handler;
  }

  public operation(msg: string, req: number): void {
    // 传入的req不大于handler的req
    if (req <= this.req) {
      this.handlerRequest(msg);
    } else if (this.handler !== null && this.handler !== undefined) {
      this.handler.operation(msg, req);
    }
  }

  // 子类必须实现这个方法
  public handlerRequest(msg: string): void {
    throw new Error('Abstract method!');
  }
}

export class ConcreteHandler1 extends Handler {
  constructor(req: number) {
    super(req);
  }
  public handlerRequest(msg: string) {
    console.log('Message (ConcreteHandler1) :: ', msg);
  }
}

export class ConcreteHandler2 extends Handler {
  constructor(req: number) {
    super(req);
  }
  public handlerRequest(msg: string) {
    console.log('Message :: (ConcreteHandler2) ', msg);
  }
}

export class ConcreteHandler3 extends Handler {
  constructor(req: number) {
    super(req);
  }
  public handlerRequest(msg: string) {
    console.log('Message :: (ConcreteHandler3) ', msg);
  }
}
