import configureStore from './configureStore';

describe('ConfigureStore', () => {
  test('Should create an store', () => {
    const store = configureStore();

    expect(store).toBeDefined();
  });
});