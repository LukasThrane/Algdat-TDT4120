import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

interface DataStructure {
    name: string;
}

interface DataStructureCardProps {
    dataStructureData: DataStructure;
}

export const DataStructureCard: React.FC<DataStructureCardProps> = ({ dataStructureData }) => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <p>{dataStructureData.name}</p>
            </CardHeader>
            <Divider orientation="horizontal" />
            <CardBody>
                <p>addah</p>
            </CardBody>
        </Card>
    );
}

