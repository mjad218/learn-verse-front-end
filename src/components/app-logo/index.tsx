import { SVGProps } from "react";

export const AppLogo = (props: SVGProps<SVGAElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1258"
      height="177"
      viewBox="0 0 1258 177"
      fill="currentColor"
      className={props.className}
    >
      <path d="M0.114175 173V167.527L5.32651 165.963C8.97514 164.747 11.3207 163.183 12.3632 161.272C13.4056 159.187 13.9269 156.321 13.9269 152.672V20.7999C13.9269 17.3251 13.4056 14.632 12.3632 12.7208C11.3207 10.6359 9.06201 8.98533 5.58712 7.76913L0.114175 6.20542V0.732479H64.7471V6.20542L59.7954 7.76913C56.4942 8.98533 54.2355 10.6359 53.0193 12.7208C51.9769 14.8058 51.4556 17.6725 51.4556 21.3212V165.182H89.7663C95.6736 165.182 100.104 163.705 103.058 160.751C106.011 157.797 108.791 153.541 111.397 147.981L121.04 126.35H128.338L125.731 173H0.114175ZM205.49 43.9948C216.436 43.9948 225.818 46.2535 233.637 50.7709C241.455 55.2882 247.449 61.543 251.619 69.5352C255.963 77.3537 258.135 86.3884 258.135 96.6394C258.135 98.898 258.048 101.07 257.874 103.155C257.7 105.066 257.353 106.89 256.832 108.628H178.386C178.56 126.523 181.861 139.38 188.289 147.199C194.892 155.017 204.448 158.927 216.957 158.927C225.645 158.927 232.681 157.537 238.067 154.757C243.453 151.803 248.405 147.72 252.922 142.508L257.092 146.417C251.88 155.973 244.756 163.444 235.722 168.83C226.861 174.042 216.262 176.649 203.926 176.649C191.591 176.649 180.732 174.042 171.349 168.83C161.967 163.618 154.583 156.147 149.197 146.417C143.985 136.514 141.379 124.699 141.379 110.973C141.379 96.7262 144.419 84.651 150.5 74.7476C156.755 64.8441 164.747 57.2863 174.477 52.0739C184.38 46.6879 194.718 43.9948 205.49 43.9948ZM204.187 51.5527C199.149 51.5527 194.718 53.0295 190.896 55.9832C187.247 58.7631 184.293 63.8017 182.035 71.0989C179.95 78.2225 178.734 88.2996 178.386 101.33H225.036C226.948 83.7823 226.253 71.0989 222.951 63.2804C219.65 55.4619 213.396 51.5527 204.187 51.5527ZM307.925 176.649C298.021 176.649 289.595 173.869 282.645 168.309C275.869 162.575 272.481 154.409 272.481 143.811C272.481 135.471 276.477 127.826 284.469 120.877C292.635 113.753 305.405 108.541 322.78 105.24C325.733 104.545 329.122 103.937 332.944 103.415C336.94 102.72 340.849 102.025 344.672 101.33V82.8267C344.672 71.0121 343.195 62.8461 340.241 58.3287C337.287 53.8114 332.596 51.5527 326.168 51.5527H325.386C321.39 51.5527 318.176 52.8558 315.743 55.4619C313.485 57.8944 312.008 61.9774 311.313 67.7109L310.531 71.0989C310.01 78.0487 308.185 83.1742 305.058 86.4753C301.931 89.6027 298.021 91.1664 293.33 91.1664C288.987 91.1664 285.338 89.8633 282.384 87.2572C279.604 84.4772 278.214 80.9155 278.214 76.5719C278.214 69.4484 280.647 63.4542 285.512 58.5893C290.377 53.7245 296.805 50.0759 304.797 47.6434C312.963 45.211 321.737 43.9948 331.12 43.9948C346.583 43.9948 358.397 47.7303 366.563 55.2013C374.729 62.6723 378.812 74.8344 378.812 91.6876V149.805C378.812 157.276 382.374 161.012 389.498 161.012H395.492L398.098 163.878C394.971 167.875 391.496 170.915 387.673 173C383.851 175.259 378.639 176.388 372.036 176.388C364.565 176.388 358.571 174.651 354.054 171.176C349.71 167.527 346.843 162.749 345.453 156.842C339.894 162.749 334.421 167.527 329.035 171.176C323.649 174.824 316.612 176.649 307.925 176.649ZM323.04 159.969C326.515 159.969 329.816 159.187 332.944 157.624C336.071 156.06 339.981 153.454 344.672 149.805V108.106C340.154 108.801 335.55 109.67 330.859 110.713C323.388 112.45 317.307 115.664 312.616 120.355C308.098 125.047 305.84 131.388 305.84 139.38C305.84 146.33 307.403 151.543 310.531 155.017C313.832 158.319 318.002 159.969 323.04 159.969ZM403.243 173V168.048L407.152 166.745C410.627 165.876 412.973 164.4 414.189 162.315C415.579 160.23 416.274 157.45 416.274 153.975V77.6143C416.1 73.792 415.405 70.9252 414.189 69.014C412.973 66.9291 410.627 65.5391 407.152 64.8441L403.243 63.8017V59.1106L445.724 43.9948L448.851 46.8616L451.197 69.7959V71.6202C453.803 66.7553 457.104 62.238 461.1 58.0681C465.096 53.8982 469.44 50.5102 474.131 47.9041C478.822 45.2979 483.513 43.9948 488.204 43.9948C494.806 43.9948 499.758 45.7323 503.059 49.2071C506.36 52.682 508.011 57.1125 508.011 62.4986C508.011 68.4059 506.36 72.9233 503.059 76.0507C499.758 79.0043 495.762 80.4811 491.071 80.4811C484.121 80.4811 478.127 77.3537 473.088 71.0989L472.567 70.5777C470.83 68.4928 468.832 67.3634 466.573 67.1897C464.488 66.8422 462.403 67.8847 460.318 70.3171C458.581 72.0545 456.93 74.1395 455.366 76.5719C453.977 78.8306 452.673 81.5236 451.457 84.651V152.933C451.457 156.234 452.152 159.014 453.542 161.272C454.932 163.357 457.278 164.834 460.579 165.703L468.397 168.048V173H403.243ZM516.499 173V168.048L520.669 167.006C526.403 165.268 529.27 161.012 529.27 154.236V77.3537C529.096 73.7051 528.488 70.9252 527.445 69.014C526.403 66.9291 524.144 65.5391 520.669 64.8441L516.499 63.8017V59.1106L558.719 43.9948L561.847 46.8616L563.671 63.0198C569.926 57.46 576.875 52.9427 584.52 49.4678C592.339 45.8191 599.983 43.9948 607.454 43.9948C618.922 43.9948 627.696 47.1222 633.777 53.377C640.032 59.6318 643.159 69.1878 643.159 82.0448V154.496C643.159 161.272 646.286 165.529 652.541 167.266L655.408 168.048V173H595.466V168.048L599.375 167.006C605.109 165.095 607.976 160.838 607.976 154.236V76.8325C607.976 70.7514 606.673 66.321 604.066 63.5411C601.46 60.7611 597.117 59.3712 591.036 59.3712C582.522 59.3712 573.661 63.1067 564.453 70.5777V154.496C564.453 161.272 567.493 165.529 573.574 167.266L576.18 168.048V173H516.499ZM712.32 174.042L656.548 20.2787C654.289 13.8502 649.859 9.68031 643.257 7.76913L637.523 6.20542V0.732479H709.714V5.9448L702.417 7.76913C698.421 8.81159 696.162 10.6359 695.641 13.2421C695.293 15.8482 695.814 19.1494 697.204 23.1455L734.733 134.429L772.522 23.1455C773.912 19.1494 774.521 15.8482 774.347 13.2421C774.347 10.6359 772.349 8.81159 768.353 7.76913L762.098 5.9448V0.732479H800.93V6.20542L794.414 7.76913C790.766 8.63785 788.159 10.1147 786.596 12.1996C785.206 14.2845 783.903 17.1513 782.687 20.7999L730.824 174.042H712.32ZM849.396 43.9948C860.342 43.9948 869.724 46.2535 877.543 50.7709C885.361 55.2882 891.356 61.543 895.525 69.5352C899.869 77.3537 902.041 86.3884 902.041 96.6394C902.041 98.898 901.954 101.07 901.78 103.155C901.606 105.066 901.259 106.89 900.738 108.628H822.292C822.466 126.523 825.767 139.38 832.196 147.199C838.798 155.017 848.354 158.927 860.863 158.927C869.551 158.927 876.587 157.537 881.973 154.757C887.359 151.803 892.311 147.72 896.828 142.508L900.998 146.417C895.786 155.973 888.662 163.444 879.628 168.83C870.767 174.042 860.168 176.649 847.833 176.649C835.497 176.649 824.638 174.042 815.255 168.83C805.873 163.618 798.489 156.147 793.103 146.417C787.891 136.514 785.285 124.699 785.285 110.973C785.285 96.7262 788.325 84.651 794.406 74.7476C800.661 64.8441 808.653 57.2863 818.383 52.0739C828.286 46.6879 838.624 43.9948 849.396 43.9948ZM848.093 51.5527C843.055 51.5527 838.624 53.0295 834.802 55.9832C831.153 58.7631 828.199 63.8017 825.941 71.0989C823.856 78.2225 822.64 88.2996 822.292 101.33H868.942C870.854 83.7823 870.159 71.0989 866.858 63.2804C863.556 55.4619 857.302 51.5527 848.093 51.5527ZM915.314 173V168.048L919.223 166.745C922.698 165.876 925.044 164.4 926.26 162.315C927.65 160.23 928.345 157.45 928.345 153.975V77.6143C928.171 73.792 927.476 70.9252 926.26 69.014C925.044 66.9291 922.698 65.5391 919.223 64.8441L915.314 63.8017V59.1106L957.794 43.9948L960.922 46.8616L963.267 69.7959V71.6202C965.873 66.7553 969.175 62.238 973.171 58.0681C977.167 53.8982 981.51 50.5102 986.202 47.9041C990.893 45.2979 995.584 43.9948 1000.27 43.9948C1006.88 43.9948 1011.83 45.7323 1015.13 49.2071C1018.43 52.682 1020.08 57.1125 1020.08 62.4986C1020.08 68.4059 1018.43 72.9233 1015.13 76.0507C1011.83 79.0043 1007.83 80.4811 1003.14 80.4811C996.192 80.4811 990.198 77.3537 985.159 71.0989L984.638 70.5777C982.9 68.4928 980.902 67.3634 978.644 67.1897C976.559 66.8422 974.474 67.8847 972.389 70.3171C970.651 72.0545 969.001 74.1395 967.437 76.5719C966.047 78.8306 964.744 81.5236 963.528 84.651V152.933C963.528 156.234 964.223 159.014 965.613 161.272C967.003 163.357 969.348 164.834 972.65 165.703L980.468 168.048V173H915.314ZM1071.11 176.649C1062.77 176.649 1055.21 175.693 1048.44 173.782C1041.84 172.044 1035.49 169.525 1029.41 166.224V135.471H1036.45L1044.27 150.326C1047.57 156.755 1051.3 161.533 1055.47 164.66C1059.82 167.788 1065.29 169.351 1071.89 169.351C1080.06 169.351 1086.57 167.614 1091.44 164.139C1096.3 160.49 1098.74 155.626 1098.74 149.545C1098.74 143.985 1096.91 139.467 1093.26 135.992C1089.62 132.518 1083.1 129.303 1073.72 126.35L1062.25 122.701C1052 119.574 1043.83 114.883 1037.75 108.628C1031.85 102.199 1028.89 94.2069 1028.89 84.651C1028.89 77.18 1030.89 70.404 1034.89 64.3229C1038.88 58.0681 1044.7 53.1164 1052.35 49.4678C1059.99 45.8191 1069.29 43.9948 1080.23 43.9948C1087.36 43.9948 1093.87 44.8635 1099.78 46.601C1105.86 48.1647 1111.77 50.4234 1117.5 53.377L1115.94 81.263H1109.16L1101.08 66.4078C1098.3 60.848 1095.44 57.0256 1092.48 54.9407C1089.7 52.682 1085.36 51.5527 1079.45 51.5527C1073.2 51.5527 1067.64 53.2033 1062.77 56.5044C1058.08 59.6318 1055.74 64.0623 1055.74 69.7959C1055.74 75.1819 1057.73 79.6124 1061.73 83.0873C1065.73 86.3884 1072.15 89.5158 1081.02 92.4695L1092.22 95.8575C1104.9 99.8536 1113.94 105.153 1119.33 111.755C1124.71 118.357 1127.4 126.263 1127.4 135.471C1127.4 147.807 1122.45 157.797 1112.55 165.442C1102.82 172.913 1089.01 176.649 1071.11 176.649ZM1204.44 43.9948C1215.38 43.9948 1224.76 46.2535 1232.58 50.7709C1240.4 55.2882 1246.39 61.543 1250.56 69.5352C1254.91 77.3537 1257.08 86.3884 1257.08 96.6394C1257.08 98.898 1256.99 101.07 1256.82 103.155C1256.65 105.066 1256.3 106.89 1255.78 108.628H1177.33C1177.5 126.523 1180.81 139.38 1187.23 147.199C1193.84 155.017 1203.39 158.927 1215.9 158.927C1224.59 158.927 1231.63 157.537 1237.01 154.757C1242.4 151.803 1247.35 147.72 1251.87 142.508L1256.04 146.417C1250.83 155.973 1243.7 163.444 1234.67 168.83C1225.81 174.042 1215.21 176.649 1202.87 176.649C1190.54 176.649 1179.68 174.042 1170.29 168.83C1160.91 163.618 1153.53 156.147 1148.14 146.417C1142.93 136.514 1140.32 124.699 1140.32 110.973C1140.32 96.7262 1143.36 84.651 1149.45 74.7476C1155.7 64.8441 1163.69 57.2863 1173.42 52.0739C1183.33 46.6879 1193.66 43.9948 1204.44 43.9948ZM1203.13 51.5527C1198.09 51.5527 1193.66 53.0295 1189.84 55.9832C1186.19 58.7631 1183.24 63.8017 1180.98 71.0989C1178.89 78.2225 1177.68 88.2996 1177.33 101.33H1223.98C1225.89 83.7823 1225.2 71.0989 1221.9 63.2804C1218.6 55.4619 1212.34 51.5527 1203.13 51.5527Z" />
    </svg>
  );
};