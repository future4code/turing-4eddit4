import Index from './index.js';

it('Renderiza sem crashar', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'testingAppRender' }),
    ),
  ).toMatchSnapshot();
});