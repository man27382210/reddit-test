import * as React from 'react';

import { initStore } from 'react-waterfall';

type Increment = () => (props: StateInterface) => ({ count: StateInterface['count']});

interface StateInterface {
  count: number;
}

interface ActionsInterface {
  increment: Increment;
}

interface StoreInterface {
  initialState: StateInterface;
  actions: ActionsInterface;
}

const store: StoreInterface = {
  initialState: { count: 0 },
  actions: {
    increment: (): (props: StateInterface) => StateInterface =>
      (props: StateInterface): StateInterface => ({ count: props.count + 1 }),
  },
};

const { Provider, connect } = initStore(store);

const CountComponent: (connectObj: { count: number; actions: ActionsInterface }) => JSX.Element =
(connectObj: { count: number; actions: ActionsInterface }): JSX.Element => {
  const { count, actions } = connectObj;
  const onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void =
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    actions.increment();
  };

  return (
    <div>
      {count}
      <button onClick={onClickEvent}>+</button>
    </div>
  );
};

const Count: () => JSX.Element = connect((state: StateInterface) => ({ count: state.count }))(CountComponent);

const App: () => JSX.Element = (): JSX.Element => (
  <Provider>
    <Count />
  </Provider>
);

export default App;
