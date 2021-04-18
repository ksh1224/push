import React, { useState, useEffect, useRef } from 'react';
import { PanResponder, View, PanResponderInstance } from 'react-native';
import Svg, {
  Circle,
  G,
  LinearGradient,
  Path,
  Defs,
  Stop,
} from 'react-native-svg';
import _ from 'lodash';

import ClockFace from './ClockFace';
import { mainColor as defaultmainColor, REM } from 'utils/stylesUtil';

function calculateArcCircle(
  index0: number,
  segments: number,
  radius: number,
  startAngle0 = 0,
  angleLength0 = 2 * Math.PI,
) {
  // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
  const startAngle = startAngle0 % (2 * Math.PI);
  const angleLength = angleLength0 % (2 * Math.PI);
  const index = index0 + 1;
  const fromAngle = (angleLength / segments) * (index - 1) + startAngle;
  const toAngle = (angleLength / segments) * index + startAngle;
  const fromX = radius * Math.sin(fromAngle);
  const fromY = -radius * Math.cos(fromAngle);
  const realToX = radius * Math.sin(toAngle);
  const realToY = -radius * Math.cos(toAngle);

  // add 0.005 to start drawing a little bit earlier so segments stick together
  const toX = radius * Math.sin(toAngle + 0.005);
  const toY = -radius * Math.cos(toAngle + 0.005);

  return {
    fromX,
    fromY,
    toX,
    toY,
    realToX,
    realToY,
  };
}

function getGradientId(index: any) {
  return `gradient${index}`;
}

type Props = {
  visible?: boolean;
  close?: () => void;
  onUpdate: ({ angleLength }: any) => void;
  angleLength: number;
  segments: number;
  strokeWidth: number;
  radius: number;
  mainColor: string;
  showClockFace?: boolean;
  clockFaceType: string;
  clockFaceColor: string;
  bgCircleColor?: string;
  stopIcon?: React.Component;
  startIcon?: React.Component;
};

function CircularSlider({
  onUpdate,
  angleLength,
  segments,
  clockFaceType,
  strokeWidth,
  radius,
  mainColor,
  showClockFace,
  clockFaceColor,
  bgCircleColor,
}: Props) {
  const circleRef = useRef<View>(null);
  const [angleLengthValue, setAngleLengthValue] = useState(angleLength);
  const [circleCenterX, setCircleCenterX] = useState(0);
  const [circleCenterY, setCircleCenterY] = useState(0);

  const wakePanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => setCircleCenter(),
      onPanResponderMove: (evt, { moveX, moveY }) => {
        console.log('onPanResponderMove', evt);
        let newAngle =
          Math.atan2(moveY - circleCenterY, moveX - circleCenterX) +
          Math.PI / 2;
        if (newAngle < 0) {
          newAngle += 2 * Math.PI;
        }
        setAngleLengthValue(newAngle);
        onUpdate({
          angleLength: newAngle,
          percent: (newAngle / (2 * Math.PI)) * 100,
        });
      },
    }),
  ).current;

  const getContainerWidth = () => strokeWidth + radius * 2;

  const setCircleCenter = () => {
    circleRef.current?.measure((x, y, w, h, px, py) => {
      const halfOfContainer = getContainerWidth() / 2;
      setCircleCenterX(px + halfOfContainer);
      setCircleCenterY(py + halfOfContainer);
    });
  };

  const containerWidth = getContainerWidth();

  const stop = calculateArcCircle(
    segments - 1,
    segments,
    radius,
    0,
    angleLengthValue,
  );

  useEffect(() => {
    setAngleLengthValue(angleLength);
  }, [angleLength]);

  return (
    <View
      style={{ width: containerWidth, height: containerWidth }}
      onLayout={() => setCircleCenter()}
      ref={circleRef}>
      <Svg height={containerWidth + 2 * REM} width={containerWidth + 2 * REM}>
        <Defs>
          {_.range(segments).map((i) => {
            const { fromX, fromY, toX, toY } = calculateArcCircle(
              i,
              segments,
              radius,
              0,
              angleLengthValue,
            );
            return (
              <LinearGradient
                key={i}
                id={getGradientId(i)}
                x1={fromX.toFixed(2)}
                y1={fromY.toFixed(2)}
                x2={toX.toFixed(2)}
                y2={toY.toFixed(2)}>
                <Stop offset="0%" stopColor={mainColor} />
              </LinearGradient>
            );
          })}
        </Defs>

        {/*
            ##### Circle
          */}

        <G
          transform={{
            translate: `${strokeWidth / 2 + radius + 1}, ${
              strokeWidth / 2 + radius + 1
            }`,
          }}>
          <Circle
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke={bgCircleColor}
          />
          {showClockFace && (
            <ClockFace
              type={clockFaceType}
              r={radius - strokeWidth / 2}
              stroke={clockFaceColor}
            />
          )}
          {_.range(segments).map((i) => {
            const { fromX, fromY, toX, toY } = calculateArcCircle(
              i,
              segments,
              radius,
              0,
              angleLengthValue,
            );
            const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(
              2,
            )} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

            return (
              <Path
                d={d}
                key={i}
                strokeWidth={strokeWidth}
                stroke={`url(#${getGradientId(i)})`}
                fill="transparent"
              />
            );
          })}

          {/*
              ##### Cursor
            */}

          <G
            fill={mainColor}
            transform={{ translate: `${stop.toX}, ${stop.toY}` }}
            {...wakePanResponder?.panHandlers}>
            <Circle
              onPress={() => setAngleLengthValue(angleLength)}
              r={(strokeWidth - 1) / 2}
              fill={bgCircleColor}
              stroke={mainColor}
              strokeWidth="1"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
}

CircularSlider.defaultProps = {
  visible: false,
  close: () => {},
  segments: 5,
  strokeWidth: 40 * REM,
  radius: 145 * REM,
  mainColor: defaultmainColor,
  clockFaceColor: '#020202',
  bgCircleColor: '#171717',
  clockFaceType: '60',
};

export default React.memo(CircularSlider);
