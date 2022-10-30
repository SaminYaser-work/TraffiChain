@extends('layouts.app')

@section('script')
    <script type="text/javascript" src="{{ url('/js/regM.js') }}" defer></script>
@endsection

@section('title')
    Profile
@endsection

@section('header')
    {{ $userInfo->NAME }}'s Profile
@endsection

@section('content')
    @if (session()->get('infoChangeSuccess') == true)
        <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Success!</span> Your profile has been updated.
            </div>
        </div>
    @endisset

    <form action="/profile/update" method="POST">
        @csrf

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ $userInfo->NAME }}>

            <label for="name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
            </label>

            @if ($errors->has('name'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('name') }}
                </span>
            @endif
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="nid" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ $userInfo->NID }}>

            <label for="nid"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                NID
            </label>

            @if ($errors->has('nid'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('nid') }}
                </span>
            @endif
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="lic" id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " value={{ $userInfo->LICENSE_NUMBER }}>

            <label for="lic"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                License No.
            </label>

            @if ($errors->has('lic'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('lic') }}
                </span>
            @endif
        </div>



        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="issue" id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value={{ $userInfo->LICENSE_ISSUE_DATE }}>
                <label for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Issue Date</label>
                @if ($errors->has('issue'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('issue') }}
                    </span>
                @endif
            </div>

            <div class="relative z-0 mb-6 w-full group">
                <input type="date" name="exp" id="floating_company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " value={{ $userInfo->LICENSE_EXPIRY_DATE }}>
                <label for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    License Expiration Date</label>
                @if ($errors->has('exp'))
                    <span class="text-red-600 text-xs">
                        {{ $errors->first('exp') }}
                    </span>
                @endif
            </div>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <div class="relative w-full">
                <input type="text" id="regMMInput" name="walletAddress"
                    class="rounded-tl-lg rounded-bl-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    value="{{ $userInfo->WALLET_ADDRESS }}" placeholder="Your Wallet Address">

                <button type="button" id="regMMBtn" name="regMMBtn"
                    class="cursor-pointer absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-orange-600 rounded-r-lg border border-orange-600 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg aria-hidden="true" class="w-6 h-5" viewBox="0 0 2405 2501" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1512_1323)">
                            <path d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path
                                d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path
                                d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
                                fill="#763D16" stroke="#763D16" stroke-width="5.94955" />
                            <path
                                d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
                                fill="#763D16" stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z" fill="#E2761B"
                                stroke="#E2761B" stroke-width="5.94955" />
                            <path
                                d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
                                fill="#763D16" stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z" fill="#E2761B"
                                stroke="#E2761B" stroke-width="5.94955" />
                            <path d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z" fill="#C0AD9E"
                                stroke="#C0AD9E" stroke-width="5.94955" />
                            <path d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z" fill="#E2761B"
                                stroke="#E2761B" stroke-width="5.94955" />
                            <path
                                d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z" fill="#E4751F"
                                stroke="#E4751F" stroke-width="5.94955" />
                            <path d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path
                                d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
                                fill="#E4761B" stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z" fill="#233447"
                                stroke="#233447" stroke-width="5.94955" />
                            <path d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path
                                d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
                                fill="#763D16" stroke="#763D16" stroke-width="5.94955" />
                            <path
                                d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
                                fill="#E4761B" stroke="#E4761B" stroke-width="5.94955" />
                            <path
                                d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path
                                d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z" fill="#C0AD9E"
                                stroke="#C0AD9E" stroke-width="5.94955" />
                            <path d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z" fill="#D7C1B3"
                                stroke="#D7C1B3" stroke-width="5.94955" />
                            <path d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z" fill="#E4761B"
                                stroke="#E4761B" stroke-width="5.94955" />
                            <path d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z" fill="#D7C1B3"
                                stroke="#D7C1B3" stroke-width="5.94955" />
                            <path
                                d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
                                fill="#763D16" stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z" fill="#CD6116"
                                stroke="#CD6116" stroke-width="5.94955" />
                            <path d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z" fill="#E4751F"
                                stroke="#E4751F" stroke-width="5.94955" />
                            <path d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z" fill="#233447"
                                stroke="#233447" stroke-width="5.94955" />
                            <path d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z" fill="#763D16"
                                stroke="#763D16" stroke-width="5.94955" />
                            <path d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z" fill="#C0AD9E"
                                stroke="#C0AD9E" stroke-width="5.94955" />
                            <path d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z" fill="#E4751F"
                                stroke="#E4751F" stroke-width="5.94955" />
                            <path
                                d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z" fill="#E4751F"
                                stroke="#E4751F" stroke-width="5.94955" />
                            <path d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z" fill="#F6851B"
                                stroke="#F6851B" stroke-width="5.94955" />
                            <path
                                d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
                                fill="#F6851B" stroke="#F6851B" stroke-width="5.94955" />
                            <path
                                d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
                                fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955" />
                            <path
                                d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
                                fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955" />
                            <path d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z" fill="#161616"
                                stroke="#161616" stroke-width="5.94955" />
                            <path
                                d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
                                fill="#161616" stroke="#161616" stroke-width="5.94955" />
                            <path
                                d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
                                fill="#161616" stroke="#161616" stroke-width="5.94955" />
                            <path
                                d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
                                fill="#161616" stroke="#161616" stroke-width="5.94955" />
                            <path d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z" fill="#161616"
                                stroke="#161616" stroke-width="5.94955" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1512_1323">
                                <rect width="2404" height="2500" fill="white"
                                    transform="translate(0.519043 0.132812)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>

            @if ($errors->has('walletAddress'))
                <span class="text-red-600 text-xs">
                    {{ $errors->first('walletAddress') }}
                </span>
            @endif
        </div>


        <div class="flex items-center mb-5">
            <input id="terms" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-blue-600 rounded border-gray-300 focus:ring-blue-500 selection:bg-blue-600">
            <label for="terms" class="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">
                I testify that, I have provided the <strong class="text-blue-500">correct information.</strong>
            </label>
        </div>


        <div class="flex justify-center items-end gap-6">
            <button type="submit"
                class="disabled:bg-slate-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed">
                Update
            </button>

            <a href="{{ url('/home') }}"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</a>
        </div>

    </form>

    <script>
        const terms = document.getElementById('terms');
        const btn = document.querySelector('button[type="submit"]');

        terms.checked ? btn.disabled = false : btn.disabled = true;

        terms.addEventListener('change', function() {
            if (terms.checked) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });
    </script>
@endsection
