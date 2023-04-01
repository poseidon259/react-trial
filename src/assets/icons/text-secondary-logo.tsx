import { IIconProps } from ".";

export const textSecondaryLogo = (props: IIconProps) => {
  const { w = 146, h = 28 } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 95 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0352 22.3704C22.1324 21.4348 22.2512 20.3535 22.3918 19.1264C22.5337 17.8994 22.6871 16.6148 22.8481 15.2919C23.0092 13.969 23.1741 12.6078 23.339 11.2312C23.5038 9.85464 23.6802 8.60077 23.8451 7.39674C23.2648 8.50619 22.6833 9.61946 22.1004 10.7366C21.5099 11.8562 20.9501 12.9222 20.4209 13.9345C19.8918 14.9468 19.4124 15.8518 18.9676 16.657C18.5228 17.4622 18.2008 18.1294 17.9093 18.6279C17.6601 18.9654 17.407 19.2875 17.1424 19.5904C16.9065 19.8757 16.6502 20.1435 16.3755 20.3918C16.157 20.601 15.9166 20.7861 15.6585 20.944C15.4446 21.0667 15.2034 21.134 14.9568 21.1395C14.6971 21.152 14.4399 21.0837 14.2206 20.944C14.1328 20.8746 14.0633 20.785 14.0178 20.6828C13.9724 20.5806 13.9525 20.4689 13.9598 20.3573V20.2116C13.9711 20.1551 13.9878 20.0999 14.0097 20.0467C13.9458 18.5129 13.8972 16.9587 13.864 15.384C13.8307 13.8093 13.8141 12.2601 13.8141 10.7366V9.66675C13.8141 9.30631 13.8141 8.95354 13.8141 8.6046C13.3821 9.58623 12.9105 10.6088 12.3992 11.6722C11.8879 12.7356 11.3549 13.7786 10.8002 14.8011C10.2455 15.8236 9.67415 16.8129 9.0862 17.769C8.49952 18.7123 7.91285 19.5789 7.32617 20.3611C6.79553 21.0675 6.21231 21.7327 5.58149 22.3512C5.11397 22.832 4.56143 23.222 3.95183 23.5015C3.5662 23.6601 3.16876 23.7883 2.76314 23.885C2.47077 23.9662 2.16927 24.01 1.86588 24.0154C1.5529 24.0383 1.24154 23.953 0.983946 23.7738C0.897174 23.7061 0.827141 23.6194 0.779266 23.5203C0.731391 23.4213 0.70696 23.3125 0.707864 23.2025C0.723633 22.8898 0.843793 22.5914 1.04913 22.355C1.30203 22.0435 1.63463 21.8063 2.01159 21.6687C2.64679 21.3705 3.2045 20.9295 3.64124 20.3803C4.31268 19.6091 4.929 18.7916 5.48562 17.9339C6.11448 16.9778 6.75356 15.9131 7.40286 14.7398C8.05217 13.5664 8.67207 12.3765 9.26258 11.1699C9.87354 9.96073 10.4436 8.78099 10.9728 7.63065C11.5058 6.4803 11.9812 5.41815 12.3915 4.48638C12.8018 3.5546 13.1584 2.77236 13.4038 2.15501L13.91 0.977824C14.0363 0.671812 14.2583 0.414887 14.5427 0.245437C14.7953 0.0977201 15.0821 0.0184262 15.3747 0.0153723C15.5275 -0.00127709 15.682 0.0201196 15.8245 0.0776557C15.967 0.135192 16.0931 0.227081 16.1915 0.345138C16.3763 0.689041 16.455 1.08001 16.4177 1.46864C16.5059 2.15501 16.5788 2.7992 16.6325 3.40888C16.6861 4.01856 16.7513 4.62441 16.7935 5.26861C16.8357 5.9128 16.8664 6.58383 16.874 7.32005C16.8817 8.05627 16.9085 8.89219 16.9085 9.84697C16.9085 10.5346 16.8919 11.29 16.8587 12.1132C16.8255 12.9363 16.8152 13.8604 16.828 14.8855C18.1317 12.5158 19.2821 10.4285 20.279 8.62377C21.276 6.81901 22.1694 5.29801 22.9593 4.06075C23.5277 3.096 24.1592 2.16987 24.8497 1.28842C25.3597 0.659562 25.7662 0.345138 26.0729 0.345138H26.2838C26.3168 0.33956 26.3505 0.33956 26.3835 0.345138C26.6443 0.345138 26.8475 0.506187 27.0009 0.832118C27.1689 1.23478 27.2474 1.66915 27.2309 2.10516C27.1849 2.63688 27.1197 3.30024 27.0354 4.09526C26.9472 4.88516 26.8437 5.76325 26.7248 6.71804C26.6059 7.67282 26.4947 8.66212 26.3644 9.7166C26.234 10.7711 26.1036 11.8217 25.9809 12.8647C25.8582 13.9077 25.7278 14.9047 25.5975 15.8824C25.4671 16.8602 25.3981 17.746 25.3214 18.5397C25.3012 18.6846 25.291 18.8306 25.2907 18.9769V19.4178C25.2907 19.7016 25.2907 19.9892 25.2907 20.2844C25.2907 20.5797 25.2907 20.8481 25.2907 21.1318C25.291 21.4635 25.2744 21.795 25.2409 22.125C25.2135 22.4403 25.1194 22.7461 24.9648 23.0222C24.8067 23.2985 24.5688 23.5204 24.2822 23.6588C23.8743 23.8515 23.4253 23.941 22.9747 23.9195C22.839 23.9236 22.7044 23.8942 22.5827 23.8341C22.461 23.7739 22.3559 23.6847 22.2768 23.5744C22.0691 23.2094 21.9844 22.7873 22.0352 22.3704ZM35.4176 14.6247C34.8984 14.6249 34.3878 14.7569 33.9336 15.0082C33.4534 15.2718 33.0237 15.6184 32.6644 16.032C32.2937 16.4584 31.9957 16.9429 31.7825 17.4661C31.5693 17.9669 31.4585 18.5054 31.4565 19.0497C31.4565 19.2683 31.4565 19.4945 31.4911 19.7361C31.5199 19.9565 31.5861 20.1705 31.6866 20.3688C31.7815 20.5622 31.9208 20.7304 32.0931 20.8596C32.311 20.9993 32.5669 21.0676 32.8255 21.0552C33.1269 21.0338 33.4158 20.9259 33.6575 20.7446C34.0132 20.5036 34.3469 20.2316 34.6545 19.9316C35.009 19.5847 35.3456 19.22 35.663 18.8388C35.9889 18.4554 36.2841 18.0451 36.5449 17.6616C36.7744 17.3315 36.9868 16.9897 37.1814 16.6378C37.3083 16.4337 37.3906 16.205 37.423 15.9668C37.4248 15.7627 37.3495 15.5655 37.2121 15.4146C37.0676 15.2361 36.8906 15.0865 36.6906 14.9737C36.4826 14.8538 36.2576 14.7659 36.0234 14.7129C35.8264 14.6562 35.6226 14.6265 35.4176 14.6247ZM46.7178 18.8427C46.5222 19.0305 46.2615 19.2836 45.9509 19.6096C45.6403 19.9355 45.2492 20.2883 44.8235 20.6717C44.3979 21.0552 43.9684 21.4386 43.4891 21.8221C43.0255 22.1978 42.5403 22.5461 42.0359 22.865C41.5767 23.1635 41.0916 23.4202 40.5864 23.6319C40.1605 23.8243 39.7001 23.9286 39.2329 23.9387C38.8905 23.9489 38.552 23.8639 38.2551 23.6933C37.9846 23.5327 37.7508 23.3171 37.5687 23.0606C37.3945 22.789 37.265 22.4913 37.1853 22.1787C37.0997 21.8428 37.0559 21.4976 37.0549 21.151C37.0559 20.9277 37.0726 20.7048 37.1047 20.4838C37.1355 20.2661 37.1908 20.0526 37.2696 19.8473C36.9322 20.3049 36.5487 20.7778 36.1193 21.2661C35.6958 21.7452 35.2313 22.1866 34.7312 22.5851C34.2614 22.9677 33.7462 23.2909 33.1974 23.5476C32.6911 23.7995 32.1333 23.9308 31.5677 23.931C31.2297 23.9223 30.895 23.8628 30.5746 23.7546C30.1773 23.6419 29.8051 23.4545 29.478 23.2025C29.1301 22.9256 28.8419 22.5813 28.6305 22.1902C28.387 21.7167 28.2695 21.1884 28.2893 20.6564C28.3003 20.1181 28.3658 19.5824 28.4848 19.0574C28.8083 17.6644 29.377 16.34 30.1643 15.1462C30.5948 14.4983 31.1107 13.9115 31.6981 13.4015C32.2931 12.8751 32.9706 12.4502 33.7035 12.1438C34.4968 11.8098 35.3507 11.644 36.2113 11.6568C36.6376 11.6478 37.0624 11.7087 37.469 11.8371C37.7848 11.9354 38.0904 12.0638 38.3816 12.2205C38.6512 12.3828 38.9019 12.5744 39.1293 12.7919C39.3172 12.6922 39.5128 12.6001 39.7007 12.5119C39.8682 12.4469 40.0398 12.3931 40.2145 12.3509C40.3652 12.2928 40.5247 12.2604 40.6861 12.255C41.0544 12.238 41.4156 12.3598 41.6984 12.5963C41.8154 12.6875 41.9105 12.8037 41.9768 12.9364C42.0432 13.0691 42.079 13.2149 42.0819 13.3632C42.089 13.4218 42.089 13.481 42.0819 13.5396C42.0079 13.7994 41.9209 14.0554 41.8211 14.3065C41.7099 14.6247 41.5872 14.9775 41.4377 15.3686C41.2881 15.7597 41.1501 16.1355 40.9967 16.5726C40.8433 17.0098 40.7245 17.3932 40.6133 17.7958C40.5021 18.1985 40.3947 18.5627 40.3219 18.9462C40.2519 19.2404 40.2134 19.5411 40.2068 19.8435C40.1972 20.1232 40.2523 20.4014 40.3679 20.6564C40.42 20.7568 40.5005 20.8398 40.5993 20.895C40.6982 20.9502 40.811 20.9752 40.9239 20.967C41.1222 20.9574 41.3165 20.9078 41.4952 20.8212C41.7497 20.6979 41.9945 20.5557 42.2276 20.3956C42.4883 20.2231 42.7568 20.0122 43.0252 19.809C43.2936 19.6057 43.5812 19.3527 43.8419 19.1264C44.4516 18.5819 45.0958 17.9761 45.7822 17.2667C45.9208 17.1391 46.1 17.0644 46.2883 17.0558C46.3987 17.0575 46.5066 17.0886 46.6009 17.1459C46.6953 17.2032 46.7727 17.2846 46.8251 17.3817C46.9769 17.584 47.0577 17.8306 47.0552 18.0834C47.0553 18.2234 47.0267 18.362 46.9714 18.4905C46.916 18.6191 46.8349 18.735 46.7331 18.8312L46.7178 18.8427ZM49.6205 14.4752C49.2166 15.2574 48.8331 16.0243 48.4701 16.7759C48.1097 17.5159 47.7761 18.2023 47.4578 18.8312C47.3148 19.1287 47.1868 19.4333 47.0744 19.7438C46.9657 20.0308 46.9061 20.3342 46.898 20.641C46.8902 20.7684 46.9238 20.8948 46.9938 21.0015C47.0412 21.0476 47.0978 21.0831 47.16 21.1056C47.2221 21.1281 47.2884 21.137 47.3543 21.1318C47.651 21.1167 47.9428 21.0506 48.217 20.9363C48.6016 20.7777 48.9767 20.5971 49.3406 20.3956C49.724 20.1694 50.1688 19.9125 50.6136 19.6287C51.0584 19.345 51.4955 19.0382 51.9173 18.7353C52.3391 18.4324 52.7647 18.1103 53.1559 17.8035C53.547 17.4968 53.8959 17.2015 54.2027 16.9408C54.3429 16.8325 54.5128 16.7697 54.6896 16.7605C54.7802 16.76 54.8694 16.7821 54.9491 16.825C55.0288 16.8679 55.0965 16.9301 55.146 17.0059C55.2713 17.1868 55.3345 17.4034 55.3262 17.6233C55.3224 17.889 55.2609 18.1506 55.146 18.3902C54.9918 18.6934 54.7685 18.9561 54.4941 19.1571C53.7885 19.7987 53.0715 20.4071 52.3429 20.9823C51.6583 21.5376 50.9399 22.0498 50.1918 22.5161C49.5253 22.9308 48.8203 23.28 48.0867 23.5591C47.4416 23.8073 46.7571 23.9372 46.0659 23.9425C45.6937 23.9538 45.3228 23.8939 44.9731 23.7661C44.7011 23.6715 44.4554 23.5138 44.256 23.306C44.0802 23.1032 43.9495 22.8653 43.8726 22.6081C43.7945 22.3259 43.7558 22.0343 43.7576 21.7415C43.7624 21.1655 43.8569 20.5937 44.0375 20.0467C44.2038 19.5055 44.4102 18.9774 44.6548 18.4669C44.982 17.792 45.3028 17.1235 45.6173 16.4614C45.9317 15.7994 46.2474 15.1603 46.5644 14.5442H45.8627C45.4227 14.5892 44.9803 14.4867 44.605 14.2528C44.5015 14.1736 44.4171 14.0722 44.358 13.9561C44.299 13.8399 44.2667 13.712 44.2637 13.5818C44.2722 13.4488 44.3061 13.3186 44.3634 13.1983C44.4389 13.0344 44.5428 12.8851 44.6702 12.7573C44.8189 12.6125 44.9898 12.4921 45.1763 12.4007C45.3851 12.2993 45.6152 12.2493 45.8473 12.255H47.6074L51.0584 5.42198C51.2316 5.05687 51.5091 4.7513 51.856 4.54389C52.1624 4.36197 52.5119 4.26532 52.8683 4.26397C53.1863 4.26233 53.4979 4.3529 53.7655 4.52472C53.9039 4.62033 54.0143 4.75091 54.0857 4.90314C54.1571 5.05538 54.1869 5.22383 54.172 5.39131C54.1683 5.61132 54.1187 5.82812 54.0263 6.02783C53.9381 6.23106 53.8192 6.47647 53.6658 6.76022C53.5713 6.94427 53.4524 7.16667 53.3092 7.42742C53.1674 7.67666 53.014 7.9489 52.8529 8.24416L52.3621 9.14143C52.2011 9.45586 52.0362 9.75878 51.8713 10.054L50.698 12.255H56.0125C56.2511 12.2536 56.4894 12.2689 56.7258 12.301C56.9206 12.3165 57.11 12.3726 57.2818 12.4659C57.4396 12.5332 57.5733 12.6469 57.6652 12.7919C57.7383 12.9341 57.7818 13.0896 57.793 13.2491C57.8042 13.4086 57.7829 13.5688 57.7304 13.7198C57.6935 13.8468 57.6202 13.9601 57.5195 14.0457C57.3931 14.1507 57.2452 14.2266 57.0862 14.2681C56.866 14.3438 56.6362 14.3877 56.4037 14.3985L49.6205 14.4752ZM57.0363 9.43668C57.0395 9.17581 57.0835 8.91703 57.1667 8.66979C57.2643 8.40246 57.4084 8.15451 57.5924 7.93741C57.7952 7.68992 58.0521 7.49215 58.3432 7.35922C58.6343 7.22629 58.9519 7.16174 59.2718 7.17051C59.7445 7.12371 60.217 7.26107 60.5909 7.55396C60.7155 7.67051 60.814 7.81205 60.8801 7.96932C60.9462 8.12658 60.9783 8.29602 60.9744 8.46656C60.9701 8.70108 60.926 8.93318 60.844 9.15293C60.7659 9.40617 60.6439 9.6437 60.4835 9.85464C60.3101 10.0695 60.0949 10.2469 59.8509 10.3761C59.563 10.5239 59.2425 10.5965 58.9191 10.587C58.4255 10.6315 57.9302 10.523 57.5003 10.2764C57.3675 10.1751 57.2576 10.0469 57.1776 9.90026C57.0977 9.75358 57.0495 9.5917 57.0363 9.42518V9.43668ZM55.2456 13.1063C55.3948 12.8353 55.6148 12.61 55.8822 12.4544C56.1647 12.296 56.4901 12.2311 56.8118 12.269C57.1335 12.3068 57.4349 12.4456 57.6729 12.6653C57.8202 12.7888 57.9378 12.944 58.0168 13.1193C58.0958 13.2946 58.1342 13.4854 58.1292 13.6776C58.1182 13.7756 58.1015 13.8729 58.0793 13.969C58.0686 14.0731 58.0359 14.1738 57.9835 14.2643C57.8301 14.5442 57.7074 14.7858 57.6 14.9813C57.4927 15.1769 57.4083 15.3648 57.3239 15.5335L57.0939 16.0243L56.8178 16.611C56.6874 16.8832 56.5417 17.1823 56.3768 17.5083C56.2119 17.8342 56.0586 18.1486 55.9052 18.4861C55.7518 18.8235 55.6406 19.1533 55.5217 19.4792C55.4308 19.7698 55.3818 20.072 55.376 20.3764C55.3607 20.484 55.372 20.5937 55.4087 20.6959C55.4455 20.7982 55.5067 20.8899 55.5869 20.9631C55.7844 21.0606 56.0036 21.1055 56.2234 21.0935C56.5487 21.0889 56.8701 21.0225 57.1706 20.8979C57.521 20.7594 57.8585 20.59 58.179 20.3918C58.5249 20.1792 58.8578 19.9462 59.176 19.6939C59.5019 19.4217 59.8048 19.1494 60.0886 18.8772C60.3723 18.6049 60.6484 18.3442 60.8862 18.1103C61.1239 17.8764 61.3425 17.6348 61.5073 17.4392C61.6767 17.2565 61.9104 17.1465 62.1592 17.1325C62.2538 17.1309 62.3471 17.1542 62.4298 17.1999C62.5126 17.2457 62.5819 17.3123 62.6309 17.3932C62.768 17.5879 62.8367 17.8225 62.8264 18.0604C62.8196 18.3373 62.7529 18.6094 62.6309 18.858C62.4926 19.1668 62.2869 19.4406 62.0288 19.6594C61.4728 20.2231 60.9092 20.7676 60.3302 21.2891C59.7715 21.7868 59.1782 22.2443 58.5548 22.658C57.985 23.034 57.3786 23.3513 56.7449 23.6051C56.1592 23.8382 55.5348 23.9592 54.9044 23.9617C54.1494 24.0045 53.4051 23.7669 52.8146 23.2945C52.3033 22.8369 52.0477 22.1301 52.0477 21.174C52.0465 20.6781 52.1176 20.1847 52.2586 19.7093C52.3979 19.2364 52.5669 18.7727 52.7647 18.3212C52.9603 17.8649 53.1674 17.4316 53.3821 17.0174C53.5968 16.6033 53.7655 16.1892 53.9381 15.8096C53.9918 15.6677 54.0838 15.453 54.2142 15.1577C54.3445 14.8625 54.5018 14.5672 54.6551 14.2605L55.2456 13.1063ZM70.6027 20.2307C70.5962 20.2572 70.5962 20.2848 70.6027 20.3113C70.6036 20.3393 70.597 20.3671 70.5836 20.3918C70.5882 20.6072 70.6392 20.8191 70.7331 21.013C70.7697 21.1073 70.8348 21.188 70.9193 21.2436C71.0038 21.2993 71.1036 21.3272 71.2047 21.3236C71.2717 21.3276 71.3388 21.3158 71.4003 21.2891C72.0629 21.0845 72.6939 20.7889 73.2754 20.411C73.9156 20.0084 74.5303 19.5666 75.1159 19.0881C75.6819 18.6301 76.2209 18.1397 76.7302 17.6195C77.2325 17.121 77.6428 16.6762 77.9688 16.2851C78.0267 16.2037 78.1024 16.1366 78.1901 16.0888C78.2778 16.041 78.3752 16.0137 78.4749 16.009C78.5588 16.0097 78.6413 16.0306 78.7154 16.07C78.7895 16.1094 78.853 16.166 78.9005 16.2352C79.0386 16.4119 79.1081 16.6325 79.0961 16.8564C79.0838 17.1099 79.0226 17.3586 78.9159 17.5888C78.7802 17.9198 78.594 18.2276 78.3637 18.5014C77.7195 19.2069 77.0638 19.8895 76.389 20.5413C75.7462 21.165 75.0649 21.7478 74.349 22.286C73.7099 22.759 73.0222 23.1626 72.2976 23.49C71.6748 23.7838 70.996 23.9394 70.3075 23.9463C69.9663 23.9652 69.6248 23.9159 69.3028 23.8014C68.9809 23.6868 68.685 23.5093 68.4324 23.2792C68.1881 23.002 68.0018 22.6787 67.8846 22.3283C67.7674 21.9779 67.7216 21.6076 67.7499 21.2392V21.0782C67.7437 21.0183 67.7437 20.9579 67.7499 20.8979C67.493 21.3625 67.1687 21.7863 66.7874 22.1557C66.0166 22.8933 65.0765 23.4305 64.0496 23.7201C63.5787 23.8656 63.0892 23.9418 62.5963 23.9463C62.2208 23.9503 61.847 23.896 61.4882 23.7853C61.1592 23.679 60.8579 23.5009 60.6062 23.2638C60.3561 23.002 60.1629 22.6913 60.0387 22.3512C59.8991 21.9192 59.833 21.4669 59.8432 21.013C59.8366 20.1313 59.9792 19.2549 60.265 18.4209C60.5362 17.6178 60.9154 16.8554 61.3923 16.1547C61.8455 15.4716 62.3813 14.8469 62.9875 14.295C63.564 13.7668 64.1922 13.2979 64.8625 12.8954C65.4722 12.5219 66.1234 12.2208 66.8028 11.9981C67.3697 11.8035 67.9635 11.6987 68.5628 11.6875C69.1121 11.6732 69.6578 11.7792 70.1618 11.9981C70.3853 12.1095 70.5887 12.2572 70.7638 12.4352L70.8942 12.1592C71.0054 11.8984 71.1012 11.676 71.1894 11.492C71.2776 11.3079 71.3351 11.1545 71.3696 11.0663C71.4041 10.9781 71.4923 10.7404 71.6457 10.3838C71.7991 10.0272 71.9716 9.6169 72.1672 9.12609C72.3628 8.63528 72.5928 8.11762 72.8191 7.56162C73.0453 7.00562 73.2754 6.48413 73.4709 5.99715C73.6665 5.51018 73.8544 5.08839 73.9771 4.74328C74.0998 4.39818 74.2033 4.15661 74.2378 4.05691C74.3149 3.79136 74.419 3.53439 74.5484 3.29001C74.666 3.04586 74.8198 2.82091 75.0047 2.62282C75.1841 2.42951 75.4006 2.27432 75.6412 2.16651C75.8937 2.04186 76.1726 1.98003 76.4541 1.98629C76.8168 1.97207 77.1751 2.06835 77.4818 2.26238C77.6304 2.38578 77.7455 2.5446 77.8165 2.72419C77.8875 2.90379 77.9122 3.09837 77.8882 3.29001C77.8813 3.50143 77.8491 3.71125 77.7924 3.91504C77.7388 4.13061 77.6735 4.3431 77.5968 4.55156C77.5316 4.75479 77.4549 4.96185 77.3706 5.16891C77.2862 5.37597 77.221 5.55236 77.1559 5.72491C76.6139 6.80879 76.0439 7.99364 75.4457 9.27947C74.8475 10.5653 74.2544 11.8435 73.6665 13.114C73.0811 14.4074 72.5225 15.6677 71.9908 16.8947C71.4591 18.1218 70.9964 19.2299 70.6027 20.2192V20.2307ZM70.1234 13.8425C69.4215 13.8758 68.7292 14.0195 68.072 14.2681C67.2449 14.5499 66.4767 14.9815 65.8058 15.5412C65.1035 16.1124 64.5122 16.8078 64.0611 17.5926C63.5799 18.4534 63.3055 19.4143 63.2597 20.3995C63.2597 20.8328 63.4476 21.0513 63.8157 21.0513C64.2654 21.0533 64.7102 20.9578 65.1194 20.7714C65.543 20.5693 65.9376 20.3114 66.2928 20.0045C66.6808 19.6691 67.0353 19.2967 67.3511 18.8925C67.6783 18.4833 67.978 18.0529 68.2484 17.6041C68.5261 17.1777 68.782 16.7374 69.0153 16.2851C69.2415 15.8403 69.4371 15.4261 69.6019 15.0465L69.832 14.5404C69.8895 14.3372 69.9931 14.1032 70.1234 13.8425ZM82.6468 14.6094C82.1277 14.6096 81.6171 14.7415 81.1629 14.9928C80.6815 15.2563 80.2505 15.6029 79.8898 16.0166C79.5203 16.4432 79.2236 16.9277 79.0117 17.4507C78.7985 17.9516 78.6877 18.49 78.6858 19.0344C78.6858 19.2529 78.6858 19.4792 78.7165 19.7208C78.749 19.9404 78.8149 20.1538 78.912 20.3534C79.0081 20.5461 79.1472 20.714 79.3185 20.8443C79.5378 20.984 79.795 21.0523 80.0547 21.0398C80.3559 21.0174 80.6445 20.9096 80.8868 20.7292C81.2413 20.4882 81.5736 20.2161 81.8799 19.9163C82.2357 19.5695 82.5736 19.2047 82.8922 18.8235C83.2143 18.44 83.5096 18.0298 83.7703 17.6463C83.9998 17.3161 84.2123 16.9744 84.4069 16.6225C84.5345 16.4183 84.6181 16.1898 84.6523 15.9515C84.6527 15.747 84.576 15.5498 84.4375 15.3993C84.2939 15.2199 84.1168 15.0701 83.916 14.9583C83.708 14.8384 83.4831 14.7505 83.2488 14.6976C83.0487 14.645 82.8422 14.6205 82.6353 14.6247L82.6468 14.6094ZM93.9432 18.8273C93.7476 19.0152 93.4869 19.2683 93.1763 19.5942C92.8657 19.9202 92.4746 20.2729 92.0528 20.6564C91.631 21.0398 91.1939 21.4233 90.7146 21.8067C90.2516 22.1816 89.7677 22.5298 89.2651 22.8497C88.8042 23.1475 88.3179 23.4041 87.8119 23.6166C87.3861 23.8094 86.9256 23.9138 86.4583 23.9233C86.116 23.9335 85.7775 23.8486 85.4805 23.6779C85.2104 23.5183 84.9776 23.3025 84.798 23.0453C84.6207 22.7753 84.491 22.477 84.4145 22.1633C84.3271 21.8278 84.2833 21.4824 84.2841 21.1357C84.2839 20.9125 84.2993 20.6895 84.3302 20.4685C84.361 20.2508 84.4163 20.0372 84.4951 19.832C84.1576 20.2895 83.7742 20.7625 83.3447 21.2507C82.9225 21.7298 82.4593 22.1712 81.9605 22.5698C81.4901 22.9515 80.975 23.2747 80.4267 23.5322C79.9202 23.7836 79.3625 23.9149 78.797 23.9157C78.4577 23.907 78.1217 23.8476 77.8 23.7393C77.4161 23.6205 77.0574 23.432 76.7417 23.1833C76.3918 22.9085 76.1032 22.5637 75.8943 22.171C75.648 21.6984 75.5291 21.1698 75.5492 20.6372C75.5602 20.099 75.6257 19.5632 75.7448 19.0382C75.8995 18.3834 76.1073 17.7422 76.366 17.121C76.6603 16.4294 77.0144 15.7648 77.4243 15.1347C77.8559 14.4877 78.3717 13.901 78.9581 13.39C79.553 12.8636 80.2305 12.4387 80.9635 12.1323C81.7581 11.7983 82.6132 11.6325 83.4751 11.6453C83.9001 11.6363 84.3237 11.6972 84.7289 11.8256C85.045 11.9232 85.3507 12.0516 85.6416 12.209C85.917 12.3713 86.1741 12.5629 86.4085 12.7803C86.5925 12.6807 86.7919 12.5886 86.9798 12.5004C87.1434 12.4228 87.3126 12.3574 87.4859 12.3049C87.6367 12.2468 87.7961 12.2144 87.9576 12.209C88.3247 12.1919 88.6848 12.3137 88.9661 12.5503C89.0834 12.6412 89.1788 12.7573 89.2452 12.89C89.3115 13.0228 89.3472 13.1688 89.3495 13.3172C89.3506 13.3765 89.3442 13.4358 89.3303 13.4936C89.2564 13.7534 89.1693 14.0094 89.0696 14.2605C88.9622 14.5787 88.8357 14.9315 88.6861 15.3226C88.5366 15.7137 88.3985 16.0895 88.249 16.5266C88.0995 16.9638 87.9767 17.3472 87.8655 17.7498C87.7543 18.1525 87.647 18.5167 87.5703 18.9002C87.5004 19.1944 87.4618 19.4951 87.4553 19.7975C87.4448 20.0777 87.5014 20.3563 87.6201 20.6104C87.6713 20.7108 87.751 20.7939 87.8492 20.8492C87.9475 20.9045 88.0599 20.9294 88.1723 20.921C88.3708 20.9123 88.5653 20.8626 88.7436 20.7752C88.9998 20.6529 89.246 20.5105 89.4799 20.3496C89.7406 20.1771 90.0052 19.9662 90.2774 19.7629C90.5497 19.5597 90.8296 19.3066 91.0903 19.0804C91.7013 18.5359 92.3481 17.916 93.0306 17.2207C93.17 17.0941 93.3488 17.0196 93.5367 17.0098C93.6477 17.0112 93.7562 17.0422 93.8513 17.0995C93.9463 17.1567 94.0243 17.2383 94.0774 17.3357C94.2265 17.5391 94.3059 17.7852 94.3036 18.0374C94.304 18.189 94.2709 18.3387 94.2066 18.4759C94.1422 18.6132 94.0484 18.7345 93.9317 18.8312L93.9432 18.8273Z"
        fill="white"
      />
    </svg>
  );
};
