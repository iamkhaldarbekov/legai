import {clsx} from 'clsx';

export function ArrowLeft({className}) {
    return (
        <svg className={clsx(className, "w-[20px] h-[20px]")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7_4988)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 2.79289C16.5976 3.18342 16.5976 3.81658 16.2071 4.20711L8.41421 12L16.2071 19.7929C16.5976 20.1834 16.5976 20.8166 16.2071 21.2071C15.8166 21.5976 15.1834 21.5976 14.7929 21.2071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L14.7929 2.79289C15.1834 2.40237 15.8166 2.40237 16.2071 2.79289Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_7_4988">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}