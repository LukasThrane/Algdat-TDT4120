import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

interface DataStructureCardProps {
    dataStructureData: {
        name: string,
    }
}

export const DataStructureCard: React.FC<DataStructureCardProps> = ({ dataStructureData }) => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <p>
                    {dataStructureData.name}
                </p>
            </CardHeader>
            <Divider orientation="horizontal" />
            <CardBody>
                <p>addah</p>
            </CardBody>
        </Card>
    )
}