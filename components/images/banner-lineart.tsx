import { cnb } from "cnbuilder";
import React from "react";

interface BannerLineartProps {
  className?: string;
  variant?: "a" | "b" | "default";
}

const BannerLineart = ({
  className,
  variant = "default",
}: BannerLineartProps) => {
  if (variant === "a") {
    return (
      <>
        <svg
          aria-hidden="true"
          width="1508"
          height="986"
          viewBox="0 0 1508 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden 2xl:block", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M1505 159C1505 159 1505 923 1505 947C1505 971 1495 983 1467 983C1439 983 65 983 37 983C9 983 3 973 3 947C3 921 3 119 3 94.9999C3 70.9999 5 52.9999 37 52.9999C69 52.9999 1132 53 1142 53C1152 53 1316 149 1374 183C1387.48 190.9 1420 199 1420 159C1420 119 1420 59 1420 47C1420 20 1419 3 1381 3C1343 3 1309 3 1287 3C1270 3 1254.69 32.2295 1287 47.0008C1357 79.0005 1505 151 1505 159Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* XL SVG */}
        <svg
          aria-hidden="true"
          width="1001"
          height="986"
          viewBox="0 0 1001 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden xl:block 2xl:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M997.994 167C997.994 167 997.994 923 997.994 947C997.994 971 987.994 983 959.994 983C931.994 983 65.0102 983 37.0102 983C9.0102 983 3.01019 973 3.01019 947C3.01019 921 3.01019 119 3.01019 95C3.01019 71 5.01019 53 37.0102 53C69.0102 53 627.996 53 637.996 53C647.996 53 808.996 142.5 866.997 173.5C886.496 183.922 912.997 179.5 912.997 149.5C912.997 109.5 912.997 59 912.997 47C912.997 20 911.999 3 873.999 3C835.999 3 801.997 3 779.997 3C762.997 3 748.22 31.1126 779.997 47.0008C840 77.002 997.998 164 997.994 167Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* LG SVG */}
        <svg
          aria-hidden="true"
          width="814"
          height="986"
          viewBox="0 0 814 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden lg:block xl:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M810.998 113C810.998 113 810.998 923 810.998 947C810.998 971 800.998 983 772.998 983C744.998 983 65.024 983 37.024 983C9.02399 983 3.02399 973 3.02399 947C3.02399 921 3.02399 119 3.02399 95C3.02399 71 5.02399 53 37.024 53C69.024 53 577 53 581.5 53C586 53 668 91 714 113C728.092 119.74 741.001 109.129 741.001 89C741.001 49 741.001 38 741.001 26C741.001 9 739.001 3 722 3C684 3 670 3 648 3C631 3 620.751 24.2165 648 36C717 65.8378 800.5 107.5 810.998 113Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* MD SVG */}
        <svg
          aria-hidden="true"
          width="697"
          height="776"
          viewBox="0 0 697 776"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden md:block lg:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M693.998 98.5C693.998 98.5 693.998 713 693.998 737C693.998 761 683.998 773 655.998 773C627.998 773 65 773 37 773C9 773 3 763 3 737C3 711 3 119 3 95C3 71 5 53 37 53C69 53 511 53 515.5 53C520 53 578 81 622 102C636.097 108.728 649.001 99.4091 649.001 79.2804C649.001 39.2804 649.001 38 649.001 26C649.001 9 647.001 3 630 3C592 3 578 3 556 3C543.5 3 534.343 25.821 556 36C606 59.5 683.5 93 693.998 98.5Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* SM SVG */}
        <svg
          aria-hidden="true"
          width="509"
          height="617"
          viewBox="0 0 509 617"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden sm:block md:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M506.998 57C506.998 57 506.998 582.452 506.998 600C506.998 611 503.5 615 494 615C473.537 615 36.9632 615 16.5 615C5.65384 615 1.99805 608.322 1.99805 598.5C1.99805 588.678 1.99805 62.8156 1.99805 45.2675C1.99805 32 9.99805 27.5584 21.8462 27.5584C45.2326 27.5584 387.258 27.5584 390.547 27.5584C393.836 27.5584 432.224 48.0312 464.38 63.3857C474.683 68.3052 484.113 72.4913 484.113 57.7738C484.113 28.5271 484.113 20.774 484.113 12C484.113 5 482.27 2 474.498 2C466.727 2 435.133 2 425.998 2C416.863 2 414.498 13.706 422.145 17.3019C458.687 34.4844 499.326 52.9786 506.998 57Z"
            stroke="#F83535"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        {/* XS SVG */}
        <svg
          aria-hidden="true"
          width="322"
          height="778"
          viewBox="0 0 322 778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("block sm:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M320.5 50.5C320.5 50.5 320.5 743.452 320.5 761C320.5 772 317.002 776 307.502 776C287.039 776 36.9651 776 16.502 776C5.65579 776 2 769.322 2 759.5C2 749.678 2 62.8156 2 45.2675C2 32 10 27.5584 21.8481 27.5584C45.2346 27.5584 223.211 27.5584 226.5 27.5584C229.789 27.5584 255.677 41.0312 287.833 56.3857C291.5 58.1367 297.615 57.5 297.615 50.7738C297.615 21.5271 297.615 20.774 297.615 12C297.615 5 295.771 2 288 2C280.228 2 262.135 2 253 2C243.865 2 241.5 13.706 249.147 17.3019C285.689 34.4844 312.828 46.4786 320.5 50.5Z"
            stroke="#F83535"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </>
    );
  }
  if (variant === "b") {
    return (
      <>
        <svg
          aria-hidden="true"
          width="1508"
          height="986"
          viewBox="0 0 1508 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden 2xl:block", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M1337.5 89C1268 89 1268 3 1337.5 3C1359.5 3 1379 3 1423 3C1467 3 1466.5 52.9346 1424 52.9346C1359.8 54.2569 1184 54 1141 54C1098 54 69.0008 52.9999 37.0009 52.9999C5.00086 52.9999 3.00085 70.9999 3.00085 94.9999C3.00085 119 3.00085 921 3.00085 947C3.00085 973 9.00086 983 37.0009 983C65.0008 983 1439 983 1467 983C1495 983 1505 971 1505 947C1505 925.53 1505 271.367 1505 132.5C1505 104.5 1494 89 1467 89C1451 89 1337.5 89 1337.5 89Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* XL SVG */}
        <svg
          aria-hidden="true"
          width="1003"
          height="986"
          viewBox="0 0 1003 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden xl:block 2xl:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M832.5 89C762.999 89 762.999 3 832.5 3C854.5 3 873.999 3 917.999 3C961.999 3 961.499 54.9346 918.999 54.9346C854 54.9346 678.998 54 635.999 54C593 54 69 52.9999 37 52.9999C5.00001 52.9999 3 70.9999 3 94.9999C3 119 3 921 3 947C3 973 9.00001 983 37 983C65 983 934 983 962 983C990 983 1000 971 1000 947C1000 925.53 1000 271.367 1000 132.5C1000 104.5 988.999 89 961.999 89C945.999 89 832.5 89 832.5 89Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* LG SVG */}
        <svg
          aria-hidden="true"
          width="817"
          height="986"
          viewBox="0 0 817 986"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden lg:block xl:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M646.5 89C576.999 89 576.999 3 646.5 3C668.5 3 687.999 3 731.999 3C775.999 3 775.499 54.9346 732.999 54.9346C667 54.9346 492.998 54 449.999 54C407 54 69 52.9999 37 52.9999C5.00001 52.9999 3 70.9999 3 94.9999C3 119 3 921 3 947C3 973 9.00001 983 37 983C65 983 748 983 776 983C804 983 814 971 814 947C814 925.53 814 271.367 814 132.5C814 104.5 802.999 89 775.999 89C759.999 89 646.5 89 646.5 89Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* MD SVG */}
        <svg
          aria-hidden="true"
          width="697"
          height="766"
          viewBox="0 0 697 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden md:block lg:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M556 76C512 76 509 3 556 3C578 3 577.998 3 611.999 3C646 3 647 44.9346 612.999 44.9346C548.5 44.9346 372.998 44 329.999 44C287 44 69 42.9999 37 42.9999C5.00001 42.9999 3 60.9999 3 84.9999C3 109 3 701 3 727C3 753 9.00001 763 37 763C65 763 628 763 656 763C684 763 694 751 694 727C694 705.531 694 254.367 694 115.5C694 87.5 688.999 76 661.999 76C645.999 76 556 76 556 76Z"
            stroke="#F83535"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {/* SM SVG */}
        <svg
          aria-hidden="true"
          width="509"
          height="620"
          viewBox="0 0 509 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("hidden sm:block md:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M406.146 55.3092C373.99 55.3092 371.797 2 406.146 2C422.224 2 422.223 2 447.072 2C471.92 2 472.651 33.1628 447.802 33.1628C401 33.1628 272.404 31.9408 240.979 31.9408C209.554 31.9408 50.2344 31.2105 26.8481 31.2105C3.46166 31.2105 2 44.3552 2 61.8815C2 79.4078 2 572.013 2 591C2 609.987 6.38496 617.289 26.8481 617.289C47.3111 617.289 458.765 617.29 479.229 617.29C499.692 617.29 507 608.526 507 591C507 575.322 507 185.564 507 84.1546C507 63.7072 499.732 55.3092 480 55.3092C468.307 55.3092 406.146 55.3092 406.146 55.3092Z"
            stroke="#F83535"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        {/* XS SVG */}
        <svg
          aria-hidden="true"
          width="323"
          height="779"
          viewBox="0 0 323 779"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cnb("block sm:hidden", className)}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
          preserveAspectRatio="none"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M245.146 45.3092C212.99 45.3092 210.797 2 245.146 2C272 2 246.223 2 271.072 2C295.92 2 296.349 28.5 271.5 28.5C224 28.5 139.425 27.9408 108 27.9408C76.5752 27.9408 45.3864 27.2105 22 27.2105C9 27.2105 2.15195 38.3092 2.15195 49.8815C2.15195 67.4078 2.15195 740.921 2.15195 757.711C2.15195 774.5 8 777 18 777C28 777 278.765 777 299.229 777C315 777 321 769.389 321 753.711C321 738.032 321 170.564 321 69.1546C321 54.5 317.5 45.3092 302.613 45.3092C290.92 45.3092 245.146 45.3092 245.146 45.3092Z"
            stroke="#F83535"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </>
    );
  }

  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1730 632"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("hidden 2xl:block", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M2.1275 555.801C2.1275 584.656 -3.25941 630 55.9966 630C115.253 630 1616.52 630 1640.76 630C1728.3 630 1728.3 607 1728.3 544C1728.3 504.199 1728.3 148.874 1728.3 125.515C1728.3 81.545 1697.5 62.0899 1640.77 81.5449C1584.04 101 1504.84 135.515 1406.84 161C1369.3 170.761 1347.58 141 1347.58 121.545C1347.58 74.8065 1347.58 73.451 1347.58 58.3363C1347.58 15.7405 1386.64 2.00014 1406.84 2.00008C1463.42 1.9999 1588.65 2.00008 1607.5 2.00008C1654.64 2.00008 1651.94 63.8326 1607.5 65.2066C1563.06 66.5807 130.068 65.2066 72.1588 65.2066C14.2495 65.2066 2.12891 65.2066 2.12891 127.039C2.12891 158.642 2.1275 533.95 2.1275 555.801Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
      {/* XL SVG */}
      <svg
        aria-hidden="true"
        width="998"
        height="643"
        viewBox="0 0 998 643"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("hidden xl:block 2xl:hidden", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M1.99957 566.801C1.99957 595.656 -3.38734 641 55.8687 641C115.125 641 883.759 641 908 641C995.537 641 995.537 618 995.537 555C995.537 515.199 995.539 139.874 995.539 116.515C995.539 72.545 969 59.1699 930 72.5449C891 85.9198 809 116.515 763 130C725.784 140.91 703.744 120 703.744 90.5449C703.744 43.8064 703.744 64.4509 703.744 49.3363C703.744 6.74047 731.927 2.00003 763 2.00003C819.579 2.00003 855.881 2 874.735 2C921.871 2 919.177 54.8325 874.735 56.2066C830.293 57.5806 129.94 56.2066 72.0309 56.2066C14.1216 56.2066 2.00098 56.2065 2.00098 118.039C2.00098 149.642 1.99957 544.95 1.99957 566.801Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
      {/* LG SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 786 729"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("hidden lg:block xl:hidden", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M2.13043 652.801C2.13043 681.656 -3.25648 727 55.9995 727C115.256 727 671.759 727 696 727C783.537 727 783.537 704 783.537 641C783.537 601.199 783.539 129.874 783.539 106.515C783.539 62.545 758 58.5104 733 62.5449C708 66.5793 641 87.5149 595 101C557.784 111.91 535.744 91.9999 535.744 62.5449C535.744 59 535.744 54.4509 535.744 39.3363C535.744 2.00008 563.927 2.00003 595 2.00003C651.579 2.00003 643.881 2 662.735 2C709.871 2 707.177 44.8325 662.735 46.2065C618.293 47.5806 130.071 46.2064 72.1617 46.2065C35 46.2065 2.13184 62.5449 2.13184 108.039C2.13184 139.642 2.13043 630.95 2.13043 652.801Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
      {/* MD SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 628 557"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("hidden md:block lg:hidden", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M2.13086 504C2.13086 532.855 11 555 42.9996 555C102.256 555 551.222 555 575.463 555C616.463 555 626 543.801 626 504C626 464.199 626.001 121.859 626.001 98.5C626.001 62.0449 598.425 44.0897 575.463 50.5449C552.5 57 527.5 65 481 78.5C453 86.629 431.244 84.9999 431.244 55.5449C431.244 52 431.244 47.4509 431.244 32.3363C431.244 4 462.5 2.00003 470.537 2.00003C478.575 2.00003 527.537 2 534.235 2C566.537 2 568.037 39.2065 534.235 39.2065C489.772 39.2065 116.909 39.2065 59 39.2065C23 39.2065 2.13184 50.5449 2.13184 85C2.13184 119.455 2.13086 482.149 2.13086 504Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
      {/* SM SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 494 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("hidden sm:block md:hidden", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M2.13086 457C2.13086 485.855 11 508 42.9996 508C102.256 508 417.222 508 441.463 508C482.463 508 492 496.801 492 457C492 417.199 492.001 108.359 492.001 85C492.001 48.5449 467.5 46.1876 452 50.5449C436.5 54.9021 399 68 371.5 76.5C343.644 85.11 321.744 82.9999 321.744 53.5449C321.744 50 321.744 35.5 321.744 32.3363C321.744 4 353 2.00003 361.037 2.00003C369.075 2.00003 412.802 2 419.5 2C451.802 2 453.302 39.2065 419.5 39.2065C375.037 39.2065 116.909 39.2065 59 39.2065C23 39.2065 2.13184 50.5449 2.13184 85C2.13184 119.455 2.13086 435.149 2.13086 457Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
      {/* XS SVG */}
      <svg
        aria-hidden="true"
        viewBox="0 0 307 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cnb("block sm:hidden", className)}
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
        preserveAspectRatio="none"
      >
        <path
          vectorEffect="non-scaling-stroke"
          d="M2.13086 570C2.13086 598.855 13 602 30.9996 602C90.2556 602 244.722 602 268.963 602C293.204 602 305.501 594 305.5 572C305.499 550 305.501 91.359 305.501 68C305.501 44.641 288.5 37.7659 271.5 42.5449C254.5 47.3238 226 55.9818 213 60C200 64.0182 168.252 74.9999 168.252 45.5449C168.252 42 168.252 27.5 168.252 24.3363C168.252 5 183.5 2.00003 201.545 2.00003C219.589 2.00003 243.309 2 250.007 2C271.014 2 270.014 31.2065 250.007 31.2065C205.544 31.2067 89.9093 31.2064 32 31.2064C8 31.2064 2.13184 39.5448 2.13184 62.9999C2.13184 86.4551 2.13086 548.149 2.13086 570Z"
          stroke="#F83535"
          strokeWidth="3"
        />
      </svg>
    </>
  );
};

export default BannerLineart;
