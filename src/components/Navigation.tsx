import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'

type NavigationProps = {
    current: string | null;
    first?: string | null;
    prev?: string | null;
    next?: string | null;
    last?: string | null;
}

const Navigation = (props: NavigationProps) => {
    return (
        <nav className="flex gap-8 p-4 mb-4 justify-center">
            {props.first && <Link href={{ pathname: '/', query: { page: props.first } }}><ChevronDoubleLeftIcon className="size-6" /></Link>}
            {props.prev ? <Link href={{ pathname: '/', query: { page: props.prev } }}><ChevronLeftIcon className="size-6" /></Link> : <ChevronLeftIcon className="size-6 opacity-40 cursor-not-allowed" />}
            <div>Page {props.current} of {props.last}</div>
            {props.next ? <Link href={{ pathname: '/', query: { page: props.next } }}><ChevronRightIcon className="size-6" /></Link> : <ChevronRightIcon className="size-6 opacity-40 cursor-not-allowed" />}
            {props.last && <Link href={{ pathname: '/', query: { page: props.last } }}><ChevronDoubleRightIcon className="size-6" /></Link>}
        </nav>
    )
}

export default Navigation