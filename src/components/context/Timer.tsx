/* eslint-disable react-hooks/rules-of-hooks */
import React, {createContext, useReducer} from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Action = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
} as const;

type Timer = {
  id?: number;
  time?: number;
  rest?: number;
  set?: number;
};

type ActionType = {
  type: keyof typeof Action;
  payload?: Timer;
};

function reducer(state: Timer, action: ActionType) {
  switch (action.type) {
    case 'ADD':
      return {...action.payload};
    case 'UPDATE':
      return {
        ...state,
        ...(action.payload?.time && {rest: action.payload?.time}),
        ...(action.payload?.rest && {rest: action.payload?.rest}),
        ...(action.payload?.set && {rest: action.payload?.set}),
      };
  }
}

export default function useTimer(init: Timer) {
  const [state, dispatch] = useReducer(reducer, init);

  return {
    state,
    dispatch,
  };
}

export function TimeProvider({children}: Props) {
  const timers: {timer: Timer; dispatch: React.Dispatch<ActionType>}[] = [];

  const addTimer = () => {
    const newTimer: Timer = {};
    const {state, dispatch} = useTimer(newTimer);
    timers.push({timer: state, dispatch: dispatch});
  };

  const removeTimer = (id: number) => {
    timers.forEach(({timer}, i) => {
      if (timer.id === id) {
        timers.splice(i, 1);
      }
    });
  };

  const TimeContext = createContext({addTimer, removeTimer, timers});
  return (
    <TimeContext.Provider value={{addTimer, removeTimer, timers}}>
      {children}
    </TimeContext.Provider>
  );
}
