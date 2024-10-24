import { HtmlHTMLAttributes } from 'react';

type Props = HtmlHTMLAttributes<SVGSVGElement> & {
  height?: number
  width?: number | string
}

const ShapeA = ({ height = 900, width = '100%', ...props }: Props) => {
  return (
    <svg {...props} width={width} height={height} viewBox="0 0 1106 1678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.00037 408.703C2.00037 241.336 0.326884 187.778 222.899 187.778C445.471 187.778 699.839 187.778 781.839 187.778C929.104 187.778 930.778 2 781.839 2C632.9 2 408.654 2 335.021 2C130.857 2 149.266 355.145 335.021 355.145C520.777 355.145 833.716 355.145 907.349 355.145C1133.27 355.145 1149.15 505.985 1032.86 674.817C929.104 825.448 509.063 1392.82 432.083 1494.92C384.638 1557.84 326.401 1636.94 264.735 1660.61C135.222 1710.32 2.00037 1635.51 2.00037 1494.92C2.00037 1122.69 2.00037 615.681 2.00037 408.703Z" stroke="#F83535" strokeWidth="3" />
    </svg>
  );
};

export default ShapeA;