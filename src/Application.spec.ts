import Application from './Application';

describe('Application', () => {
  let application: Application;
  beforeEach(() => {
    application = new Application(1111);
  });

  it('should call service.listen when started with the correct port number', () => {
    const listenSpy = spyOn(application.service, 'listen');
    application.start();
    expect(listenSpy).toHaveBeenCalledTimes(1);
    expect(listenSpy).toHaveBeenCalledWith(1111, expect.any(Function));
  });
});