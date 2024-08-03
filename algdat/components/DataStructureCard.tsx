import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";


interface Algorithm {
    function: string;
    description: string;
    returns: string;
}

interface DataStructureCardProps {
    dataStructureData: {
        dataStruct: string;
        id: string;
        description: string;
        algorithms: Algorithm[];
    }
}

export const DataStructureCard: React.FC<DataStructureCardProps> = ({ dataStructureData }) => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <p>{dataStructureData.dataStruct}</p>
            </CardHeader>
            <Divider orientation="horizontal" />
            <CardBody>
                <p>{dataStructureData.description}</p>
            </CardBody>
            <CardFooter className="">
                <Button>
                    <Link href={`/datastructures/${dataStructureData.id}`}>
                        <a>Learn More</a>
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

