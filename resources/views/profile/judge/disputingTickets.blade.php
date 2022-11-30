@extends('layouts.app')

@section('title')
    {{ __('Cited Tickets') }}
@endsection

@section('header')
    Ongoing Cases assigned to
    {{ $userInfo->NAME }}
@endsection

@section('content')
    <div id="modal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden absolute left-0 right-0 mx-auto z-50 w-full md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white" id='modalHeader'>
                        Pay Ticket
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        id='closeModal'>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" id="modalBodyText">
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="button" id="payTicketBtn"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Dismiss</button>
                    <button type="button" id="convictBtn"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Convict</button>
                </div>
            </div>
        </div>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Case Slip ID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Police
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Driver
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Fine
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                    </th>
                </tr>
            </thead>
            <tbody>

                <script>
                    // TODO: Add a loading animation

                    function show_modal(address) {
                        const closeModals = document.querySelectorAll("[id='closeModal']");;
                        const modal = document.getElementById('modal');
                        const payTicketBtn = document.getElementById('payTicketBtn');
                        const convictBtn = document.getElementById('convictBtn');
                        const modalHeader = document.getElementById('modalHeader');
                        const modalBodyText = document.getElementById('modalBodyText');

                        modalHeader.innerHTML = 'Give Verdict';
                        modalBodyText.textContent = `Issue ruling on ticket Case Slip ID: ${address}. This action cannot be undone.`;

                        for (let index = 0; index < closeModals.length; index++) {
                            closeModals[index].onclick = (e) => {
                                modal.classList.add('hidden');
                            }
                        }

                        modal.classList.toggle('hidden');

                        const ticketContract = window.TicketContractInstance(
                            address,
                            '<?php echo $userInfo->WALLET_ADDRESS; ?>'
                        );

                        payTicketBtn.addEventListener('click', async () => {
                            payTicketBtn.textContent = 'Please Wait...';
                            try {
                                await ticketContract.resolveTicket(5);
                                location.reload();
                            } catch (e) {
                                payTicketBtn.textContent = 'Dismiss';
                                console.log(e);
                                alert('Something went wrong. Please try again later.');
                            }
                        });

                        convictBtn.addEventListener('click', async () => {
                            convictBtn.textContent = 'Please Wait...';
                            try {
                                await ticketContract.resolveTicket(7);
                                location.reload();
                            } catch (e) {
                                convictBtn.textContent = 'Convict';
                                console.log(e);
                                alert('Something went wrong. Please try again later.');
                            }
                        });

                    };

                    (async () => {
                        const tbody = document.querySelector('tbody');

                        const judge = '<?php echo $userInfo->WALLET_ADDRESS; ?>';
                        const tickets = await window.judgeContractFactory.getAllTickets(
                            judge
                        );

                        console.log(tickets);

                        tickets.forEach(async (address) => {
                            const ticketContract = window.TicketContractInstance(address);

                            const policeWalletAddress = await ticketContract.getOfficerAddress();
                            const driverWalletAddress = await ticketContract.getDriverAddress();

                            const charges = await ticketContract.getCharges();

                            // const res = await window.infractionContract.getInfractionFine(140);
                            // console.log(res.toString());
                            // const res2 = await window.infractionContract.getInfractionDescription(140);
                            // console.log(res2);
                            const fineAmount = await window.infractionContract.calculateTotalFine(charges);

                            const status = await ticketContract.checkStatus();

                            const ticketInfo = [
                                address.slice(0, 5) + '***' + address.slice(-5),
                                policeWalletAddress.slice(0, 5) + '***' + policeWalletAddress.slice(-5),
                                driverWalletAddress.slice(0, 5) + '***' + driverWalletAddress.slice(-5),
                                fineAmount.toString() + ' BDT',
                                status
                            ];

                            const tr = document.createElement('tr');
                            classes = ['border-b', 'border-gray-200', 'hover:bg-gray-100',
                                'dark:hover:bg-gray-800'
                            ];
                            classes.forEach((className) => {
                                tr.classList.add(className);
                            });

                            for (let i = 0; i < ticketInfo.length; i++) {
                                const td = document.createElement('td');
                                td.classList.add('py-3', 'px-6');
                                td.appendChild(document.createTextNode(ticketInfo[i]));
                                tr.appendChild(td);
                            }


                            styleClasses = [
                                'font-medium', 'text-blue-600', 'dark:text-blue-500',
                                'enabled:hover:underline',
                                'disabled:text-slate-400', 'disabled:dark:text-slate-400',
                                'disabled:cursor-not-allowed'
                            ];
                            // Give Verdict button
                            let td = document.createElement('td');
                            td.classList.add('py-3', 'px-6');
                            let verdictButton = document.createElement('button');
                            if (status == 'Disputing') {
                                verdictButton.addEventListener('click', () => {
                                    show_modal(address, fineAmount, ticketContract);
                                });
                            } else {
                                verdictButton.setAttribute('disabled', 'true');
                            }
                            verdictButton.classList.add(...styleClasses);
                            verdictButton.setAttribute('type', 'button');
                            verdictButton.appendChild(document.createTextNode('Give Verdict'));
                            td.appendChild(verdictButton);
                            tr.appendChild(td);

                            tbody.appendChild(tr);
                        })
                    })();
                </script>
            </tbody>
        </table>
    </div>

    <div class="flex mt-10 justify-center items-end gap-6">
        <a href="{{ url('/home') }}"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</a>
    </div>
@endsection
