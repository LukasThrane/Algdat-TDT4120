import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

interface DataStructure {
    name: string;
    id: string;
}

interface DataStructureCardProps {
    dataStructureData: DataStructure;
}

export const DataStructureCard: React.FC<DataStructureCardProps> = ({ dataStructureData }) => {
    return (
        <Card
            className="mt-4"
        >
            <CardHeader>
                <p>{dataStructureData.name}</p>
            </CardHeader>
            <Divider orientation="horizontal" />
            <CardBody>
                <Button>
                    <Link href={`/datastructures/${dataStructureData.id}`}>
                        <a>Learn More</a>
                    </Link>
                </Button>
            </CardBody>
        </Card>
    );
}

