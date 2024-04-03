interface Props {
    title: string;
}

export default function Heading(getData: Props) {
    return (
        <>
            <div className="flex flex-row items-center gap-x-4 px-8">
                <div className="flex grow h-[2px] bg-gray-600/60 rounded" />
                <span className="text-[32px]">{getData.title}</span>
                <div className="flex grow h-[2px] bg-gray-600/60 rounded" />
            </div>
        </>
    )
}
