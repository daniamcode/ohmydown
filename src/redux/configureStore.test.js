import configureStore from './configureStore';

describe('ConfigureStore', () => {
  test('Should create a store', () => {
    const store = configureStore();

    expect(store).toBeDefined();
  });
});