import { HtmlHTMLAttributes } from "react";
import * as styles from "./Logo.styles";

type StanfordEngLogoProps = HtmlHTMLAttributes<SVGSVGElement> & {
  height?: number | string;
  width?: number | string;
  color?: "default" | "white" | "white-red";
};

const StanfordEngLogo = ({
  height = 67,
  width = 261,
  color = "default",
  ...props
}: StanfordEngLogoProps) => {
  const levers: { [key: string]: string } = {};
  levers.textColor = styles.textColor[color];
  levers.hundredColor = styles.hundredColor[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 261 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[20rem] md:w-[25rem] lg:w-full"
      {...props}
    >
      <g clipPath="url(#clip0_1391_18090)">
        <path
          d="M52.7722 67H52.7183C46.2685 67 41.0217 61.7261 41.0217 55.2431V42.2515L37.5143 55.527C35.7273 62.2845 29.6235 67.0032 22.669 67.0032C16.5906 67.0032 11.328 63.4362 8.83949 58.2772L7.26831 64.2402C6.8398 65.8674 5.37337 67.0032 3.69744 67.0032C2.54207 67.0032 1.47557 66.4768 0.770921 65.5547C0.0662701 64.6359 -0.168613 63.4618 0.126578 62.3387L7.30957 35.0889V4.90376C7.30957 2.19824 9.4997 0 12.1882 0C13.7149 0 15.1242 0.698714 16.0542 1.91429C16.9842 3.12986 17.2953 4.67724 16.9049 6.16081L9.21403 35.3377V49.379L19.9203 8.74829C21.2788 3.59567 25.9288 0 31.2296 0C37.6794 0 42.9262 5.27386 42.9262 11.7569V27.5912L47.4302 10.5509C49.0712 4.33905 54.6862 0 61.0788 0C65.4972 0 69.5759 2.01957 72.2707 5.53867C74.9655 9.05776 75.8606 13.5404 74.7307 17.8316L64.0784 58.2517C62.7199 63.4011 58.0698 67 52.7722 67ZM42.9262 35.0474V55.2431C42.9262 60.6701 47.3191 65.0857 52.7183 65.0857H52.7722C57.2096 65.0857 61.1011 62.0739 62.2374 57.7636L72.8897 17.3434C73.8673 13.6297 73.0928 9.75329 70.763 6.70638C68.4301 3.66267 64.9005 1.91429 61.0788 1.91429C55.5464 1.91429 50.69 5.66948 49.268 11.0422L42.923 35.0442L42.9262 35.0474ZM9.67745 55.09C11.2264 60.8424 16.4637 65.0857 22.669 65.0857C28.8744 65.0857 34.1085 60.9509 35.6733 55.0325L41.0217 34.7953V11.7569C41.0217 6.3299 36.6287 1.91429 31.2296 1.91429C26.7922 1.91429 22.9008 4.9261 21.7644 9.23643L9.67745 55.09ZM7.3064 42.561L1.96438 62.8269C1.82155 63.3692 1.93582 63.9371 2.27544 64.3838C2.61507 64.8305 3.13245 65.0857 3.69427 65.0857C4.50366 65.0857 5.21466 64.537 5.42415 63.7489L7.70951 55.0772C7.44606 53.9478 7.3064 52.7705 7.3064 51.5613V42.5641V42.561ZM12.185 1.91429C10.544 1.91429 9.21086 3.25429 9.21086 4.90376V27.8624L15.0607 5.66948C15.2988 4.76657 15.1115 3.82219 14.5433 3.082C13.9752 2.34181 13.1182 1.91429 12.185 1.91429Z"
          className={levers.hundredColor}
        />
        <path
          d="M90.0621 21.3947C88.6878 21.3947 87.4626 21.1587 86.3865 20.6865C85.3105 20.2143 84.4599 19.5219 83.8377 18.6127C83.2124 17.7034 82.8918 16.6027 82.876 15.3137H86.7547C86.7738 15.8784 86.9166 16.3857 87.1896 16.8419C87.4626 17.2982 87.8371 17.6555 88.3164 17.9203C88.7957 18.1851 89.3702 18.3159 90.0399 18.3159C90.6176 18.3159 91.1191 18.2202 91.5444 18.0288C91.9698 17.8374 92.2999 17.5694 92.5348 17.2248C92.7696 16.8802 92.8871 16.4718 92.8871 15.9965C92.8871 15.4509 92.7569 14.9978 92.4935 14.6341C92.23 14.2704 91.8682 13.9609 91.408 13.7057C90.9477 13.4505 90.4145 13.2207 89.8082 13.0102C89.202 12.8028 88.564 12.5795 87.8942 12.3434C86.3929 11.852 85.247 11.198 84.463 10.3812C83.6759 9.56446 83.2823 8.48289 83.2823 7.13651C83.2823 5.99113 83.5584 5.00846 84.1107 4.1917C84.663 3.37494 85.4279 2.74642 86.4024 2.30932C87.38 1.87223 88.491 1.65527 89.7384 1.65527C90.9858 1.65527 92.1475 1.87861 93.1156 2.32208C94.0837 2.76875 94.8519 3.41004 95.4232 4.24594C95.9945 5.08184 96.2866 6.06451 96.3056 7.19075H92.3983C92.3792 6.7728 92.2586 6.37718 92.0333 6.00389C91.8079 5.63061 91.4937 5.3307 91.0969 5.10418C90.7001 4.87765 90.2272 4.7628 89.6876 4.7628C89.2178 4.74365 88.7862 4.81704 88.3989 4.97975C88.0085 5.14246 87.7006 5.38494 87.4752 5.70399C87.2499 6.02303 87.1356 6.41865 87.1356 6.89084C87.1356 7.36303 87.2499 7.72675 87.4752 8.03623C87.7006 8.3457 88.0148 8.6137 88.4116 8.84022C88.8084 9.06675 89.2813 9.27732 89.8241 9.46875C90.3669 9.66018 90.9541 9.8548 91.5889 10.0558C92.5284 10.3844 93.3981 10.7705 94.1948 11.2139C94.9915 11.6606 95.6232 12.2381 96.0929 12.9464C96.5627 13.6547 96.7976 14.5927 96.7976 15.754C96.7976 16.7526 96.5341 17.681 96.0104 18.5361C95.4867 19.3911 94.7312 20.0803 93.7441 20.6099C92.757 21.1363 91.5318 21.4011 90.0685 21.4011L90.0621 21.3947Z"
          className={levers.textColor}
        />
        <path
          d="M104.146 21.0664V4.94813H98.585V1.97461H113.319V4.94813H107.784V21.0664H104.149H104.146Z"
          className={levers.textColor}
        />
        <path
          d="M126.774 21.0664H130.653L123.733 1.97461H119.582L112.637 21.0664H116.49L117.991 16.7306H125.279L126.771 21.0664H126.774ZM118.985 13.8655L121.648 6.17328L124.295 13.8655H118.985Z"
          className={levers.textColor}
        />
        <path
          d="M133.15 21.0664V1.97461H136.813L145.552 15.1481V1.97461H149.215V21.0664H145.552L136.813 7.92166V21.0664H133.15Z"
          className={levers.textColor}
        />
        <path
          d="M152.932 21.0664V1.97461H165.304V4.94813H156.595V10.0497H163.568V12.9403H156.595V21.0664H152.932Z"
          className={levers.textColor}
        />
        <path
          d="M176.779 21.395C174.934 21.395 173.306 20.9771 171.894 20.1412C170.484 19.3053 169.38 18.1471 168.583 16.6635C167.786 15.1832 167.39 13.4667 167.39 11.5237C167.39 9.57749 167.786 7.8642 168.583 6.38382C169.38 4.90344 170.481 3.74211 171.894 2.9062C173.306 2.0703 174.931 1.65234 176.779 1.65234C178.626 1.65234 180.28 2.0703 181.689 2.9062C183.098 3.74211 184.2 4.90344 184.987 6.38382C185.774 7.86739 186.168 9.58068 186.168 11.5237C186.168 13.4667 185.774 15.1832 184.987 16.6635C184.2 18.1471 183.101 19.3053 181.689 20.1412C180.276 20.9771 178.642 21.395 176.779 21.395ZM176.779 18.0929C177.937 18.0929 178.937 17.8249 179.778 17.2889C180.619 16.7529 181.276 15.9935 181.746 15.0109C182.216 14.0282 182.451 12.8669 182.451 11.5205C182.451 10.1741 182.216 8.98725 181.746 8.01734C181.276 7.04425 180.619 6.29449 179.778 5.76806C178.937 5.24163 177.937 4.97682 176.779 4.97682C175.62 4.97682 174.642 5.24163 173.795 5.76806C172.944 6.29449 172.284 7.04425 171.814 8.01734C171.345 8.99044 171.11 10.1582 171.11 11.5205C171.11 12.8828 171.345 14.0282 171.814 15.0109C172.284 15.9935 172.944 16.7529 173.795 17.2889C174.646 17.8249 175.639 18.0929 176.779 18.0929Z"
          className={levers.textColor}
        />
        <path
          d="M203.318 21.0662L199.423 13.1346C199.702 13.0357 199.966 12.9209 200.21 12.7901C201.213 12.2541 201.95 11.5458 202.423 10.662C202.892 9.78144 203.127 8.83068 203.127 7.81292C203.127 6.74092 202.883 5.76463 202.394 4.88087C201.905 4.0003 201.162 3.29521 200.169 2.76878C199.175 2.24235 197.909 1.97754 196.37 1.97754H189.288V21.0693H192.951V13.5973H195.662L199.137 21.0693H203.314L203.318 21.0662ZM192.951 5.05635H196.154C197.274 5.05635 198.093 5.31478 198.61 5.83483C199.128 6.35487 199.385 7.05678 199.385 7.94692C199.385 8.83706 199.121 9.55492 198.598 10.1005C198.074 10.6461 197.258 10.9173 196.157 10.9173H192.954V5.05316L192.951 5.05635Z"
          className={levers.textColor}
        />
        <path
          d="M206.409 21.0664V1.97461H212.757C214.963 1.97461 216.785 2.37023 218.223 3.16147C219.661 3.9527 220.728 5.06299 221.426 6.48913C222.121 7.91528 222.47 9.59347 222.47 11.5205C222.47 13.4476 222.121 15.1258 221.426 16.5519C220.731 17.978 219.667 19.0883 218.239 19.8796C216.811 20.6708 214.982 21.0664 212.757 21.0664H206.409ZM210.072 17.9015H212.567C214.122 17.9015 215.347 17.6462 216.243 17.1389C217.138 16.6317 217.776 15.8978 218.157 14.9439C218.537 13.9899 218.728 12.8478 218.728 11.5205C218.728 10.1933 218.537 9.02556 218.157 8.07161C217.776 7.11766 217.138 6.38385 216.243 5.87656C215.347 5.36928 214.122 5.11404 212.567 5.11404H210.072V17.9047V17.9015Z"
          className={levers.textColor}
        />
        <path
          d="M83.5234 45.2246V26.1328H96.004V29.1063H87.1863V34.0962H95.1914V36.9613H87.1863V42.2511H96.004V45.2246H83.5234Z"
          className={levers.textColor}
        />
        <path
          d="M99.3428 45.2246V26.1328H103.006L111.744 39.3063V26.1328H115.407V45.2246H111.744L103.006 32.0799V45.2246H99.3428Z"
          className={levers.textColor}
        />
        <path
          d="M127.453 45.5535C125.644 45.5535 124.069 45.1483 122.733 44.3411C121.394 43.5339 120.356 42.3949 119.613 40.9305C118.87 39.466 118.502 37.7623 118.502 35.8161C118.502 33.87 118.883 32.1216 119.641 30.622C120.4 29.1225 121.495 27.9452 122.923 27.0902C124.352 26.2351 126.063 25.8076 128.053 25.8076C130.278 25.8076 132.128 26.3436 133.601 27.4156C135.074 28.4876 136.029 29.9808 136.464 31.8887H132.366C132.093 31.0528 131.592 30.3923 130.859 29.9106C130.126 29.4288 129.18 29.1863 128.024 29.1863C126.793 29.1863 125.745 29.4575 124.876 30.0031C124.006 30.5487 123.346 31.3112 122.895 32.2939C122.441 33.2765 122.216 34.4474 122.216 35.813C122.216 37.1785 122.441 38.3685 122.895 39.332C123.346 40.2956 123.993 41.0294 124.834 41.5271C125.675 42.028 126.666 42.2769 127.805 42.2769C129.468 42.2769 130.732 41.827 131.589 40.9273C132.449 40.0276 132.96 38.8599 133.122 37.4241H128.456V34.6708H136.813V45.2249H133.42L133.15 42.7969C132.754 43.3967 132.287 43.9008 131.754 44.3124C131.221 44.7208 130.602 45.0302 129.894 45.2408C129.189 45.4482 128.373 45.5535 127.453 45.5535Z"
          className={levers.textColor}
        />
        <path
          d="M140.232 45.2246V26.1328H143.895V45.2246H140.232Z"
          className={levers.textColor}
        />
        <path
          d="M147.611 45.2246V26.1328H151.274L160.013 39.3063V26.1328H163.675V45.2246H160.013L151.274 32.0799V45.2246H147.611Z"
          className={levers.textColor}
        />
        <path
          d="M167.393 45.2246V26.1328H179.873V29.1063H171.055V34.0962H179.061V36.9613H171.055V42.2511H179.873V45.2246H167.393Z"
          className={levers.textColor}
        />
        <path
          d="M183.209 45.2246V26.1328H195.69V29.1063H186.872V34.0962H194.877V36.9613H186.872V42.2511H195.69V45.2246H183.209Z"
          className={levers.textColor}
        />
        <path
          d="M213.055 45.2246L209.16 37.2931C209.44 37.1942 209.703 37.0793 209.947 36.9485C210.95 36.4125 211.687 35.7042 212.16 34.8205C212.63 33.9399 212.864 32.9891 212.864 31.9714C212.864 30.8994 212.62 29.9231 212.131 29.0393C211.642 28.1588 210.9 27.4537 209.906 26.924C208.913 26.3976 207.646 26.1328 206.107 26.1328H199.025V45.2246H202.688V37.7525H205.399L208.875 45.2246H213.052H213.055ZM202.691 29.218H205.894C207.015 29.218 207.834 29.4764 208.351 29.9965C208.868 30.5165 209.125 31.2184 209.125 32.1086C209.125 32.9987 208.862 33.7166 208.338 34.2621C207.814 34.8077 206.999 35.0789 205.897 35.0789H202.695V29.2148L202.691 29.218Z"
          className={levers.textColor}
        />
        <path
          d="M216.15 45.2246V26.1328H219.813V45.2246H216.15Z"
          className={levers.textColor}
        />
        <path
          d="M223.53 45.2246V26.1328H227.193L235.931 39.3063V26.1328H239.594V45.2246H235.931L227.193 32.0799V45.2246H223.53Z"
          className={levers.textColor}
        />
        <path
          d="M251.639 45.5535C249.83 45.5535 248.256 45.1483 246.92 44.3411C245.58 43.5339 244.542 42.3949 243.799 40.9305C243.057 39.466 242.688 37.7623 242.688 35.8161C242.688 33.854 243.069 32.1216 243.828 30.622C244.587 29.1225 245.682 27.9452 247.11 27.0902C248.538 26.2351 250.249 25.8076 252.239 25.8076C254.464 25.8076 256.315 26.3436 257.788 27.4156C259.26 28.4876 260.216 29.9808 260.651 31.8887H256.553C256.28 31.0528 255.778 30.3923 255.045 29.9106C254.312 29.4288 253.366 29.1863 252.211 29.1863C250.979 29.1863 249.932 29.4575 249.062 30.0031C248.192 30.5487 247.532 31.3112 247.081 32.2939C246.628 33.2765 246.402 34.4474 246.402 35.813C246.402 37.1785 246.628 38.3685 247.081 39.332C247.532 40.2956 248.18 41.0294 249.021 41.5271C249.862 42.028 250.852 42.2769 251.992 42.2769C253.655 42.2769 254.918 41.827 255.775 40.9273C256.635 40.0276 257.147 38.8599 257.308 37.4241H252.642V34.6708H261V45.2249H257.607L257.337 42.7969C256.94 43.3967 256.474 43.9008 255.94 44.3124C255.407 44.7208 254.788 45.0302 254.08 45.2408C253.376 45.4482 252.56 45.5535 251.639 45.5535Z"
          className={levers.textColor}
        />
        <path
          d="M85.7929 64.9638V53.0218L83.5234 53.6344V52.6964L86.2119 51.5479H87.1451V64.9638H85.7897H85.7929Z"
          className={levers.textColor}
        />
        <path
          d="M94.4296 65.1943C93.617 65.1943 92.9155 65.0347 92.3315 64.7157C91.7475 64.3966 91.2809 63.9659 90.9286 63.4204C90.5794 62.878 90.3604 62.275 90.2715 61.6082H91.5126C91.6522 62.3739 91.9792 62.9673 92.4934 63.3821C93.0076 63.7968 93.6583 64.0042 94.4486 64.0042C95.1596 64.0042 95.7976 63.7873 96.3563 63.3534C96.9149 62.9195 97.3625 62.2526 97.7021 61.3497C98.0385 60.45 98.2322 59.3142 98.2829 57.9487V57.8243C98.2829 57.7796 98.2829 57.7381 98.2829 57.6998C98.0925 58.121 97.81 58.5166 97.4355 58.8867C97.0609 59.2568 96.6134 59.5535 96.0896 59.7768C95.5691 60.0002 94.9692 60.1118 94.2963 60.1118C93.5345 60.1118 92.8171 59.9332 92.1506 59.5758C91.484 59.2185 90.9412 58.7144 90.5191 58.0604C90.1001 57.4095 89.8906 56.6534 89.8906 55.7983C89.8906 55.0581 90.0715 54.3435 90.4334 53.6607C90.7952 52.9779 91.3158 52.4132 91.9982 51.9729C92.6807 51.5326 93.4964 51.3125 94.4486 51.3125C95.4009 51.3125 96.2039 51.4912 96.8514 51.8485C97.4989 52.2058 98.0195 52.6908 98.4163 53.3065C98.8098 53.9191 99.0955 54.6083 99.2733 55.3676C99.451 56.1269 99.5399 56.9054 99.5399 57.6966C99.5399 59.1675 99.3367 60.4628 98.9305 61.5858C98.5242 62.7089 97.9433 63.5926 97.1847 64.2307C96.4293 64.8688 95.5088 65.1879 94.4296 65.1879V65.1943ZM94.5438 58.9282C95.166 58.9282 95.7278 58.7814 96.2325 58.4879C96.734 58.1944 97.1307 57.8051 97.4228 57.3202C97.7148 56.8352 97.8608 56.2992 97.8608 55.709C97.8608 55.0836 97.7148 54.5317 97.4228 54.0499C97.1307 53.5682 96.7372 53.1949 96.242 52.9205C95.7468 52.6461 95.1818 52.5089 94.5438 52.5089C93.9059 52.5089 93.344 52.6493 92.8457 52.9301C92.3506 53.2108 91.9633 53.5905 91.684 54.0691C91.4047 54.5476 91.265 55.0996 91.265 55.7281C91.265 56.3566 91.4078 56.9309 91.6935 57.4159C91.9792 57.9008 92.3696 58.2741 92.8648 58.5357C93.3599 58.7974 93.9186 58.9282 94.5438 58.9282Z"
          className={levers.textColor}
        />
        <path
          d="M101.581 64.9643V64.0263C102.508 63.2861 103.387 62.5395 104.212 61.793C105.038 61.0464 105.774 60.303 106.415 59.5596C107.056 58.8194 107.561 58.092 107.932 57.3837C108.301 56.6754 108.485 55.9799 108.485 55.3035C108.485 54.8186 108.399 54.3591 108.228 53.922C108.056 53.4881 107.78 53.1372 107.399 52.8692C107.018 52.6012 106.491 52.4672 105.815 52.4672C105.18 52.4672 104.654 52.6076 104.231 52.8883C103.812 53.1691 103.501 53.536 103.298 53.9891C103.095 54.4421 102.994 54.9366 102.994 55.4758H101.698C101.698 54.6208 101.876 53.8806 102.232 53.2616C102.587 52.6427 103.073 52.1641 103.692 51.8227C104.308 51.4845 105.025 51.3154 105.838 51.3154C106.587 51.3154 107.26 51.4558 107.859 51.7366C108.456 52.0173 108.932 52.4512 109.291 53.0415C109.646 53.6285 109.824 54.3783 109.824 55.2844C109.824 55.9225 109.688 56.567 109.415 57.2114C109.142 57.8559 108.783 58.4844 108.339 59.1002C107.894 59.7128 107.399 60.3062 106.85 60.8741C106.304 61.442 105.745 61.978 105.18 62.4853C104.615 62.9894 104.089 63.4392 103.606 63.838H110.319V64.9675H101.587L101.581 64.9643Z"
          className={levers.textColor}
        />
        <path
          d="M117.197 65.1938C116.308 65.1938 115.531 65.0311 114.871 64.7056C114.21 64.3802 113.687 63.9335 113.296 63.3624C112.909 62.7945 112.658 62.1596 112.544 61.4545H113.861C114.026 62.2203 114.401 62.8456 114.985 63.3242C115.569 63.8027 116.312 64.042 117.216 64.042C117.902 64.042 118.486 63.8825 118.971 63.5634C119.454 63.2444 119.825 62.8137 120.086 62.2681C120.346 61.7257 120.476 61.1259 120.476 60.4751C120.476 59.7859 120.343 59.1702 120.076 58.6342C119.809 58.0982 119.438 57.6802 118.962 57.3803C118.486 57.0804 117.93 56.9304 117.292 56.9304C116.518 56.9304 115.855 57.0995 115.309 57.4377C114.763 57.7759 114.35 58.2194 114.071 58.7714H112.792L113.915 51.5449H120.838V52.7126H114.947L114.166 57.141C114.483 56.7454 114.918 56.42 115.47 56.1647C116.023 55.9095 116.661 55.7819 117.388 55.7819C118.022 55.7819 118.606 55.8967 119.143 56.1264C119.676 56.3562 120.136 56.6816 120.527 57.1027C120.914 57.5239 121.216 58.0152 121.431 58.5799C121.647 59.1446 121.755 59.7668 121.755 60.4591C121.755 61.0844 121.657 61.6843 121.46 62.2522C121.263 62.8201 120.971 63.3242 120.584 63.7676C120.197 64.2079 119.721 64.5557 119.152 64.8109C118.587 65.0662 117.934 65.1938 117.197 65.1938Z"
          className={levers.textColor}
        />
        <path
          d="M123.945 59.9044V58.7559H131.363V59.9044H123.945Z"
          className={levers.textColor}
        />
        <path
          d="M133.56 64.9643V64.0263C134.486 63.2861 135.366 62.5395 136.191 61.793C137.016 61.0464 137.753 60.303 138.394 59.5596C139.035 58.8194 139.54 58.092 139.911 57.3837C140.279 56.6754 140.463 55.9799 140.463 55.3035C140.463 54.8186 140.378 54.3591 140.206 53.922C140.035 53.4881 139.759 53.1372 139.378 52.8692C138.997 52.6012 138.47 52.4672 137.794 52.4672C137.159 52.4672 136.632 52.6076 136.21 52.8883C135.791 53.1691 135.48 53.536 135.277 53.9891C135.074 54.4421 134.972 54.9366 134.972 55.4758H133.677C133.677 54.6208 133.855 53.8806 134.21 53.2616C134.566 52.6427 135.051 52.1641 135.67 51.8227C136.286 51.4845 137.003 51.3154 137.816 51.3154C138.565 51.3154 139.238 51.4558 139.838 51.7366C140.435 52.0173 140.911 52.4512 141.269 53.0415C141.625 53.6285 141.803 54.3783 141.803 55.2844C141.803 55.9225 141.666 56.567 141.393 57.2114C141.12 57.8559 140.762 58.4844 140.317 59.1002C139.873 59.7128 139.378 60.3062 138.829 60.8741C138.283 61.442 137.724 61.978 137.159 62.4853C136.594 62.9894 136.067 63.4392 135.585 63.838H142.298V64.9675H133.566L133.56 64.9643Z"
          className={levers.textColor}
        />
        <path
          d="M149.538 65.1935C148.37 65.1935 147.37 64.9031 146.545 64.3225C145.72 63.7418 145.082 62.9282 144.637 61.8881C144.193 60.848 143.971 59.6357 143.971 58.2574C143.971 56.8791 144.193 55.6667 144.637 54.6266C145.082 53.5865 145.716 52.773 146.545 52.1923C147.37 51.6116 148.364 51.3213 149.519 51.3213C150.674 51.3213 151.668 51.6116 152.493 52.1923C153.318 52.773 153.953 53.5865 154.401 54.6266C154.845 55.6667 155.067 56.8791 155.067 58.2574C155.067 59.6357 154.845 60.848 154.401 61.8881C153.956 62.9314 153.322 63.7418 152.493 64.3225C151.668 64.9031 150.681 65.1935 149.538 65.1935ZM149.519 64.0258C150.319 64.0258 151.036 63.7961 151.665 63.3366C152.293 62.8772 152.788 62.2168 153.153 61.3521C153.515 60.4907 153.696 59.457 153.696 58.2574C153.696 57.0578 153.515 56.0272 153.153 55.1722C152.792 54.3171 152.296 53.6567 151.665 53.1973C151.036 52.7379 150.319 52.5081 149.519 52.5081C148.719 52.5081 148.018 52.7379 147.383 53.1973C146.748 53.6567 146.247 54.3171 145.885 55.1722C145.523 56.0272 145.342 57.0578 145.342 58.2574C145.342 59.457 145.523 60.4907 145.885 61.3521C146.247 62.2136 146.745 62.8772 147.383 63.3366C148.018 63.7961 148.729 64.0258 149.519 64.0258Z"
          className={levers.textColor}
        />
        <path
          d="M157.09 64.9643V64.0263C158.017 63.2861 158.896 62.5395 159.721 61.793C160.546 61.0464 161.283 60.303 161.924 59.5596C162.565 58.8194 163.07 58.092 163.441 57.3837C163.809 56.6754 163.994 55.9799 163.994 55.3035C163.994 54.8186 163.908 54.3591 163.736 53.922C163.565 53.4881 163.289 53.1372 162.908 52.8692C162.527 52.6012 162 52.4672 161.324 52.4672C160.689 52.4672 160.162 52.6076 159.74 52.8883C159.321 53.1691 159.01 53.536 158.807 53.9891C158.604 54.4421 158.502 54.9366 158.502 55.4758H157.207C157.207 54.6208 157.385 53.8806 157.741 53.2616C158.096 52.6427 158.582 52.1641 159.201 51.8227C159.816 51.4845 160.534 51.3154 161.346 51.3154C162.095 51.3154 162.768 51.4558 163.368 51.7366C163.965 52.0173 164.441 52.4512 164.8 53.0415C165.155 53.6285 165.333 54.3783 165.333 55.2844C165.333 55.9225 165.197 56.567 164.924 57.2114C164.651 57.8559 164.292 58.4844 163.848 59.1002C163.403 59.7128 162.908 60.3062 162.359 60.8741C161.813 61.442 161.254 61.978 160.689 62.4853C160.124 62.9894 159.597 63.4392 159.115 63.838H165.828V64.9675H157.096L157.09 64.9643Z"
          className={levers.textColor}
        />
        <path
          d="M172.706 65.1938C171.817 65.1938 171.04 65.0311 170.379 64.7056C169.719 64.3802 169.195 63.9335 168.805 63.3624C168.418 62.7945 168.167 62.1596 168.053 61.4545H169.37C169.535 62.2203 169.91 62.8456 170.494 63.3242C171.078 63.8027 171.82 64.042 172.725 64.042C173.411 64.042 173.995 63.8825 174.48 63.5634C174.963 63.2444 175.334 62.8137 175.594 62.2681C175.855 61.7257 175.985 61.1259 175.985 60.4751C175.985 59.7859 175.851 59.1702 175.585 58.6342C175.318 58.0982 174.947 57.6802 174.471 57.3803C173.995 57.0804 173.439 56.9304 172.801 56.9304C172.027 56.9304 171.363 57.0995 170.817 57.4377C170.271 57.7759 169.859 58.2194 169.579 58.7714H168.3L169.424 51.5449H176.347V52.7126H170.456L169.675 57.141C169.992 56.7454 170.427 56.42 170.979 56.1647C171.532 55.9095 172.17 55.7819 172.896 55.7819C173.531 55.7819 174.115 55.8967 174.652 56.1264C175.185 56.3562 175.645 56.6816 176.036 57.1027C176.423 57.5239 176.724 58.0152 176.94 58.5799C177.156 59.1446 177.264 59.7668 177.264 60.4591C177.264 61.0844 177.166 61.6843 176.969 62.2522C176.772 62.8201 176.48 63.3242 176.093 63.7676C175.705 64.2111 175.229 64.5557 174.661 64.8109C174.096 65.0662 173.442 65.1938 172.706 65.1938Z"
          className={levers.textColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_1391_18090">
          <rect width="261" height="67" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StanfordEngLogo;
