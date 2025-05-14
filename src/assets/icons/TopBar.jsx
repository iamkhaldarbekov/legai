import {clsx} from 'clsx';

export function TopBar({className}) {
    return (
        <svg className={clsx(className, "w-[20px] h-[20px]")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.975" y="3.975" width="20.05" height="16.05" rx="3.025" stroke="#657085" stroke-width="1.95"/>
            <rect x="6" y="7" width="12" height="2" rx="1" fill="#657085"/>
        </svg>
    )
}