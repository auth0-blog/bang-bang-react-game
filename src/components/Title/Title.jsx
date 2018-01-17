import React from 'react';
import { pathFromBezierCurve } from '../../utils/formulas';

const Title = () => {
  const aliensLine = {
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 120,
      fill: '#cbca62',
    },
  };

  const goHomeLine = {
    ...aliensLine,
    y: -700, // 500 up
  };

  const aliensLineCurve = {
    initialAxis: {
      x: -190,
      y: -775,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  };

  const goHomeLineCurve = {
    ...aliensLineCurve,
    initialAxis: {
      x: -250,
      y: -630,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="AliensPath"
          d={pathFromBezierCurve(aliensLineCurve)}
        />
        <path
          id="GoHomePath"
          d={pathFromBezierCurve(goHomeLineCurve)}
        />
      </defs>
      <text {...aliensLine}>
        <textPath xlinkHref="#AliensPath">
          Aliens,
        </textPath>
      </text>
      <text {...goHomeLine}>
        <textPath xlinkHref="#GoHomePath">
          Go Home!
        </textPath>
      </text>
    </g>
  );
};

export default Title;
