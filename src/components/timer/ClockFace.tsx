import React from 'react';
import { G, Text, Line } from 'react-native-svg';
import range from 'lodash/range';
import { REM } from 'utils/stylesUtil';

type Props = {
  r: number;
  stroke: string;
  type: string;
};

export default function ClockFace({ r, stroke, type }: Props) {
  const faceRadius = r - 5;
  const textRadius = r - 26;
  return (
    <G>
      {range(48).map((i) => {
        const cos = Math.cos(((2 * Math.PI) / 48) * i);
        const sin = Math.sin(((2 * Math.PI) / 48) * i);

        return (
          <Line
            key={i}
            stroke={stroke}
            strokeWidth={i % 4 === 0 ? 3 : 1}
            x1={cos * faceRadius}
            y1={sin * faceRadius}
            x2={cos * (faceRadius - 7)}
            y2={sin * (faceRadius - 7)}
          />
        );
      })}
      <G transform={{ translate: '0, 5' }}>
        {range(12).map((h, i) => {
          const cos = Math.cos(((2 * Math.PI) / 12) * (i + 10));
          const sin = Math.sin(((2 * Math.PI) / 12) * (i + 10));
          return (
            <Text
              fill={stroke}
              fontSize={16 * REM}
              textAnchor="middle"
              x={cos * textRadius}
              y={sin * textRadius}>
              {type === '60' ? (h + 1) * 5 : (h + 1) * 2}
            </Text>
          );
        })}
      </G>
    </G>
  );
}
