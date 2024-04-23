import Heading from "./Heading";

export default function ColorfulFlower() {
    return (
        <>
            <Heading
                title={"Colorful Flower"}
                icon={'../flower-thin.svg'}
                colorBorder={"border-teal-900"}
                colorBackground={"bg-teal-800/30"}
                colorText={"text-teal-700"}
                isIcon={false}
            />
        </>
    )
}
