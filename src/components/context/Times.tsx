import {types} from '@babel/core';
import React, {createContext, useContext, useReducer} from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Action = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
} as const;

type State = {
  id: number;
  time?: number;
  rest?: number;
  set?: number;
};

type ActionType = {
  type: keyof typeof Action;
  timer?: {time?: number; rest?: number; set?: number};
  id?: number;
};

const initialStates: State[] = [];

function reducer(states: State[], action: ActionType) {
  switch (action.type) {
    case 'ADD':
      return [...states, {id: 0, ...action.timer}];
    case 'DELETE':
      return [...states.filter((state) => state.id === action.id)];
    case 'UPDATE':
      return [
        ...states.map((state) =>
          state.id === action.id
            ? {
                ...state,
                ...(action.timer?.time && {rest: action.timer?.time}),
                ...(action.timer?.rest && {rest: action.timer?.rest}),
                ...(action.timer?.set && {rest: action.timer?.set}),
              }
            : state,
        ),
      ];
  }
}

export default function useTime() {
  const [state, dispatch] = useReducer(reducer, initialStates);

  return {
    state,
    dispatch,
  };
}

export function TimeProvider({children}: Props) {
  const {state} = useTime();
  const TimeContext = createContext(state);
  return <TimeContext.Provider value={state}>{children}</TimeContext.Provider>;
}
