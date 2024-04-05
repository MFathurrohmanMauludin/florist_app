import { Button, Link } from "@nextui-org/react";

interface Props {
    url: string;
}

export default function LoadMore(getData: Props) {
    return (
        <>
            <div className="flex flex-row items-center gap-x-4 px-8">
                <div className="flex grow h-[2px] bg-gray-600/30 rounded" />
                <Button
                    className="capitalize w-full max-w-[200px] hover:!bg-black hover:text-white tracking-wide"
                    color="default"
                    variant="light"
                    as={Link}
                    href={getData.url}
                    radius="full"
                    size="md">
                    load more
                </Button>
                <div className="flex grow h-[2px] bg-gray-600/30 rounded" />
            </div>
        </>
    )
}
