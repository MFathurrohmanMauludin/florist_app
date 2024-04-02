import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function Header() {
    const linkData = ['home', 'shop', 'blog', 'about'];
    return (
        <>
            <div className="flex justify-between px-6 py-5">
                {/* logo */}
                <a href="http://">Flower Go</a>

                {/* nav-center */}
                <div className="flex items-center gap-x-4">
                    {
                        linkData.map((data, index) =>
                            <Button
                                as={Link}
                                href="https://github.com/nextui-org/nextui"
                                size="sm"
                                key={index}>
                                {data}
                            </Button>
                        )
                    }

                </div>

                {/* nav-right */}
            </div>
        </>
    )
}
