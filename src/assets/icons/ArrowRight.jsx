import {clsx} from 'clsx';

export function ArrowRight({className}) {
    return (
        <svg className={clsx(className, "w-[20px] h-[20px]")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_7_4987)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.79289 2.79289C8.18342 2.40237 8.81658 2.40237 9.20711 2.79289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L9.20711 21.2071C8.81658 21.5976 8.18342 21.5976 7.79289 21.2071C7.40237 20.8166 7.40237 20.1834 7.79289 19.7929L15.5858 12L7.79289 4.20711C7.40237 3.81658 7.40237 3.18342 7.79289 2.79289Z" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_7_4987">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}