'use client';

import { motion } from 'framer-motion';
import React, {useState, useEffect} from 'react';
import * as flubber from 'flubber';

interface PathMap {
  A: string;
  B: string;
  C: string;
}

const paths:PathMap = {
  A: 'M2.00037 408.703C2.00037 241.336 0.326884 187.778 222.899 187.778C445.471 187.778 699.839 187.778 781.839 187.778C929.104 187.778 930.778 2 781.839 2C632.9 2 408.654 2 335.021 2C130.857 2 149.266 355.145 335.021 355.145C520.777 355.145 833.716 355.145 907.349 355.145C1133.27 355.145 1149.15 505.985 1032.86 674.817C929.104 825.448 509.063 1392.82 432.083 1494.92C384.638 1557.84 326.401 1636.94 264.735 1660.61C135.222 1710.32 2.00037 1635.51 2.00037 1494.92C2.00037 1122.69 2.00037 615.681 2.00037 408.703Z',
  B: 'M100.004 1650C316.004 1650 1604 1650 1724 1650C1844 1650 1820 1598 1820 1458C1820 1318 1820 1138 1820 1078C1820 894 1616 874 1488 962C1314.1 1081.55 1118.66 1261.26 1012 1266C916.367 1270.25 896.004 1126 896.004 1034C896.004 942 896.004 286 896.004 198C896.004 110 908.004 2 1052 2C1196 2 1576 2 1616 2C1760 2 1820 179.467 1616 326C1332 530 178.789 1282.22 120.004 1318C-76.0002 1437.3 12.0024 1650 100.004 1650Z',
  C: 'M2.37858 1417.69C2.37858 1503.37 -13.6166 1638 162.33 1638C338.277 1638 926.1 1638 998.078 1638C1194.02 1638 1258 1584.96 1258 1450.33C1258 1352.42 1258 556.856 1258 487.5C1258 356.947 1142.03 201.915 978.084 356.946C814.134 511.978 690.173 613.973 550.214 756.767C374.268 936.276 246.305 871 246.305 675.17C246.305 536.397 246.305 214.148 246.305 169.271C246.305 42.7976 362.27 2.00041 422.252 2.00023C590.249 1.99971 962.089 2.00023 1018.07 2.00023C1158.03 2.00023 1150.03 185.59 1018.07 189.67C886.112 193.75 382.264 189.67 210.316 189.67C38.3679 189.67 2.37858 189.67 2.37858 373.26C2.37858 467.094 2.37858 1352.81 2.37858 1417.69Z',
};

export const ShapeAnimation = () => {
  const [currentPath, setCurrentPath] = useState<string>(paths.A);
  const [pathIndex, setPathIndex] = useState<number>(0);

  const pathArray: string[] = [paths.A, paths.B, paths.C];

  const morphToNext = (nextPath: string): void => {
    const interpolator = flubber.interpolate(currentPath, nextPath);
    const steps = 500; 
    const animationDuration = 4000; 

    let progress = 0;
    const interval = setInterval(() => {
      const nextStep = interpolator(progress / steps);
      setCurrentPath(nextStep);
      progress += 1;
      if (progress > steps) {
        clearInterval(interval);
      }
    }, animationDuration / steps);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (pathIndex + 1) % pathArray.length;
      morphToNext(pathArray[nextIndex]);
      setPathIndex(nextIndex);
    }, 1000); 

    return () => clearInterval(interval); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathIndex, currentPath]);

  return (
    <div>
      <motion.svg width="500px" height="100%" viewBox="0 0 1820 1700">
        <motion.path d={currentPath} fill="none" stroke="black" strokeWidth="3" />
      </motion.svg>
    </div>
  );
};
