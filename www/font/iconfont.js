;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.8428 332.8973c0-157.1369-129.324-284.5409-288.9861-284.5409-159.5924 0-288.9851 127.404-288.9851 284.5409 0 51.9004 14.3647 100.3704 38.9734 142.2643h-0.310272l245.7211 488.8525c0.8407 1.6742 2.5733 2.8211 4.5742 2.8211 1.9999 0 3.7335-1.1459 4.5742-2.8201L778.2502 475.1616h-0.35328C802.5907 433.2667 816.8428 384.7967 816.8428 332.8973M527.8843 475.1329c-79.7809 0-144.4915-63.7092-144.4915-142.2776 0-78.5254 64.7107-142.2633 144.4915-142.2633 79.8669 0 144.4925 63.7379 144.4925 142.2633C672.3779 411.4237 607.7512 475.1329 527.8843 475.1329"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M520.992 274.016q32.992-40.992 70.016-74.016 32-27.008 72.512-48.992t84.512-19.008q62.016 4.992 103.488 29.504t66.016 62.016 33.504 84.992 6.016 97.504-17.504 95.488-36 84.992-47.488 72.992-52 60.512q-40 40.992-83.488 76.512t-83.008 60.992-72 40.512-50.496 15.008q-20 0.992-51.008-14.016t-68-40.512-78.016-60.512-80.992-74.016q-26.016-24.992-56-58.016t-56.512-72.512-45.504-85.504-20.992-98.016 11.008-97.504 39.008-81.504 64-60.512 86.016-34.496q24-4.992 48-1.504t47.008 12 44 21.504 40 27.008q44 32.992 84 79.008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shenglve" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M286.528 512c0 63.04-51.072 114.112-114.112 114.112C109.376 626.112 58.304 575.04 58.304 512s51.072-114.112 114.112-114.112C235.456 397.888 286.528 448.96 286.528 512zM512 397.888C448.96 397.888 397.888 448.96 397.888 512S448.96 626.112 512 626.112 626.112 575.04 626.112 512 575.04 397.888 512 397.888zM851.648 397.888c-63.04 0-114.112 51.072-114.112 114.112s51.072 114.112 114.112 114.112c63.04 0 114.112-51.072 114.112-114.112S914.688 397.888 851.648 397.888z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-stadium-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.209 673.764c-146.842 92.283-236.831 136.049-373.043 131.523-136.212-4.506-483.123-247.173-483.369-294.625-0.266-47.473 3.052-76.841 21.012-115.753 56.402 72.786 281.948 226.202 493.896 242.012 211.948 15.811 429.691-145.859 420.332-194.662 23.491 74.752 68.014 139.223-78.828 231.506zM589.223 589.592c-143.442-6.431-450.089-130.601-493.896-210.452-20.828-64.84 233.062-142.766 362.537-131.543s488.243 106.885 493.896 163.103c5.632 56.218-219.116 185.303-362.537 178.893zM342.275 294.946c-12.145-7.291-59.515 10.179-64.655 19.907-5.14 9.748 40.673 56.791 47.882 58.86 7.209 2.089 46.203-10.076 48.292-15.647 2.089-5.53-19.374-55.828-31.519-63.119zM377.767 284.337c-7.004 6.615 31.846 65.024 38.072 68.485s105.697-3.359 110.326-5.263c4.649-1.905 25.743-31.601 23.552-58.86-21.524-22.958-164.946-10.977-171.95-4.362zM582.383 293.062c-8.376 1.925-23.429 59.638-19.436 65.024s52.552 15.79 52.552 15.79 34.324-55.276 31.519-63.14-56.259-19.599-64.635-17.674zM686.872 321.406c-6.963 2.519-31.662 64.082-29.348 68.26 2.314 4.157 46.346 18.309 52.552 15.79 6.205-2.519 42.476-49.93 39.936-57.876-2.56-7.946-56.197-28.692-63.14-26.173zM773.113 363.349c-24.392 75.244-162.427 107.438-241.684 105.226-79.258-2.212-224.952-72.008-283.73-136.786 0 0-57.303-5.55-42.025 36.823 15.258 42.394 250.941 126.853 352.031 136.786s222.003-60.662 252.191-84.173c30.188-23.511 4.403-48.497-36.782-57.876z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-me-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.359952 509.48369c-125.273145 0-227.134067-101.916181-227.134067-227.136114 0-125.272122 101.860922-227.186256 227.134067-227.186256 125.217886 0 227.134067 101.915158 227.134067 227.186256C749.494019 407.567509 647.577838 509.48369 522.359952 509.48369L522.359952 509.48369zM522.359952 105.653295c-97.426937 0-176.695305 79.266321-176.695305 176.694281 0 97.430006 79.268368 176.643116 176.695305 176.643116 97.428983 0 176.643116-79.212086 176.643116-176.643116C699.003068 184.919617 619.788935 105.653295 522.359952 105.653295L522.359952 105.653295zM196.865693 862.823134l30.03506-270.186605 140.260487-56.128345 18.764366 46.880727-112.200408 44.856627-20.458961 184.138834L802.613844 812.384371l-20.458961-184.138834-112.147196-44.856627 18.763342-46.880727 140.210345 56.128345 30.03199 270.186605L196.865693 862.823134 196.865693 862.823134z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hf" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M450.663026 847.52266 450.663026 623.935372c27.472702 0 416.874479-31.378661 508.774539 276.247648 0-508.198417-284.645922-615.233176-508.774539-615.233176L450.663026 63.071478 64.044642 454.718389 450.663026 847.52266 450.663026 847.52266 450.663026 847.52266zM450.663026 847.52266"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixinpay" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M537.622015 410.308169" fill="#0cbb22" ></path>' +
    '' +
    '<path d="M316.914611 320.110779c-19.899085 0-39.991474 13.179462-39.991474 33.147073 0 19.835673 20.03 33.141959 39.991474 33.141959 19.960451 0 33.141959-13.374812 33.141959-33.210485C350.055547 333.226829 336.811651 320.110779 316.914611 320.110779L316.914611 320.110779zM502.466215 386.335376c20.03 0 33.210485-13.3114 33.210485-33.141959 0-19.967611-13.180485-33.147073-33.210485-33.147073-19.835673 0-39.732712 13.11605-39.732712 33.147073C462.733503 373.023976 482.693954 386.335376 502.466215 386.335376L502.466215 386.335376zM588.659445 512.512921c-13.180485 0-26.491884 13.180485-26.491884 26.428472 0 13.369698 13.3114 26.484725 26.491884 26.484725 20.087275 0 33.208439-13.11605 33.208439-26.484725C621.867884 525.693406 608.810133 512.512921 588.659445 512.512921L588.659445 512.512921zM734.604138 512.512921c-13.11605 0-26.427449 13.242874-26.427449 26.48677 0 13.374812 13.3114 26.490861 26.427449 26.490861 19.962497 0 33.205371-13.11605 33.205371-26.490861C767.746096 525.693406 754.503223 512.512921 734.604138 512.512921L734.604138 512.512921zM827.32471 1.022774 197.701132 1.022774c-108.570496 0-196.678359 88.113999-196.678359 196.678359l0 629.618463c0 108.57561 88.044451 196.680404 196.678359 196.680404L827.32471 1024c96.745187 0 177.243613-69.948516 193.678563-161.95826l3.06423-160.683884L1024.067503 197.701132C1024.067503 89.130636 935.958618 1.022774 827.32471 1.022774L827.32471 1.022774zM403.09966 658.396247c-33.141959 0-59.695209-6.656211-92.842282-13.242874l-92.710344 46.453358 26.554273-79.726232c-66.41381-46.452336-106.153682-106.217094-106.153682-179.033467 0-126.173454 119.396556-225.476598 265.215447-225.476598 130.4016 0 244.548259 79.404059 267.580099 186.194928-8.571866-0.963453-17.081343-1.538252-25.589798-1.538252-125.989355 0-225.35591 93.995971-225.419322 209.801568 0 19.393835 3.006955 37.947972 8.19344 55.667527-8.256852 0.516501-16.507567 0.894927-24.826809 0.894927L403.100682 658.396247zM794.10502 751.365353l20.03 66.2921-72.74887-39.934199c-26.490861 6.656211-53.170936 13.247988-79.530882 13.247988-126.177545 0-225.480689-86.122659-225.480689-192.334639 0-106.021744 99.303144-192.404187 225.480689-192.404187 119.138817 0 225.287384 86.382443 225.287384 192.404187C887.078217 658.396247 847.408917 711.378993 794.10502 751.365353L794.10502 751.365353zM794.10502 751.365353" fill="#0cbb22" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huifu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M410.880469 2.372735C399.424522-2.427243 386.112583 0.196745 377.280624 8.964705L9.026331 298.371363c-12.031944 11.967945-12.031944 31.551854 0 43.519798l368.318293 287.998665C383.168597 635.777799 391.040561 638.977785 399.104523 638.977785c4.031981 0 7.935963-0.895996 11.839945-2.367989C422.400415 631.873817 429.248384 620.60987 429.248384 608.129928L429.248384 435.650727c393.918174 0 566.205376 111.039485 540.029497 464.957845 166.719227-566.141376-153.407289-694.076783-540.029497-694.076783L429.248384 30.660604C429.248384 18.244662 422.336416 7.044714 410.880469 2.372735L410.880469 2.372735zM410.880469 2.372735"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-activity-off" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M58.937 298.365c0 0 143.949 25.407 323.454-13.544 0 0 81.294-22.016 149.029 17.782 0 0 121.933 49.112 30.483 174.433 0 0-219.582 328.819-508.609 433.813 0 0-82.42 62.094 18.06 29.356 100.485-32.744 202.092-91.443 390.633-199.825 0 0 342.085-247.259 286.197-386.126 0 0-37.252-150.718-204.91-150.718 0 0-78.748-0.849-138.866 14.393 0 0-68.583 12.704-131.247 27.945 0 0-150.72 16.932-204.062 11.853C69.099 257.726-77.106 251.235 58.937 298.365L58.937 298.365zM58.937 298.365"  ></path>' +
    '' +
    '<path d="M717.144 548.438c0 0-74.518 95.971-136.604 136.617 0 0-20.32 28.229 21.447 16.933 0 0 211.121-111.776 383.857 29.356 0 0 65.488 34.998 22.581-29.356 0 0-75.645-126.447-174.997-146.768C833.428 555.213 784.885 536.021 717.144 548.438L717.144 548.438zM717.144 548.438"  ></path>' +
    '' +
    '<path d="M854.882 164.58c0 49.884-40.439 90.321-90.323 90.321-49.87 0-90.316-40.438-90.316-90.321 0-49.878 40.446-90.317 90.316-90.317C814.442 74.263 854.882 114.702 854.882 164.58L854.882 164.58zM854.882 164.58"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-alipay" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1018.8 850.2l0 6c0 89.4-73 162.6-162.2 162.6L167.4 1018.8c-89.2 0-162.2-73.2-162.2-162.6L5.2 167.6c0-89.4 73-162.6 162.2-162.6l689.4 0c89.2 0 162.2 73.2 162.2 162.6l0 524.2L1018.8 850.2zM278.8 785.2c-158.2 0-204.8-124-125.8-193 26.4-22.4 73-34.6 99.4-36.6 93.2-10.2 180.4 26.4 283.8 77.2C461.4 726.4 370 785.2 278.8 785.2L278.8 785.2zM840.4 641c-40.6-14.2-95.2-34.6-156.2-56.8 36.4-63 64.8-136.2 85.2-213.4L568.8 370.8l0-71.2L814 299.6l0-40.6-245.4 0L568.6 139.2l-99.4 0c-18.2 0-18.2 18.2-18.2 18.2l0 103.6L203.8 261l0 40.6 247.4 0 0 69L246.4 370.6l0 40.6 397.4 0c-14.2 50.8-34.4 97.6-56.8 140.2-127.8-42.6-265.6-77.2-352.8-54.8-54.8 14.2-91.2 38.6-111.6 63-95.2 115.8-26.4 292.6 174.4 292.6 119.6 0 235.2-67 324.4-176.8 133.8 65 397.4 174.8 397.4 174.8l0-156.4C1018.8 693.8 986.4 689.8 840.4 641z" fill="#1296db" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-find-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.666667 341.333333m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" fill="#fb8041" ></path>' +
    '' +
    '<path d="M512 341.333333c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667c0 93.866667-76.8 170.666667-170.666667 170.666667s-170.666667-76.8-170.666667-170.666667 76.8-170.666667 170.666667-170.666667z" fill="#fb8041" ></path>' +
    '' +
    '<path d="M512 0C422.4 0 332.8 25.6 256 68.266667c-21.333333 12.8-25.6 38.4-17.066667 59.733333 12.8 21.333333 38.4 25.6 59.733334 12.8C362.666667 106.666667 435.2 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667S85.333333 746.666667 85.333333 512c0-76.8 21.333333-149.333333 55.466667-213.333333 12.8-21.333333 4.266667-46.933333-12.8-59.733334s-46.933333-4.266667-59.733333 17.066667C25.6 332.8 0 422.4 0 512c0 281.6 230.4 512 512 512s512-230.4 512-512S793.6 0 512 0z" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-select" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50" ></path>' +
    '' +
    '<path d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-activty-on" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M58.937 298.365c0 0 143.949 25.407 323.454-13.544 0 0 81.294-22.016 149.029 17.782 0 0 121.933 49.112 30.483 174.433 0 0-219.582 328.819-508.609 433.813 0 0-82.42 62.094 18.06 29.356 100.485-32.744 202.092-91.443 390.633-199.825 0 0 342.085-247.259 286.197-386.126 0 0-37.252-150.718-204.91-150.718 0 0-78.748-0.849-138.866 14.393 0 0-68.583 12.704-131.247 27.945 0 0-150.72 16.932-204.062 11.853C69.099 257.726-77.106 251.235 58.937 298.365L58.937 298.365zM58.937 298.365" fill="#fb8041" ></path>' +
    '' +
    '<path d="M717.144 548.438c0 0-74.518 95.971-136.604 136.617 0 0-20.32 28.229 21.447 16.933 0 0 211.121-111.776 383.857 29.356 0 0 65.488 34.998 22.581-29.356 0 0-75.645-126.447-174.997-146.768C833.428 555.213 784.885 536.021 717.144 548.438L717.144 548.438zM717.144 548.438" fill="#fb8041" ></path>' +
    '' +
    '<path d="M854.882 164.58c0 49.884-40.439 90.321-90.323 90.321-49.87 0-90.316-40.438-90.316-90.321 0-49.878 40.446-90.317 90.316-90.317C814.442 74.263 854.882 114.702 854.882 164.58L854.882 164.58zM854.882 164.58" fill="#fb8041" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-stadium-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.209 673.764c-146.842 92.283-236.831 136.049-373.043 131.523-136.212-4.506-483.123-247.173-483.369-294.625-0.266-47.473 3.052-76.841 21.012-115.753 56.402 72.786 281.948 226.202 493.896 242.012 211.948 15.811 429.691-145.859 420.332-194.662 23.491 74.752 68.014 139.223-78.828 231.506zM589.223 589.592c-143.442-6.431-450.089-130.601-493.896-210.452-20.828-64.84 233.062-142.766 362.537-131.543s488.243 106.885 493.896 163.103c5.632 56.218-219.116 185.303-362.537 178.893zM342.275 294.946c-12.145-7.291-59.515 10.179-64.655 19.907-5.14 9.748 40.673 56.791 47.882 58.86 7.209 2.089 46.203-10.076 48.292-15.647 2.089-5.53-19.374-55.828-31.519-63.119zM377.767 284.337c-7.004 6.615 31.846 65.024 38.072 68.485s105.697-3.359 110.326-5.263c4.649-1.905 25.743-31.601 23.552-58.86-21.524-22.958-164.946-10.977-171.95-4.362zM582.383 293.062c-8.376 1.925-23.429 59.638-19.436 65.024s52.552 15.79 52.552 15.79 34.324-55.276 31.519-63.14-56.259-19.599-64.635-17.674zM686.872 321.406c-6.963 2.519-31.662 64.082-29.348 68.26 2.314 4.157 46.346 18.309 52.552 15.79 6.205-2.519 42.476-49.93 39.936-57.876-2.56-7.946-56.197-28.692-63.14-26.173zM773.113 363.349c-24.392 75.244-162.427 107.438-241.684 105.226-79.258-2.212-224.952-72.008-283.73-136.786 0 0-57.303-5.55-42.025 36.823 15.258 42.394 250.941 126.853 352.031 136.786s222.003-60.662 252.191-84.173c30.188-23.511 4.403-48.497-36.782-57.876z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-find-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.666667 341.333333m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" fill="#333333" ></path>' +
    '' +
    '<path d="M512 341.333333c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667c0 93.866667-76.8 170.666667-170.666667 170.666667s-170.666667-76.8-170.666667-170.666667 76.8-170.666667 170.666667-170.666667z" fill="#333333" ></path>' +
    '' +
    '<path d="M512 0C422.4 0 332.8 25.6 256 68.266667c-21.333333 12.8-25.6 38.4-17.066667 59.733333 12.8 21.333333 38.4 25.6 59.733334 12.8C362.666667 106.666667 435.2 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667S85.333333 746.666667 85.333333 512c0-76.8 21.333333-149.333333 55.466667-213.333333 12.8-21.333333 4.266667-46.933333-12.8-59.733334s-46.933333-4.266667-59.733333 17.066667C25.6 332.8 0 422.4 0 512c0 281.6 230.4 512 512 512s512-230.4 512-512S793.6 0 512 0z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tab-me-off-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.359952 509.48369c-125.273145 0-227.134067-101.916181-227.134067-227.136114 0-125.272122 101.860922-227.186256 227.134067-227.186256 125.217886 0 227.134067 101.915158 227.134067 227.186256C749.494019 407.567509 647.577838 509.48369 522.359952 509.48369L522.359952 509.48369zM522.359952 105.653295c-97.426937 0-176.695305 79.266321-176.695305 176.694281 0 97.430006 79.268368 176.643116 176.695305 176.643116 97.428983 0 176.643116-79.212086 176.643116-176.643116C699.003068 184.919617 619.788935 105.653295 522.359952 105.653295L522.359952 105.653295zM196.865693 862.823134l30.03506-270.186605 140.260487-56.128345 18.764366 46.880727-112.200408 44.856627-20.458961 184.138834L802.613844 812.384371l-20.458961-184.138834-112.147196-44.856627 18.763342-46.880727 140.210345 56.128345 30.03199 270.186605L196.865693 862.823134 196.865693 862.823134z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-diqiu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.163 62.422c-242.734 0-439.51 196.775-439.51 439.51s196.776 439.51 439.51 439.51 439.51-196.776 439.51-439.51-196.776-439.51-439.51-439.51zM548.7 93.559s27.53-15.968 37.11-6.388c9.58 9.58 43.113-1.596 129.338 49.5 0 0-18.99 20.252-23.143 19.037 2.424 4.403 9.876 17.825 15.159 26.122 6.387 10.03 7.984 10.728 7.984 10.728l-6.388 9.58 6.388 1.596c-6.388-1.596-9.58 17.564-18.825 20.758-9.244 3.194 2.857 20.758-0.336 23.951-3.193 3.194 1.597 31.936 0 48.865-1.596 16.93-7.983 2.231-15.967 0-7.984-2.23-20.758-7.35-21.85-12.14-1.094-4.79-3.698-19.16-0.505-27.144 3.193-7.984-9.58-15.968-15.968-21.823-6.388-5.856-31.935 1.065-36.726 0-4.79-1.066-7.983-14.903-7.983-27.677s22.355 1.597 34.936 0c12.582-1.596 14.564-33.431 14.564-33.431l-0.723-27.062c-5.162-2.064-6.005-4.74 2.32-8.168 0 0-27.146-6.387-33.532 7.984-6.388 14.372-9.58 12.976-11.178 27.246-1.596 14.27-26.613 1.697-32.467 0-5.855-1.698-21.823-20.86-21.823-20.86 4.79-11.177 7.983-19.16 7.983-19.16l-8.368-19.16V93.559zM296.797 242.058c2.708-3.614 20.757-35.13 43.113-25.548 22.355 9.58 36.725-11.177 36.725-11.177s32.823-33.532 34.774-28.742l1.951 4.79c-1.951-4.79 27.146-12.774 30.338 3.194 3.194 15.967 22.356 24.001 22.356 24.001s-11.178 19.112-7.984 33.482c3.193 14.371 14.371 17.564 7.984 30.339-6.388 12.774-19.162 17.564-22.356 23.951-3.193 6.388-29.451-20.757-32.29-30.339-2.839-9.58-16.868-19.16-29.015-15.967-12.146 3.194-44.082 11.177-50.468 7.984-6.387-3.194-42.61-5.986-35.128-15.968zM724.73 711.507c-12.774 33.532-43.113 91.016-59.08 106.983-15.968 15.968-35.13 46.307-49.5 57.484-14.371 11.177-14.371 31.935-31.935 30.339-17.564-1.597-38.323-51.097-33.532-63.871 4.79-12.774-87.822-35.13-87.822-35.13s-39.92-4.79-47.903-81.434c-1.422-13.64-2.334-23.32-2.879-30.043-11.998-5.302-59.06-24.783-88.137-17.86-33.532 7.984-41.516-10.653-70.258-14.907l-49.5-45.77s-81.434-94.21-71.854-110.177c9.58-15.968 9.58-59.08 11.177-68.66 1.597-9.581-12.744-70.26-11.961-78.243 0.784-7.984-11.99-38.323-11.99-38.323s30.339-63.87 35.129-63.87 22.355 54.29 39.92 55.886c17.563 1.597 65.466-1.596 72.652-9.58 7.186-7.984 13.572-17.564 21.556-17.564 7.984 0 7.984-4.79 22.355 1.597 14.371 6.387 30.339 15.967 36.725 25.547 6.388 9.58-4.79 28.742 28.742 28.742s33.532-7.984 38.323 14.371c4.79 22.356 10.467 71.855-3.548 75.049-14.016 3.193-55.532 51.804-52.338 67.418 3.194 15.614 3.194 39.565-3.194 53.936-6.387 14.37-11.177 19.16-35.129 17.564-23.951-1.597-44.2-14.372-50.842 4.79-6.642 19.161-19.348 62.327 2.94 57.969 0 0 35.128-10.692 47.902 0 12.774 10.692 94.21 45.82 94.21 45.82s73.45-79.838 188.418-28.741l19.162 12.774 31.935-6.943s41.515-12.219 55.887-9.025l14.371 3.194v-6.388c-0.002 0.002 12.772 33.534-0.002 67.066z m186.822-182.031s-9.58-14.371-9.58-29.487-11.178-13.626-11.178-32.786c0-19.162-14.371-12.774-23.951-25.548s-14.372 4.79-22.355 6.387c-7.984 1.597-6.388 14.372-14.372 29.54-7.984 15.17-28.741 24.75-35.129 21.911-6.387-2.84-30.339-24.305-31.935-29.097-1.597-4.79-33.532-31.935-32.646-38.322 0.887-6.388-8.87-39.92-15.257-55.887-6.388-15.968 0-78.877 0-78.877-9.58-5.424 87.822-45.672 75.048-50.462-12.774-4.79-19.161-57.483-19.161-57.483l46.483 23.951c46.484 23.952 105.21 213.968 105.21 213.968v54.29l-11.177 47.902z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)